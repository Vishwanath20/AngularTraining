import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterceptorDemoComponent } from './interceptor-demo/interceptor-demo.component';
import { HostListnerBindingComponent } from './host-listner-binding/host-listner-binding.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponent } from './parent-child/child/child.component';
import { AsyncPromisePipeComponent } from './async-promise-pipe/async-promise-pipe.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { FileuploaddownloadComponent } from './fileuploaddownload/fileuploaddownload.component';


const routes: Routes = [
  {
    path: "",
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
  // {
  //   path:'user',
  //   component:UserListComponent
  // },
  // {
  //   path:'userAdd',
  //   component:UserAddComponent
  // },
  // {
  //   path:'userDetails',
  //   component:UserDetailsComponent
  // },
  {path : 'useraction', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {
    path: 'fileuploaddownload',
    component: FileuploaddownloadComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
