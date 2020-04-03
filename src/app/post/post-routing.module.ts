import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {PostComponent} from './post.component';

const route : Routes = [
    {path:"", component:PostComponent}
];

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(route)]
})

export class PostRoutingModule{}