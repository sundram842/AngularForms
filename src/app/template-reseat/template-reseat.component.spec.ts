import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReseatComponent } from './template-reseat.component';

describe('TemplateReseatComponent', () => {
  let component: TemplateReseatComponent;
  let fixture: ComponentFixture<TemplateReseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateReseatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateReseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
