import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a href="/">Home</a>
  <a href="/lazy">Lazy</a>
  <a href="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
