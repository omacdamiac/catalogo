import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodrigoComponent } from './rodrigo.component';

describe('RodrigoComponent', () => {
  let component: RodrigoComponent;
  let fixture: ComponentFixture<RodrigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodrigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
