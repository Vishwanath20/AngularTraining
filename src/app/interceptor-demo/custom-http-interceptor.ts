import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { onErrorResumeNext, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        console.log("inside the custom interceptor.ts file");
        //logic
        console.log("Url is::"+request.url);
        const authToken = "My-Auth-Token";
        const authReq = request.clone({
            setHeaders:{Authotization123:authToken}
        });
        return next.handle(authReq);
    }
}