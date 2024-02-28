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
  filteredLocationList: HousingLocation[] = [];
  notfound:number = 0;

  //dependency injection of service
  constructor(private housingService : HousingService){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(inputValue:string)
  {
    if (!inputValue) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(inputValue.toLowerCase())
    );

    if(this.filteredLocationList.length==0)
    {
      this.notfound = 1;
    }
    else{
      this.notfound = 0;
    }
  }
}
