import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelMapComponent } from './hostel-map.component';

describe('HostelMapComponent', () => {
  let component: HostelMapComponent;
  let fixture: ComponentFixture<HostelMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostelMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
