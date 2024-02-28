import { Component } from '@angular/core';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';


HousingLocationComponent
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  housingLocationId = -1

  housingLocation:HousingLocation|undefined;

  constructor(private currentRoute:ActivatedRoute, private housingService:HousingService)
  {
    this.housingLocationId = Number(this.currentRoute.snapshot.params['id']);

    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }



}
