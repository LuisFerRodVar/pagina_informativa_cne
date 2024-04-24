import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CceComponent } from './cce.component';

describe('CceComponent', () => {
  let component: CceComponent;
  let fixture: ComponentFixture<CceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
