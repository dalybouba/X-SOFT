import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieTarif } from 'src/app/models/categorieTarifaires.model';
import { Client } from 'src/app/models/clients.model';
import { Devise } from 'src/app/models/devise.model';
import { familleTier } from 'src/app/models/familleTier.model';
import { modaliteDePaiement } from 'src/app/models/modaliteDePaiement.model';
import { ClientService } from 'src/app/services/client.service';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Devise:Devise[];
  ModalitePaiement:modaliteDePaiement[];
  CategorieTarif:CategorieTarif[];
  familleTier:familleTier[];
  id:string;
  client:any;
  clientForm:FormGroup;
  constructor(
    private activatedRoute:ActivatedRoute,
    private clientService:ClientService,
    private societeService:SocieteService,
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      ID:[''],
      Intitule:[''],
      Type:[],
      NumeroPrincipale:[''],
      ContactPrincipale:[''],
      Complement:[''],
      CodePostal:[''],
      Ville:[''],
      CodeRegion:[''],
      Pays:[''],
      Raccourcis:[''],
      NumeroBanqueTier:[''],
      Ape:[''],
      MatriculeFiscale:[''],
      Siret:[''],
      Encours:[''],
      NumeroPayeur:[''],
      CategorieTarif:[''],
      CategorieComptabilite:[''],
      DateCreation:[''],
      Sommeil:[''],
      Depot:[''],
      Telephone:[''],
      Telecopie:[''],
      EMail:[''],
      SiteWeb:[''],
      CBMarque:[''],
      Timbre:[''],
      TauxRemise:[''],
      CategorieTVA:[''],
      SiCategorieret:[''],
      Etranger:[''],
      Devise:[''],
      CoursDevise:[''],
      ADRESSELivraison:[''],
      CodePostalLivraison:[''],
      VilleLivraison:[''],
      PaysLivraison:[''],
      Qualite:[''],
      Adresse:[''],
      Commentaire:[''],
      Classement:[''],
      Jointe1:[''],
      Jointe2:[''],
      Collaborateur:[''],
      ModalitePaiement:[''],
      Incoterm:[''],
      CompteAuxiliaire:[''],
      ICE:[''],
      DevisFamilletiere:[''],
    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.clientService.findId(this.id)
    .subscribe(data => {
        this.client = data;
        ;}
       
    );
    this.societeService.find().subscribe(
      data=>{
        this.Devise=data;
      }
    );
    this.societeService.findModaliteDePaiement().subscribe(
      data=>{
        this.ModalitePaiement=data
      }
    );
     this.societeService.findCategorieTarif().subscribe(
       data=>{
         this.CategorieTarif=data;
       }
     );

     this.societeService.findfamilleTier().subscribe(
      data=>{
        this.familleTier=data;
      }
    );



  }
  
  validateEdit(){
    this.clientService.updateClient(this.client).subscribe(
      (data) => {
        console.log('message data', data);
        this.router.navigate(['client-list']);
       
      }
    )
  
    
    console.log(this.client);
  }

}
