import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryDataComponent } from './directory-data.component';

describe('DirectoryDataComponent', () => {
  let component: DirectoryDataComponent;
  let fixture: ComponentFixture<DirectoryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
