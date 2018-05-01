import { Component } from '@angular/core';
import { BERRIES } from '../mock-berries';


@Component({
  selector: 'bb-card',
  templateUrl: './bb-card.component.html',
  styleUrls: ['./bb-card.component.css']
})
export class BbCardComponent {

  berries = BERRIES;

}