import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelExtraComponent } from './hostel-extra.component';

describe('HostelExtraComponent', () => {
  let component: HostelExtraComponent;
  let fixture: ComponentFixture<HostelExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelExtraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostelExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
