import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-set-reactive-form',
  templateUrl: './set-reactive-form.component.html',
  styleUrls: ['./set-reactive-form.component.scss']
})
export class SetReactiveFormComponent implements OnInit {
  adduser!:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.adduser=this.fb.group({
    //   'name':new FormControl("hf"),
    //   'about':new FormControl("bkd")

    // })
     this.adduser=this.fb.group({
      'name':new FormControl(),
      'about':new FormControl()

    })

   const newObject=
   {
    'name':"abc",
    'about':"xyz"
   }

   this.adduser.setValue(newObject)

  }

  submit()
  {
    
  }

}
