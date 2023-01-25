import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon:'home'},
    { title: 'Clientes', url: '/clientes', icon:'people'},
    { title: 'Ciudades', url: '/ciudades', icon:'location'},
  ];
  public labels = [];
  constructor() {}
}
