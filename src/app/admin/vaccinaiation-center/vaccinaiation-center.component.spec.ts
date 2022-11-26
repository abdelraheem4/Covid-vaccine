import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinaiationCenterComponent } from './vaccinaiation-center.component';

describe('VaccinaiationCenterComponent', () => {
  let component: VaccinaiationCenterComponent;
  let fixture: ComponentFixture<VaccinaiationCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinaiationCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinaiationCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
