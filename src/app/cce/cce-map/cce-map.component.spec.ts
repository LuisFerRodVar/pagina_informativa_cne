import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CceMapComponent } from './cce-map.component';

describe('CceMapComponent', () => {
  let component: CceMapComponent;
  let fixture: ComponentFixture<CceMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CceMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CceMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
