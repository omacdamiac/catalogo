import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesService } from 'src/app/data/imagenes/imagenes.service';

@Component({
  selector: 'app-rodrigo',
  templateUrl: './rodrigo.component.html',
  styleUrls: ['./rodrigo.component.scss']
})
export class RodrigoComponent implements OnInit {
  listado!: any[];
  categoria!: any | null;
  constructor(
    private imagenesService: ImagenesService,
    public router: Router
  ) {
    this.categoria = this.router.getCurrentNavigation()?.extras?.state as any;
  }

  ngOnInit(): void {
    this.getPicture();
  }

  getPicture() {
    this.listado = this.imagenesService.list_picture_rodrigo;
  }
}
