import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Devise } from 'src/app/models/devise.model';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.css']
})
export class DeviseComponent implements OnInit {

  constructor(private societeService: SocieteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }
  
  creatDevise: any = false;
  devise: Devise[];
  ID: any;
  devises: any;
  deviseForm: FormGroup;
  ngOnInit(): void {
    this.societeService.find().subscribe(
      data => {
        this.devise = data;
      }
    );


    this.ID = this.activatedRoute.snapshot.paramMap.get('ID');

    this.societeService.findNumero(this.ID)
      .subscribe(data => {
        this.devises = data;
        ;
      }

      );



    this.deviseForm = this.formBuilder.group({
      DEVISE: [''],
      CODEISO: [''],
      CODEBANQUE: [],
      LIBELLE: [''],
      SYMBOLE: [''],
      DECIMALE: [''],
      COURS: [''],
    });

  }

  edit(ID: number) {
    //this.router.navigate([`devise/${Numero}`]);
    this.router.navigateByUrl('settings/company/devise', { skipLocationChange: true }).then(() => {
      this.router.navigate([`settings/company/devise/${ID}`]);
    });
  }

  creat() {
    this.ID=false;
    this.creatDevise = true;
    return this.creatDevise;

  }

  validateEdit() {
this.societeService.updateDevise(this.devises).subscribe(
  (data)=>{
    console.log(data);
    this.router.navigate([`settings/company/devise`]);
  }
);}


validateCreat(devises:any){

  this.societeService.creatDevise(devises).subscribe(
    ()=>{
      this.router.navigate([`settings/company/devise`]);
      console.log(this.devises);
   
    }
  )
}

deleteDevise(id: string) {
  if(confirm("Are you sure to delete "+id)){
  this.societeService.deleteDevise(id).subscribe(res => {
    if (res) {
      this.societeService.find().subscribe(
        data=>{
          this.devise=data;
         
        }
        
      );
    }
  })}
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
