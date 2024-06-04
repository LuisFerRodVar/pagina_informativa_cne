import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryRegistrationComponent } from './directory-registration.component';

describe('DirectoryRegistrationComponent', () => {
  let component: DirectoryRegistrationComponent;
  let fixture: ComponentFixture<DirectoryRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectoryRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
