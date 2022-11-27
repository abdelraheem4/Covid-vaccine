import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevaccineComponent } from './createvaccine.component';

describe('CreatevaccineComponent', () => {
  let component: CreatevaccineComponent;
  let fixture: ComponentFixture<CreatevaccineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevaccineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatevaccineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
