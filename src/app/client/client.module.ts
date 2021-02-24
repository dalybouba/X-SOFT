import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent, FilterPipe } from './client-list/client-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateComponent } from './update/update.component';
import { CreatComponent } from './creat/creat.component';
import { ClientRoutingModule } from './client-routing.module';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FilterPipe,
    ClientListComponent,
    UpdateComponent,
    CreatComponent,
    ContactComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],

})
export class ClientModule { }
