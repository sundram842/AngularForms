import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  adduser!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.adduser=this.fb.group({
      'name':new FormControl(),
      'about':new FormControl()
    })
  }

  submit()
  {
    console.log(this.adduser)
  }

}
