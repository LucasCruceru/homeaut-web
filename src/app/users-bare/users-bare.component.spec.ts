import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBareComponent } from './users-bare.component';

describe('UsersBareComponent', () => {
  let component: UsersBareComponent;
  let fixture: ComponentFixture<UsersBareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersBareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
