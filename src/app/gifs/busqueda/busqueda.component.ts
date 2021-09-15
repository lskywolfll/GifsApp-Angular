import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {

  constructor(private readonly gifsService:GifsService){}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const termino = this.txtBuscar.nativeElement.value;

    this.gifsService.buscarGifs(termino);

    this.txtBuscar.nativeElement.value = "";
  }
}
