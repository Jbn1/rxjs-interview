import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {frequenciesList} from "../models/Frequency";
import {Observable} from "rxjs";
import {FakeHttpService} from "../services/fake-http.service";

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {

  formGroup: FormGroup;

  //To get the static list of all available frequencies
  frequencies = frequenciesList;

  totalCustomers$: Observable<number>;

  constructor(private readonly fakeHttpService: FakeHttpService) {
    /*FakeHttpService: function GetQuote(dataNeeded: number, idFrequency: number): Observable<IQuote> */

    this.totalCustomers$ = this.fakeHttpService.GetTotalCustomers();

    this.formGroup = new FormGroup({
      frequency: new FormControl<number | null>(null),
      dataNeeded: new FormControl<number| null>(null, Validators.min(100))
    });
  }

  get frequency() : FormControl{
    return this.formGroup.get('frequency') as FormControl;
  }

  get dataNeeded() : FormControl{
    return this.formGroup.get('dataNeeded') as FormControl;
  }

}
