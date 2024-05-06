import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGeographyComponent } from './about-geography.component';

describe('AboutGeographyComponent', () => {
  let component: AboutGeographyComponent;
  let fixture: ComponentFixture<AboutGeographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutGeographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutGeographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
