import { Injectable } from '@angular/core';
import { IQuote} from "../models/Quote";
import {auditTime, interval, map, Observable, of, startWith, tap} from "rxjs";
import {frequenciesList} from "../models/Frequency";

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {

  constructor() { }

  GetQuote(dataNeeded: number, idFrequency: number): Observable<IQuote> {

    function calculateOfferInfo(dataNeeded: number, idFrequency: number) {
      return (10 + dataNeeded *0.002) * frequenciesList.find(frequency => frequency.id === idFrequency)!.multiplier;
    }

    return of({id: Math.round(Math.random() * 1000000) , price: calculateOfferInfo(dataNeeded, idFrequency)}).pipe(
      tap(() => console.log('FakeHttpService.getQuote() called')),
      auditTime(1000));
  }

  GetTotalCustomers() {
    return interval(1000)
      .pipe(map(interval => 12354 + interval),
        startWith(12354));
  }
}
