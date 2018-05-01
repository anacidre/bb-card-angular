import {Component, Input} from '@angular/core';
import {Berry} from '../berry.interface';


@Component({
  selector: 'bb-card',
  templateUrl: './bb-card.component.html',
  styleUrls: ['./bb-card.component.css']
})
export class BbCardComponent {

  @Input() berry: Berry;

}
