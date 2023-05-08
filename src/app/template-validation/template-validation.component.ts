import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.scss']
})
export class TemplateValidationComponent implements OnInit {
customerNmae: any;
check: any;
addcustomer(arg: any) {
console.log(arg)
}

  constructor() { }

  ngOnInit(): void {
  }

}
