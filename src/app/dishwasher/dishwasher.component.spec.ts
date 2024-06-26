import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishwasherComponent } from './dishwasher.component';

describe('DishwasherComponent', () => {
  let component: DishwasherComponent;
  let fixture: ComponentFixture<DishwasherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishwasherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DishwasherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
