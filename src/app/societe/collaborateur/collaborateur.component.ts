import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborateur } from 'src/app/models/collaborateur.model';
import { SocieteService } from 'src/app/services/societe.service';


// @Pipe({
//   name: 'FilterPipe',
// })
// export class FilterPipe implements PipeTransform {

//   transform(items: any, filter: any, defaultFilter: boolean): any {
//     if (!filter || !Array.isArray(items)) {
//       return items;
//     }

//     if (filter && Array.isArray(items)) {
//       let filterKeys = Object.keys(filter);

//       if (defaultFilter) {

//         return items.filter(item =>
//           filterKeys.reduce((x, keyName) =>
//             (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
//       }
//       else {

//         return items.filter(item => {
//           return filterKeys.some((keyName) => {
//             return new RegExp(filter[keyName], 'gi').test(item[keyName]) ||
//               filter[keyName] == "";
//           });
//         });
//       }
//     }
//   }
// }
















@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  constructor(private societeService: SocieteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }
  creatCollaborateur: any = false;
  collaborateur: Collaborateur[];
  ID: any;
  client: any;
  collaborateurForm: FormGroup;
  searchText: string = "";

  ngOnInit(): void {
    this.getCollaborator();
    this.ID = this.activatedRoute.snapshot.paramMap.get('ID');
    this.societeService.findNumeroCollaborateur(this.ID)
      .subscribe(data => {
        this.client = data;
        ;
      }
      );
    this.collaborateurForm = this.formBuilder.group({
      Nom: [''],
      Prenom: [''],
      Fonction: [],
      Adresse: [''],
      CodePostal: [''],
      Ville: [''],
      Service: [''],
      Telephone: [''],
      EMail: [''],
      ServMatriculeice: [''],
    });
  }

  getCollaborator() {
    this.societeService.findCollaborateur().subscribe(
      data => {
        this.collaborateur = data;
      }
    );
  }


  currentSection = 'section1';
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }





  edit(ID: number) {
    this.router.navigateByUrl('settings/company/collaborateur', { skipLocationChange: true }).then(() => {
      this.router.navigate([`settings/company/collaborateur/${ID}`]);
    });
  }

  creat() {
    this.ID = false;
    this.creatCollaborateur = true;
    this.creatCollaborateur;
  }

  validateEdit() {
    this.societeService.updateCollaborateur(this.client).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate([`settings/company/collaborateur`]);
      }
    );
  }


  validateCreat(collaborateur: any) {
    console.log(collaborateur)
    this.societeService.creatCollaborateur(collaborateur).subscribe(
      () => {
        this.getCollaborator();
        return this.creatCollaborateur = false;
      }
    )
  }

  deleteCollaborateur(id: string) {
    if (confirm("Are you sure to delete " + id)) {
      this.societeService.deleteCollaborateur(id).subscribe(res => {
        if (res) {
          this.societeService.findCollaborateur().subscribe(
            data => {
              this.collaborateur = data;
            }
          );
        }
      })
    }
  }



}
