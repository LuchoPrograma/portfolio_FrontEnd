import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndExperienceComponent } from './education-and-experience.component';

describe('EducationAndExperienceComponent', () => {
  let component: EducationAndExperienceComponent;
  let fixture: ComponentFixture<EducationAndExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAndExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAndExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
