import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPropertyComponent } from './data-property.component';

describe('DataPropertyComponent', () => {
  let component: DataPropertyComponent;
  let fixture: ComponentFixture<DataPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
