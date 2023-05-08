import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormIntroductionComponent } from './reactive-form-introduction.component';

describe('ReactiveFormIntroductionComponent', () => {
  let component: ReactiveFormIntroductionComponent;
  let fixture: ComponentFixture<ReactiveFormIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
