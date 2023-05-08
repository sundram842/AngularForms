import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  add!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.add=this.fb.group({
      'user':new FormArray([
        this.fb.group({
          'name':new FormControl('you'),
          'age':new FormControl('18'),
          'dep':new FormControl('ECE')
        })
      ])
    })
   
  }

  get userArray(): FormArray {
    return this.add.get('user') as FormArray;
  }

}
