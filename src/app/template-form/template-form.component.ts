import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Customer {
  customerNmae: string;
  check: boolean;
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }
  firstName=''
  customerNmae=""
  check:boolean=false

  ngOnInit(): void {
  }

  addcustomer(value:NgForm)
  {
    console.log(value)

  }


}
