import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayAddRemoveComponent } from './form-array-add-remove.component';

describe('FormArrayAddRemoveComponent', () => {
  let component: FormArrayAddRemoveComponent;
  let fixture: ComponentFixture<FormArrayAddRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrayAddRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayAddRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
