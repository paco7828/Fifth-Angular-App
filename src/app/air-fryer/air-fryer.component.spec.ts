import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFryerComponent } from './air-fryer.component';

describe('AirFryerComponent', () => {
  let component: AirFryerComponent;
  let fixture: ComponentFixture<AirFryerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirFryerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirFryerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
