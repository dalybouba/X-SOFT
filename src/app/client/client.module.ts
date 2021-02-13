import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent, FilterPipe } from './client-list/client-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateComponent } from './update/update.component';
import { CreatComponent } from './creat/creat.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [
    FilterPipe,
    ClientListComponent,
    UpdateComponent,
    CreatComponent,

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],

})
export class ClientModule { }
