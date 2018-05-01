import { Component } from '@angular/core';
import { BERRIES } from './mock-berries';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  berries = BERRIES;

}
