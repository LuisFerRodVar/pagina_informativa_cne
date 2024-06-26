import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDataComponent } from './about-data.component';

describe('AboutDataComponent', () => {
  let component: AboutDataComponent;
  let fixture: ComponentFixture<AboutDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
