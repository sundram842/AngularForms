import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-reseat',
  templateUrl: './template-reseat.component.html',
  styleUrls: ['./template-reseat.component.scss']
})
export class TemplateReseatComponent implements OnInit {

customerNmae: any;
check: any;
addcustomer(arg0: any) {

}
  reser(arg0:any) {
     arg0.reset()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
