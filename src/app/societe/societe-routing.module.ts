import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { modaliteDePaiement } from '../models/modaliteDePaiement.model';
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { DeviseComponent } from './devise/devise.component';
import { ModalitePaiementComponent } from './modalite-paiement/modalite-paiement.component';
import { ParamSocieteComponent } from './param-societe/param-societe.component';
import { ParamTiersComponent } from './param-tiers/param-tiers.component';

const routes: Routes = [
  {path:'company' ,component:ParamSocieteComponent},
  {path:'settings/company/devise' ,component:DeviseComponent},
  {path:'settings/companydevise/:ID' ,component:DeviseComponent},
  {path:'settings/company/collaborateur' ,component:CollaborateurComponent},
  {path:'settings/companycollaborateur/:ID' ,component:CollaborateurComponent},
  {path:'settings/company/param-tiers' ,component:ParamTiersComponent},
  {path:'settings/company/param-tiers/:ID' ,component:ParamTiersComponent},
  {path:'settings/company/modaliteDePaiement' ,component:ModalitePaiementComponent},
  {path:'settings/company/modaliteDePaiement/:ID' ,component:ModalitePaiementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocieteRoutingModule { }
