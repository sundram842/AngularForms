import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.scss']
})
export class ReactiveFormValidationComponent implements OnInit {

adduser!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.adduser=new FormGroup({
     'name':new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
     'about':new FormControl()
    })
  }

  submit() {

  }

}
