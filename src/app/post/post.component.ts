import { Component, OnInit } from '@angular/core';
import { SharedSerive } from '../shared.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  message:string;
  constructor(private sharedService : SharedSerive) { }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe( message => this.message = message);
  }

}
