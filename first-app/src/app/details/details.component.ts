import { Component } from '@angular/core';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


HousingLocationComponent
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  
  housingLocationId = -1

  housingLocation:HousingLocation|undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private currentRoute:ActivatedRoute, private housingService:HousingService)
  {
    this.housingLocationId = Number(this.currentRoute.snapshot.params['id']);

    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
