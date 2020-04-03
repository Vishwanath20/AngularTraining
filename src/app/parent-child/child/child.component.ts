import { Component, OnInit, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  @Input() messageForChildren:string;

  message : string = "This message is for parent";
  @Output() messageForParent = new EventEmitter<string>();

  userName = "The user name is Vishu";
  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(){
    this.messageForParent.emit(this.message);
  }
}
