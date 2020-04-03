  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class TestService {

    constructor( private http:HttpClient) { }

    fetch(){
      return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
    }

    fetch1(){
      return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }
  }
