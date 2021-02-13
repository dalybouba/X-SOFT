import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieTarif } from 'src/app/models/categorieTarifaires.model';
import { familleTier } from 'src/app/models/familleTier.model';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-param-tiers',
  templateUrl: './param-tiers.component.html',
  styleUrls: ['./param-tiers.component.css']
})
export class ParamTiersComponent implements OnInit {
  constructor(
    private societeServices:SocieteService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder,
    ) { 
   
    }
categorieTarif:CategorieTarif[];
creatcategorieTarif:any=false;
creatfamilleTier:any=false;
updateFamilleTier:any;
updatecategoriesTarifs:any;
ID:any=false;
categoriesTarif:CategorieTarif;
categorieTarifForm:FormGroup;
familleTiers:familleTier[];
famillesTiers:familleTier;
familleTiersForm:FormGroup;

  ngOnInit(): void {
  
    this.societeServices.findCategorieTarif().subscribe(
      data=>{
        this.categorieTarif=data;
        
      }
     
    );


    this.ID = this.activatedRoute.snapshot.paramMap.get('ID');
    this.societeServices.findNumeroCategorieTarif(this.ID)
    .subscribe(data => {
        this.categoriesTarif = data;
        ;}
       
    );
   this.ID=this.activatedRoute.snapshot.paramMap.get('ID');
    this.societeServices.findNumerofamilleTier(this.ID)
    .subscribe(data => {
        this.famillesTiers = data;
   
        ;}
       
    );


    this.categorieTarifForm = this.formBuilder.group({
      Categorie:[''],
      PrixTTC:[''],
     
    });
    this.familleTiersForm = this.formBuilder.group({
      Code:[''],
      Libelle:[''],
      CategorieTarif:[''],
      Exonere:[''],
      
    });






    this.societeServices.findfamilleTier().subscribe(
      data=>{
        this.familleTiers=data;
      }
    );
  }




  creatCategorieTarif(){
    this.router.navigate([`param-tiers`]);
    this.creatcategorieTarif=true; 
    // this.router.navigateByUrl('devise', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['devise']);
  // });
  this.ID=false;
  this.creatfamilleTier=false;
    return this.creatcategorieTarif;
  }
  editcategorieTarif(ID:number){
    //this.router.navigate([`devise/${Numero}`]);
    this.router.navigateByUrl('param-tiers', { skipLocationChange: true }).then(() => {
      this.router.navigate([`param-tiers/${ID}`]);
  }); 

  }
  creatFamilleTiers(){
    this.router.navigate([`param-tiers`]);
    this.creatfamilleTier=true; 
    // this.router.navigateByUrl('devise', { skipLocationChange: true }).then(() => {
    //   this.router.navigate(['devise']);
  // });
  this.ID=false;
  this.creatcategorieTarif=false;
    return this.creatfamilleTier;
  }
  editfamilleTiers(ID:number){
   
    //this.router.navigate([`devise/${Numero}`]);
    this.router.navigateByUrl('param-tiers', { skipLocationChange: true }).then(() => {
      this.router.navigate([`param-tiers/${ID}`]);
  }); 
 

  }
  validateEdit() {
    this.societeServices.updateCategorieTarif(this.categoriesTarif).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate([`param-tiers`]);
      }
    ); console.log(this.categoriesTarif);
  }
  validateEditfamilleTier() {
    this.societeServices.updatefamilleTier(this.famillesTiers).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate([`param-tiers`]);
      }
    ); console.log(this.famillesTiers);
  }
  
    
    validateCreat(collaborateur:any){
      console.log(collaborateur)
      this.societeServices.creatCategorieTarif(collaborateur).subscribe(
        ()=>{
          this.router.navigate([`param-tiers`]);
        }
      )
      console.log(collaborateur)
    }
    validateCreatfamilleTier(familleTier:any){
      console.log(familleTier)
      this.societeServices.creatfamilleTier(familleTier).subscribe(
        ()=>{
          this.router.navigate([`param-tiers`]);
        }
      )
      console.log(familleTier)
    }
 



  

currentSection = 'section1';

onSectionChange(sectionId: string) {
  this.currentSection = sectionId;
}

scrollTo(section) {
  document.querySelector('#' + section)
  .scrollIntoView();
}
}
