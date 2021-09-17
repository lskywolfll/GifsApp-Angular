import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent {
  constructor(private readonly gifsService: GifsService) {}

  get historial(): string[] {
    return this.gifsService.historial;
  }

  buscar(termino: string){
    this.gifsService.buscarGifs(termino);
  }
}
