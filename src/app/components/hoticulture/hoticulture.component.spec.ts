import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoticultureComponent } from './hoticulture.component';

describe('HoticultureComponent', () => {
  let component: HoticultureComponent;
  let fixture: ComponentFixture<HoticultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoticultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoticultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
