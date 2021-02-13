import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborateur } from 'src/app/models/collaborateur.model';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  constructor(private societeService:SocieteService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder,
    ) { }
creatCollaborateur:any=false;
collaborateur:Collaborateur[];
ID:any;
client:any;
collaborateurForm:FormGroup;
  ngOnInit(): void {
this.societeService.findCollaborateur().subscribe(
  data=>{
    this.collaborateur=data;
  }
);


this.ID = this.activatedRoute.snapshot.paramMap.get('ID');
 
this.societeService.findNumeroCollaborateur(this.ID)
.subscribe(data => {
    this.client = data;
    ;}
   
);



this.collaborateurForm = this.formBuilder.group({
  Nom:[''],
  Prenom:[''],
  Fonction:[],
  Adresse:[''],
  CodePostal:[''],
  Ville:[''],
  Service:[''],
  Telephone:[''],
  EMail:[''],
  ServMatriculeice:[''],
 

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





  edit(ID:number){
    //this.router.navigate([`devise/${Numero}`]);
    this.router.navigateByUrl('collaborateur', { skipLocationChange: true }).then(() => {
      this.router.navigate([`collaborateur/${ID}`]);
  }); 

  }
 
creat(){
  this.router.navigate([`collaborateur`]);
  this.creatCollaborateur=true; 
  // this.router.navigateByUrl('devise', { skipLocationChange: true }).then(() => {
  //   this.router.navigate(['devise']);
// });

  return this.creatCollaborateur;
  
}

validateEdit() {
  this.societeService.updateCollaborateur(this.client).subscribe(
    (data)=>{
      console.log(data);
      this.router.navigate([`collaborateur`]);
    }
  );}
  
  
  validateCreat(collaborateur:any){
    console.log(collaborateur)
    this.societeService.creatCollaborateur(collaborateur).subscribe(
      ()=>{
        this.router.navigate([`collaborateur`]);
      }
    )
  }
  
  deleteDevise(id: string) {
    if(confirm("Are you sure to delete "+id)){
    this.societeService.deleteCollaborateur(id).subscribe(res => {
      if (res) {
        this.societeService.findCollaborateur().subscribe(
          data=>{
            this.collaborateur=data;
           
          }
          
        );
      }
    })}
  }

 

}
