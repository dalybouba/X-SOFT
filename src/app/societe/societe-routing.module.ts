import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { modaliteDePaiement } from '../models/modaliteDePaiement.model';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { DeviseComponent } from './devise/devise.component';
import { ModalitePaiementComponent } from './modalite-paiement/modalite-paiement.component';
import { ParamSocieteComponent } from './param-societe/param-societe.component';
import { ParamTiersComponent } from './param-tiers/param-tiers.component';
import { ProcessingParamComponent } from './processing-param/processing-param.component';

const routes: Routes = [
  {path:'company' ,component:ParamSocieteComponent},
  {path:'company/devise' ,component:DeviseComponent},
  {path:'company/devise/:ID' ,component:DeviseComponent},
  {path:'company/collaborateur' ,component:CollaborateurComponent},
  {path:'company/collaborateur/:ID' ,component:CollaborateurComponent},
  {path:'company/param-tiers' ,component:ParamTiersComponent},
  {path:'company/param-tiers/:ID' ,component:ParamTiersComponent},
  {path:'company/param-tiers/update/:ID1' ,component:ParamTiersComponent},
  {path:'company/paymentmethods' ,component:ModalitePaiementComponent},
  {path:'company/paymentmethods/:ID' ,component:ModalitePaiementComponent},
  {path:'company/processing' ,component:ProcessingParamComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocieteRoutingModule { }
