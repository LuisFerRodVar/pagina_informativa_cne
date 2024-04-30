import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutmeComponent } from './home-aboutme.component';

describe('HomeAboutmeComponent', () => {
  let component: HomeAboutmeComponent;
  let fixture: ComponentFixture<HomeAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAboutmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
