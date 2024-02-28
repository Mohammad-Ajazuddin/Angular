import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  //You have to add the ! because the input is expecting the value to be passed. In this case, there is no default value. 
}
