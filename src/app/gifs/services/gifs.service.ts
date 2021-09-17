import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apikey: string = '6vLJCHo1qdnTYUbYKz5KFbpxUwiTJN7x';
  private _gifsLimit: number = 10;
  private _gifsUrl: string = `https://api.giphy.com/v1/gifs`;
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private readonly http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (query.trim().length == 0) {
      return;
    }

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    if (this._historial.length > 6) {
      this._historial.shift();
    }

    const params = new HttpParams()
      .set('api_key', this._apikey)
      .set('limit', this._gifsLimit)
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this._gifsUrl}/search`, { params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
