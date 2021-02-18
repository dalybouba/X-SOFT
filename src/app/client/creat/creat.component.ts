import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieTarif } from 'src/app/models/categorieTarifaires.model';
import { Devise } from 'src/app/models/devise.model';
import { familleTier } from 'src/app/models/familleTier.model';
import { modaliteDePaiement } from 'src/app/models/modaliteDePaiement.model';
import { Parametres } from 'src/app/models/paramtres.model';
import { ClientService } from 'src/app/services/client.service';
import { SocieteService } from 'src/app/services/societe.service';




@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {
  INCCLI: boolean;
  clients: any
  clientForm: FormGroup;
  Devise: Devise[];
  ModalitePaiement: modaliteDePaiement[];
  CategorieTarif: CategorieTarif[];
  familleTier: familleTier[];
  parametre: Parametres;
  constructor(

    private clientService: ClientService,
    private societeService: SocieteService,
    private formBuilder: FormBuilder,
    private router: Router,

  ) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({

      Intitule: ['', [Validators.maxLength(35)]],
      // Numero:this.formBuilder.control(this.parametres.NUMCLI, Validators.required),
      Numero: [''],
      NumeroPrincipale: ['', [Validators.maxLength(13)]],
      ContactPrincipale: ['', [Validators.maxLength(35)]],
      // Complement:['',[Validators.maxLength(35)]],
      CodePostal: ['', [Validators.maxLength(9)]],
      Ville: ['', [Validators.minLength(3)]],
      // CodeRegion:['',[Validators.maxLength(25)]],
      Pays: ['', [Validators.maxLength(35)]],
      // Raccourcis:['',[Validators.maxLength(7)]],
      NumeroBanqueTier: [''],
      // Ape:['',[Validators.maxLength(7)]],
      MatriculeFiscale: ['', [Validators.maxLength(12)]],
      // Siret:[''],
      Encours:[''],
      // NumeroPayeur:[''],
      CategorieTarif: [''],
      // DateCreation:[''],
      Sommeil: [''],
      // Depot:[''],
      Telephone: [''],
      Telecopie: [''],
      EMail: [''],
      SiteWeb: [''],
      Timbre: [''],
      TauxRemise: [''],
      CategorieTVA: [''],
      Categorie: [''],
      Etranger: [''],
      Devise: [''],
      DeviseId: [''],
      // CoursDevise:[''],
      ADRESSELivraison: [''],
      CodePostalLivraison: [''],
      VilleLivraison: [''],
      PaysLivraison: [''],
      Qualite: [''],
      Adresse: [''],
      Commentaire: [''],
      Classement: [''],
      Jointe1: [''],
      Jointe2: [''],
      ExonereTVA: [''],
      Collaborateur: [''],
      ModalitePaiement: [''],
      Incoterm: [''],
      CompteAuxiliaire: [''],
      ICE: [''],
      Familletier: [''],
      // CREATEUR:[''],
      // MODIFICATEUR:[''],

    });

    this.societeService.find().subscribe(
      data => {
        this.Devise = data;
      }
    );
    this.societeService.findModaliteDePaiement().subscribe(
      data => {
        this.ModalitePaiement = data
      }
    );
    this.societeService.findCategorieTarif().subscribe(
      data => {
        this.CategorieTarif = data;
      }
    );
    this.societeService.findfamilleTier().subscribe(
      data => {
        this.familleTier = data;
      }
    );
    this.clientService.getParametre().subscribe(
      res => {
        this.parametre = res;
        this.INCCLI = this.parametre.INCCLI,
          this.setDefaultValues();
      }

    );


  }



  creatCustomer(client: any) {
    client.DeviseId = this.Devise.find(s => s.DEVISE == client.Devise)?.ID;
    this.clientService.creatCustomer(client).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/customers/list'])
      }
    )
  }

  setDefaultValues() {
    this.clientForm.patchValue({
      Timbre: false,
      Etranger: false,
      Sommeil: false,
      ExonereTVA: false,
      TauxRemise:0,
      Encours:0,
      NumeroBanqueTier:0,
      Numero: this.parametre.NUMCLI,
      NumeroPrincipale: this.parametre.ClientGen
    });
  }
}
