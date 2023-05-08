import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array-add-remove',
  templateUrl: './form-array-add-remove.component.html',
  styleUrls: ['./form-array-add-remove.component.scss']
})
export class FormArrayAddRemoveComponent implements OnInit {
remove(i:number) {
this.userArray.removeAt(i)
}
addForm() {
let newUser=this.fb.group({
  'name':'',
  'age':'',
  'dept':''
})
this.userArray.push(newUser)
}

  add!: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.add = this.fb.group({
      'user': new FormArray([
        this.fb.group({
          'name': new FormControl('you'),
          'age': new FormControl('18'),
          'dep': new FormControl('ECE')
        })
      ])
    })

  }

  get userArray(): FormArray {
    return this.add.get('user') as FormArray;
  }

}
