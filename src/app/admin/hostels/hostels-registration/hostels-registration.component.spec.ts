import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelsRegistrationComponent } from './hostels-registration.component';

describe('HostelsRegistrationComponent', () => {
  let component: HostelsRegistrationComponent;
  let fixture: ComponentFixture<HostelsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelsRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostelsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
