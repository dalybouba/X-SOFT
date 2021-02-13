import {NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientListComponent } from "./client-list/client-list.component";
import { CreatComponent } from "./creat/creat.component";
import { UpdateComponent } from './update/update.component';



const routes: Routes = [

   {path:'list' ,component:ClientListComponent},
   {path:'update/:id' ,component:UpdateComponent},
   {path:'create' ,component:CreatComponent},
  
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ClientRoutingModule { }