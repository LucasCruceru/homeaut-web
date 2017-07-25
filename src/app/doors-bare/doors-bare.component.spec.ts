import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsBareComponent } from './doors-bare.component';

describe('DoorsBareComponent', () => {
  let component: DoorsBareComponent;
  let fixture: ComponentFixture<DoorsBareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsBareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsBareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
