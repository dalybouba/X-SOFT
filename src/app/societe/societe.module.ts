import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { ParamSocieteComponent } from './param-societe/param-societe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviseComponent } from './devise/devise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { ScrollSpyDirective } from '../directive/scroll-spy.directive';
import { ParamTiersComponent } from './param-tiers/param-tiers.component';
import { ModalitePaiementComponent } from './modalite-paiement/modalite-paiement.component';


@NgModule({
  declarations: [ParamSocieteComponent, DeviseComponent, CollaborateurComponent,ScrollSpyDirective, ParamTiersComponent, ModalitePaiementComponent],
  imports: [
   
    CommonModule,
    SocieteRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[]
})
export class SocieteModule { }
