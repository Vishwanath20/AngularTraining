import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-interceptor-demo',
  templateUrl: './interceptor-demo.component.html',
  styleUrls: ['./interceptor-demo.component.sass']
})
export class InterceptorDemoComponent implements OnInit {

  constructor( private test:TestService) { }

  ngOnInit() {
  }
  
  fetch(){
    this.test.fetch().subscribe(data =>{
      console.log(data);
    });
    this.test.fetch1().subscribe( data=> console.log(data));
  }

  birthday = new Date(1988, 3, 15);
}
