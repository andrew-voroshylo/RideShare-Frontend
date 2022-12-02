import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderRegisterComponent } from './rider-register.component';

describe('RiderRegisterComponent', () => {
  let component: RiderRegisterComponent;
  let fixture: ComponentFixture<RiderRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiderRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiderRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
