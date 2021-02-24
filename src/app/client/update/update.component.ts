import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieTarif } from 'src/app/models/categorieTarifaires.model';
import { Client } from 'src/app/models/clients.model';
import { Collaborateur } from 'src/app/models/collaborateur.model';
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
  Devise: Devise[];
  ModalitePaiement: modaliteDePaiement[];
  CategorieTarif: CategorieTarif[];
  familleTier: familleTier[];
  Collaborateur:Collaborateur[];
  id: string;
  client: any;
  clientForm: FormGroup;
  FamilletierId: any;
  DeviseId: any;
  ModalitePaiementId: any;
  CollaborateurId: any;
  CategorieTarifId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private societeService: SocieteService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.clientForm = this.formBuilder.group({

      Intitule: ['', [Validators.maxLength(35), Validators.required]],
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
      Encours: [''],
      // NumeroPayeur:[''],
      CategorieTarifId: [''],
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
      DeviseId: [''],
      Devise: [''],
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
      CollaborateurId: [''],
      Collaborateur: [''],
      ModalitePaiementId: [''],
      ModalitePaiement: [''],
      Incoterm: [''],
      CompteAuxiliaire: [''],
      ICE: [''],
      FamilletierId: [''],
      Familletier: [''],
      // CREATEUR:[''],
      // MODIFICATEUR:[''],

    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.clientService.findId(this.id)
      .subscribe(data => {
        this.client = data;
        this.FamilletierId = data.FamilletierId;
        this.DeviseId = data.DeviseId;
        this.CategorieTarifId = data.CategorieTarifId;
        this.CollaborateurId = data.CollaborateurId;
        this.ModalitePaiementId = data.ModalitePaiementId;
        ;
      }

      );
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
    this.societeService.findCollaborateur().subscribe(
      data => {
        this.Collaborateur = data;
      }
    );

    this.societeService.findNumerofamilleTier(this.FamilletierId).subscribe(
      data => {
        this.clientForm.patchValue({ Familletier: data.Code })
      }

    );
    this.societeService.findNumero(this.DeviseId).subscribe(
      data => {
        this.clientForm.patchValue({ Devise: data.LIBELLE })
      }

    );
    this.societeService.findNumeroCategorieTarif(this.CategorieTarifId).subscribe(
      data => {
        this.clientForm.patchValue({ CategorieTarif: data.Categorie })
      }

    );
    this.societeService.findNumeromodaliteDePaiement(this.ModalitePaiementId).subscribe(
      data => {
        this.clientForm.patchValue({ ModalitePaiement: data.Libelle });
        console.log(data)
      }

    );
    this.societeService.findNumeroCollaborateur(this.CollaborateurId).subscribe(
      data => {
        this.clientForm.patchValue({ Collaborateur: data.Prenom })
        console.log(data)
      }

    );

  }

  validateEdit() {
    this.clientService.updateClient(this.client).subscribe(
      (data) => {
        console.log('message data', data);
        this.router.navigate([`/customers/list`]);
      }
    )
    console.log(this.client);
  }

}
