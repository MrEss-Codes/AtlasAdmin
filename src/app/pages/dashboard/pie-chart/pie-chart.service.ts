import { Injectable } from '@angular/core';

@Injectable()
export class PieChartService {
  public getDaySchedule() {
    return [
      {
        key: 'Coding',
        hours: 8,
      },
      {
        key: 'Not Dying',
        hours: 4,
      },
      {
        key: 'Gym',
        hours: 1,
      },
      {
        key: 'Sleeping',
        hours: 4,
      },
      {
        key: 'Procrastinating',
        hours: 7,
      },
    ];
  }
}
