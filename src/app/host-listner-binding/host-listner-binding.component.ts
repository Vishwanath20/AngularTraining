import { Component, OnInit } from '@angular/core';
import { SharedSerive } from '../shared.service';

@Component({
  selector: 'app-host-listner-binding',
  templateUrl: './host-listner-binding.component.html',
  styleUrls: ['./host-listner-binding.component.sass']
})
export class HostListnerBindingComponent implements OnInit {

  message:string;
  constructor(private sharedService : SharedSerive) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe( message => this.message = message);
  }

  newMessage(){
    this.sharedService.nextMessage("This is second message");
  }
}
