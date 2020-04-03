import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { InterceptorDemoComponent } from './interceptor-demo/interceptor-demo.component';
import {TestService} from './interceptor-demo/test.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { httpInterceptProvider } from './interceptor-demo';
import { HostListnerBindingComponent } from './host-listner-binding/host-listner-binding.component';
import { ChangecolorDirective } from './changecolor.directive';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponent } from './parent-child/child/child.component';
import { SharedSerive } from './shared.service';
import { AsyncPromisePipeComponent } from './async-promise-pipe/async-promise-pipe.component';
//import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    InterceptorDemoComponent,
    HostListnerBindingComponent,
    ChangecolorDirective,
    ParentChildComponent,
    ChildComponent,
    AsyncPromisePipeComponent,
    //PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestService, httpInterceptProvider, SharedSerive],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
