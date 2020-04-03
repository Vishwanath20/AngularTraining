import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import{ChildComponent} from './child/child.component';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.sass']
})
export class ParentChildComponent implements OnInit  {

  messageFromParent = "This is from parent component";
  messageFromChild :string;
  userName:string;

  @ViewChild(ChildComponent, {static: true}) Chi;

  constructor() { }

  ngOnInit() {
    this.userName = this.Chi.userName;
    console.log(this.userName);
  }

  receiveMessage($event){
    this.messageFromChild =$event;
  }

  // ngAfterViewInit() {
  //   this.userName = this.Chi.userName;
  //   console.log(this.userName);
  // }
}
