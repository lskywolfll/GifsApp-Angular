import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _apikey: string = '6vLJCHo1qdnTYUbYKz5KFbpxUwiTJN7x';
  private _gifsLimit: number = 10;
  private _gifsUrl: string = `https://api.giphy.com/v1/gifs/search?api_key=${this._apikey}&limit=${this._gifsLimit}`;
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private readonly http: HttpClient) {}

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (query.trim().length == 0) {
      return;
    }

    if (this._historial.includes(query)) {
      alert("It's duplicate search");
      return;
    } else {
      this.http.get(`${this._gifsUrl}&q=${query}`).subscribe(resp => {
        console.log(resp);
      })
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
  }
}
