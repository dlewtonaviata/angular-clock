import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {

  constructor() { }

  getTime (): Observable<string> {
    return of('1542394421635902');
  }
}
