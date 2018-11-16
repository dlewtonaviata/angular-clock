import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, Observable, concat } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  static timeServer = 'https://nist.time.gov/actualtime.cgi?disablecache=1542404055741&__lzbc__=zcr7up';
  static headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'text/xml');

  time: number;

  constructor(private httpClient: HttpClient) { }

  resetTime (): Observable<number> {
    return this.httpClient
      .get(TimeTrackingService.timeServer, { responseType: 'text' })
      .pipe(map(value => {
        const timeStr = value.split(' ')
          .filter(item => /^time=/.test(item.substr(0, 5)))
          .map(item => item.split('').filter(x => /[0-9]/.test(x)).join(''))
          .pop();

        return (this.time = (+timeStr / 1000));
      }));
  }

  getTime (): Observable<number> {
    const initial = this.resetTime();
    const tracker = interval(1000).pipe(map(_ => this.time = this.time + 1000));

    return concat(initial, tracker);
  }
}
