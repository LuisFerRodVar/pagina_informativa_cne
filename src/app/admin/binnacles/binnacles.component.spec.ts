import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinnaclesComponent } from './binnacles.component';

describe('BinnaclesComponent', () => {
  let component: BinnaclesComponent;
  let fixture: ComponentFixture<BinnaclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinnaclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BinnaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
