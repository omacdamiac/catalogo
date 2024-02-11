import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

  title = 'catalogo';
  options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  fecha: any;
  cosntructor() {
    this.fecha = this.date.toLocaleDateString('en-US', this.options);
  }
}
