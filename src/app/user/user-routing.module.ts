import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


console.log("#########3 inside the user routing file");


const routes: Routes = [
    {
        path:"",
        component:UserdashboardComponent,
        children:[
            {
                path:'list',
                component:UserListComponent
            },
            {
                path:'add',
                component:UserAddComponent
                
            },
            {
                path:'detail/:id',
                component:UserDetailsComponent
            },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
