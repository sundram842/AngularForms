import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
interface form{
  name:string;
  about:string
}



@Component({
  selector: 'app-reactive-form-introduction',
  templateUrl: './reactive-form-introduction.component.html',
  styleUrls: ['./reactive-form-introduction.component.scss']
})
export class ReactiveFormIntroductionComponent implements OnInit {
  adduser!: FormGroup;
  
submit() {
console.log(this.adduser)
}

  constructor() { }

  ngOnInit(): void {
   this.adduser=new FormGroup({
    'name':new FormControl(),
    'about':new FormControl()
   })
  }

}
