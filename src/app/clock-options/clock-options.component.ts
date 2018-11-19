import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TimeTrackingService } from '../time-tracking.service';

@Component({
  selector: 'app-clock-options',
  templateUrl: './clock-options.component.html',
  styleUrls: ['./clock-options.component.scss']
})
export class ClockOptionsComponent implements OnInit {
  showOptions = new FormControl(true);

  constructor(private timeTrackingService: TimeTrackingService) { }

  ngOnInit() {
  }

  resetTime() {
    this.timeTrackingService.resetTime().subscribe();
  }
}
