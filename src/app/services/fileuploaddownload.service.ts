import {HttpClient, HttpHeaders} from '@angular/common/http';
 import { Injectable } from "@angular/core";
// import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileuploaddownloadService {

 
  constructor(private _http:HttpClient){}

  downloadFile(file:String){
      var body = {filename:file};

      return this._http.post('http://localhost:3000/file/download',body,{
          responseType : 'blob',
          headers:new HttpHeaders().append('Content-Type','application/json')
      });
  }

}
