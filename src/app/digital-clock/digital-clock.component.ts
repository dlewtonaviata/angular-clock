import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { TimeTrackingService } from '../time-tracking.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit, OnDestroy {
  subscriptions = [];
  time;

  // Constructor shouldn't DO anything... Especially use a service!
  constructor(private timeTrackingService: TimeTrackingService) { }

  // Use ngOnInit for any possibly complex initialization
  ngOnInit() {
    this.subscriptions.push(
      this.timeTrackingService.getTime().subscribe(time => this.time = time)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
