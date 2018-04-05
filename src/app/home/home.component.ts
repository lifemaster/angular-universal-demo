import { Component, OnInit, Renderer, Inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DOCUMENT, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3>`
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(
    @Inject(DOCUMENT)
    private document: any,
    private renderer: Renderer,
    private http: HttpClient,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').subscribe(data => {
      this.message = JSON.stringify(data);

      const elem = this.renderer.createElement(this.document.head, 'meta');
      this.renderer.setElementProperty(elem, 'name', 'description');
      this.renderer.setElementProperty(elem, 'content', 'My custom description');

      this.titleService.setTitle('My custom title');
    });
  }
}
