import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateValidationComponent } from './template-validation/template-validation.component';
import { TemplateReseatComponent } from './template-reseat/template-reseat.component';
import { ReactiveFormIntroductionComponent } from './reactive-form-introduction/reactive-form-introduction.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { SetReactiveFormComponent } from './set-reactive-form/set-reactive-form.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormArrayAddRemoveComponent } from './form-array-add-remove/form-array-add-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    TemplateValidationComponent,
    TemplateReseatComponent,
    ReactiveFormIntroductionComponent,
    FormBuilderComponent,
    SetReactiveFormComponent,
    ReactiveFormValidationComponent,
    FormArrayComponent,
    FormArrayAddRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
