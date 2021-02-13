import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { modaliteDePaiement } from 'src/app/models/modaliteDePaiement.model';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-modalite-paiement',
  templateUrl: './modalite-paiement.component.html',
  styleUrls: ['./modalite-paiement.component.css']
})
export class ModalitePaiementComponent implements OnInit {
modePaiement:modaliteDePaiement[];
modePaiementB:boolean=false;
ID:any;
modePaiements:modaliteDePaiement;
modaliteDePaiementForm:FormGroup


  constructor(
    private societeServices:SocieteService,
    private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.societeServices.findModaliteDePaiement().subscribe(
      data=>{
        this.modePaiement=data;
      }
    );
this.ID=this.activatedRoute.snapshot.paramMap.get('ID')
this.societeServices.findNumeromodaliteDePaiement(this.ID).subscribe(
  data=>{
this.modePaiements=data;
  }
);

this.modaliteDePaiementForm=this.formBuilder.group({
  Code:[''],
  Intitule:[''],
  Description:[]
});

  }


  currentSection = 'section1';
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  creat(){
   // this.router.navigate([`settings/company/modaliteDePaiement`]);
    this.ID=false;
return this.modePaiementB=true;
  }

  edit(ID:number){
    //this.router.navigate([`devise/${Numero}`]);
    this.router.navigateByUrl('settings/company/modaliteDePaiement', { skipLocationChange: true }).then(() => {
      this.router.navigate([`settings/company/modaliteDePaiement/${ID}`]);
  }); 

  }
  validateEdit(){

  }

  validateCreat(modaliteDePaiement:any){

  }

}
