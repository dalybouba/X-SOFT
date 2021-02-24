import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from './sidebar/sidebar.module';
import { ClientModule } from './client/client.module';
import { HeaderModule } from './header/header.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminComponent } from './admin/admin.component';
import { SocieteModule } from './societe/societe.module';
import { SharedModule } from './shared/shared.module';







@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,

  ],
  imports: [
    SharedModule,
    SidebarModule,
    ClientModule,
    HeaderModule,
    DashboardModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    SocieteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
