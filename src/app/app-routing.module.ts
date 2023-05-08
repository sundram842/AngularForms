import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { TemplateReseatComponent } from './template-reseat/template-reseat.component';
import { ReactiveFormIntroductionComponent } from './reactive-form-introduction/reactive-form-introduction.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { SetReactiveFormComponent } from './set-reactive-form/set-reactive-form.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormArrayAddRemoveComponent } from './form-array-add-remove/form-array-add-remove.component';

const routes: Routes = [
  {
    path:"templateForm",
    component:TemplateFormComponent
  },
  {
    path:"tvaladition",
    component:TemplateValidationComponent
  },
  {
    path:"treseatForm",
    component:TemplateReseatComponent
  },
  {
    path:"rintroduction",
    component:ReactiveFormIntroductionComponent
  },
  {
    path:"formbuilder",
    component:FormBuilderComponent
  },
  {
    path:"setreactiveform",
    component:SetReactiveFormComponent
  },
  {
    path:"reactiveValidation",
    component:ReactiveFormValidationComponent
  },
  {
    path:"formarray",
    component:FormArrayComponent
  },
  {
    path:"formarryar",
    component:FormArrayAddRemoveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
