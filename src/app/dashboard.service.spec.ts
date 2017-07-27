import {TestBed, inject} from '@angular/core/testing';

import {DashboardService} from './dashboard.service';

describe('DoorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService]
    });
  });

  it('Should be created', inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
  }));
});
