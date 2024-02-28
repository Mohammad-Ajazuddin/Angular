import { Component } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  housingLocationList: HousingLocation[] = [];  
  //dependency injection of service
  constructor(private housingService : HousingService){
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }



}
