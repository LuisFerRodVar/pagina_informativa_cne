import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelsUpdateComponent } from './hostels-update.component';

describe('HostelsUpdateComponent', () => {
  let component: HostelsUpdateComponent;
  let fixture: ComponentFixture<HostelsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelsUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostelsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
