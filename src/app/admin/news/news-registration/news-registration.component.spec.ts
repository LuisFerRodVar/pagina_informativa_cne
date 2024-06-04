import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRegistrationComponent } from './news-registration.component';

describe('NewsRegistrationComponent', () => {
  let component: NewsRegistrationComponent;
  let fixture: ComponentFixture<NewsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
