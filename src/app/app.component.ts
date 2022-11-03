import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'navaja', url: '/navaja', icon: 'mail' },
    { title: 'Edad', url: '/edad', icon: 'mail' },
    { title: 'Genero', url: '/genero', icon: 'paper-plane' },
    { title: 'Pais', url: '/pais', icon: 'heart' },
    { title: 'Clima', url: '/clima', icon: 'archive' },
    { title: 'acerca de', url: '/info', icon: 'information' }
  ];
  constructor() {}
}
