import { Component, OnInit } from '@angular/core';

import { TimeTrackingService } from '../time-tracking.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  time: string;

  // Constructor shouldn't DO anything... Especially use a service!
  constructor(private timeTrackingService: TimeTrackingService) { }

  // Use ngOnInit for any possibly complex initialization
  ngOnInit() {
    this.timeTrackingService.getTime().subscribe(time => this.time = time);
  }
}
