import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { ParamSocieteComponent } from './param-societe/param-societe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviseComponent } from './devise/devise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollaborateurComponent} from './collaborateur/collaborateur.component';
import { ParamTiersComponent } from './param-tiers/param-tiers.component';
import { ModalitePaiementComponent } from './modalite-paiement/modalite-paiement.component';
import { SharedModule } from '../shared/shared.module';
import { ProcessingParamComponent } from './processing-param/processing-param.component';


@NgModule({
  declarations: [
    ParamSocieteComponent,
     DeviseComponent,
      CollaborateurComponent,
       ParamTiersComponent,
        ModalitePaiementComponent,
        ProcessingParamComponent],
  imports: [
    SharedModule,
    CommonModule,
    SocieteRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[]
})
export class SocieteModule { }
