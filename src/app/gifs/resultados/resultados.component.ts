import { Component } from '@angular/core';
import { Gif } from '../interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {
  constructor(private readonly gifsService: GifsService) {}

  get resultados(): Array<Gif> {
    return this.gifsService.resultados;
  }
}
