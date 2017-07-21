import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorEditComponent } from './door-edit.component';

describe('DoorEditComponent', () => {
  let component: DoorEditComponent;
  let fixture: ComponentFixture<DoorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
