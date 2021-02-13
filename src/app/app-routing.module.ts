import {NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientListComponent } from "./client/client-list/client-list.component";
import { CreatComponent } from "./client/creat/creat.component";
import { UpdateComponent } from "./client/update/update.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";



const routes: Routes = [
    {path:'' ,component:DashboardComponent},
   //{path:'client-list' ,component:ClientListComponent},
  //  {path:'update/:id' ,component:UpdateComponent},
  //  {path:'creat' ,component:CreatComponent},
  //  {path:'header' ,component:HeaderComponent},
   {path:'dashboard' ,loadChildren:()=>import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
   {path:'customers' ,loadChildren:()=>import('./client/client.module').then(m => m.ClientModule)},
   {path:'sidebar' ,loadChildren:()=>import('./sidebar/sidebar.module').then(m => m.SidebarModule)},
   {path:'settings' ,loadChildren:()=>import('./societe/societe.module').then(m => m.SocieteModule)},
   
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }