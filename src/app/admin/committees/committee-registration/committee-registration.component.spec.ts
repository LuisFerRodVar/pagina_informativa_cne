import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeRegistrationComponent } from './committee-registration.component';

describe('CommitteeRegistrationComponent', () => {
  let component: CommitteeRegistrationComponent;
  let fixture: ComponentFixture<CommitteeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitteeRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommitteeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
