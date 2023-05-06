import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduExpAddComponent } from './edu-exp-add.component';

describe('EduExpAddComponent', () => {
  let component: EduExpAddComponent;
  let fixture: ComponentFixture<EduExpAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduExpAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduExpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
