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
    private societeServices: SocieteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {


  }



  searchText: string = "";
  categorieTarif: CategorieTarif[];
  creatcategorieTarif: any = false;
  creatfamilleTier: any = false;
  updateFamilleTier: any = false;
  updatecategoriesTarifs: any = false;
  ID: any;
  ID1: any;
  categoriesTarif: CategorieTarif;
  categorieTarifForm: FormGroup;
  familleTiers: familleTier[];
  famillesTiers: familleTier;
  familleTiersForm: FormGroup;



  ngOnInit(): void {

   this.getCategorieTarif();
this.getFamilleTier();
    this.ID = this.activatedRoute.snapshot.paramMap.get('ID');
    
    this.societeServices.findNumeroCategorieTarif(this.ID)
      .subscribe(data => {
        this.categoriesTarif = data;
        return [this.updateFamilleTier=false,this.updatecategoriesTarifs=true]
      }
      );
      this.ID1 = this.activatedRoute.snapshot.paramMap.get('ID1');
    this.societeServices.findNumerofamilleTier(this.ID1)
      .subscribe(data => {
        this.famillesTiers = data;
        return [this.updateFamilleTier=true,this.updatecategoriesTarifs=false]
     
      }
      );

    this.categorieTarifForm = this.formBuilder.group({
      Categorie: [''],
      PrixTTC: [''],

    });
    this.familleTiersForm = this.formBuilder.group({
      Code: [''],
      Libelle: [''],
      CategoriesTarifs: [''],
      Exonere: [''],

    });

  }
  getCategorieTarif(){
    this.societeServices.findCategorieTarif().subscribe(
      data => {
        this.categorieTarif = data;
      }
    );
  }
getFamilleTier(){
  this.societeServices.findfamilleTier().subscribe(
    data => {
      this.familleTiers = data;
    }
  );
}
  creatCategorieTarif() {
    this.creatcategorieTarif = true;
    this.updateFamilleTier = false;
    this.updatecategoriesTarifs = false;
    this.creatfamilleTier = false;
    return this.creatcategorieTarif;
  }
  editcategorieTarif(ID: number,section) {
    this.router.navigateByUrl('settings/company/param-tiers', { skipLocationChange: true }).then(() => {
      this.router.navigate([`settings/company/param-tiers/${ID}`]);
    });
     document.querySelector('#' + section)
    .scrollIntoView();
  }
  creatFamilleTiers() {
    this.creatfamilleTier = true;
    this.updateFamilleTier = false;
    this.updatecategoriesTarifs = false;
    this.creatcategorieTarif = false;
    return this.creatfamilleTier;
  }
  editfamilleTiers(ID1: number) {
    this.router.navigateByUrl('settings/company/param-tiers', { skipLocationChange: true }).then(() => {
      this.router.navigate([`settings/company/param-tiers/update/${ID1}`]);
    });
  }
  validateEdit() {
    this.societeServices.updateCategorieTarif(this.categoriesTarif).subscribe(
      () => {
        this.router.navigate([`settings/company/param-tiers`]);
      }
    ); console.log(this.categoriesTarif);
  }
  validateEditfamilleTier() {
    this.societeServices.updatefamilleTier(this.famillesTiers).subscribe(
      () => {
        this.router.navigate([`settings/company/param-tiers`]);
      }
    );
  }
  validateCreat(param: any) {
    console.log(param)
    this.societeServices.creatCategorieTarif(param).subscribe(
      () => {
        this.getCategorieTarif()
        return this.creatcategorieTarif=false;
      }
    )
    console.log(param)
  }
  validateCreatfamilleTier(familleTier: any) {
    console.log(familleTier)
    this.societeServices.creatfamilleTier(familleTier).subscribe(
      () => {
        this.getFamilleTier();
      return  this.creatfamilleTier = false;
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

  deleteFamilleTier(id: string) {
    if(confirm("Are you sure to delete "+id)){
    this.societeServices.deleteFamilleTier(id).subscribe(res => {
      if (res) {
        this.societeServices.findfamilleTier().subscribe(
          data=>{
            this.familleTiers=data;
           
          }
          
        );
      }
    })}
  }
  deleteCategorieTarif(id: string) {
    if(confirm("Are you sure to delete "+id)){
    this.societeServices.deleteCategorieTarif(id).subscribe(res => {
      if (res) {
        this.societeServices.findCategorieTarif().subscribe(
          data=>{
            this.categorieTarif=data;
           
          }
          
        );
      }
    })}
  }


//   setDefaultValues() {
//     this.clientForm.patchValue({Timbre:false,Etranger:false,Sommeil:false});
//  }

}
