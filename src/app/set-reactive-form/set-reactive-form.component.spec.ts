import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetReactiveFormComponent } from './set-reactive-form.component';

describe('SetReactiveFormComponent', () => {
  let component: SetReactiveFormComponent;
  let fixture: ComponentFixture<SetReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
