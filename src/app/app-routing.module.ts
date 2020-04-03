import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterceptorDemoComponent } from './interceptor-demo/interceptor-demo.component';
import { HostListnerBindingComponent } from './host-listner-binding/host-listner-binding.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponent } from './parent-child/child/child.component';
import { AsyncPromisePipeComponent } from './async-promise-pipe/async-promise-pipe.component';


const routes: Routes = [
  {
    path: "home",
    component: InterceptorDemoComponent
  },
  {
    path: "posts",
    loadChildren: "../app/post/post.module#PostModule"
  },
  {
    path: "hostListenerBinding",
    component:HostListnerBindingComponent
  },
  {
    path: "asyncPromisePipe",
    component:AsyncPromisePipeComponent
  },
  {
    path: "parent",
    component:ParentChildComponent,
    children: [
      {path:"child", component:ChildComponent, pathMatch:'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
