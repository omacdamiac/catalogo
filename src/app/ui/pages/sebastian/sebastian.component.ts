import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesService } from 'src/app/data/imagenes/imagenes.service';

@Component({
  selector: 'app-sebastian',
  templateUrl: './sebastian.component.html',
  styleUrls: ['./sebastian.component.scss']
})
export class SebastianComponent implements OnInit {
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
    this.listado = this.imagenesService.list_picture_sebastian;
  }
}