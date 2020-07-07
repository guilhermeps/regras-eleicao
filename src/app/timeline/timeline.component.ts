import { Component, OnInit } from '@angular/core';

import { IEvent, TimelineService } from '../timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  events: IEvent[];

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
    this.events = this.timelineService.getEvents();
  }

}
