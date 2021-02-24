import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Devise } from '../models/devise.model';
import { map } from 'rxjs/operators';
import { Collaborateur } from '../models/collaborateur.model';
import { CategorieTarif } from '../models/categorieTarifaires.model';
import { familleTier } from '../models/familleTier.model';
import { modaliteDePaiement } from '../models/modaliteDePaiement.model';
import { ProcessingParam } from '../models/processing-param.model';
export const devise$: BehaviorSubject<Devise[]> = new BehaviorSubject([]);
export const collaborateur$: BehaviorSubject<Collaborateur[]> = new BehaviorSubject([]);
export const CategorieTarif$: BehaviorSubject<CategorieTarif[]> = new BehaviorSubject([]);
export const familleTier$: BehaviorSubject<familleTier[]> = new BehaviorSubject([]);
export const modaliteDePaiement$: BehaviorSubject<modaliteDePaiement[]> = new BehaviorSubject([]);
export const processingPram$: BehaviorSubject<ProcessingParam[]> = new BehaviorSubject([]);
@Injectable({
  providedIn: 'root'
})
export class SocieteService {

  constructor(private http: HttpClient) { }

  find(): Observable<Devise[]> {
    return this.http.get<Devise[]>("http://41.231.46.234:8062/api/Devise/Get")
      .pipe(map(res => {
        devise$.next(res);
        return res;
      }));
  }
  findCategorieTarif(): Observable<CategorieTarif[]> {
    return this.http.get<CategorieTarif[]>("http://41.231.46.234:8062/api/CategorieTarif")
      .pipe(map(res => {
        CategorieTarif$.next(res);
        return res;
      }));
  }
  findfamilleTier(): Observable<familleTier[]> {
    return this.http.get<familleTier[]>("http://41.231.46.234:8062/api/Familletier/Get")
      .pipe(map(res => {
        familleTier$.next(res);
        return res;
      }));
  }
  findCollaborateur(): Observable<Collaborateur[]> {
    return this.http.get<Collaborateur[]>("http://41.231.46.234:8062/api/Collaborateur/Get")
      .pipe(map(res => {
        collaborateur$.next(res);
        return res;
      }));
  }
  findModaliteDePaiement(): Observable<modaliteDePaiement[]> {
    return this.http.get<modaliteDePaiement[]>("http://41.231.46.234:8062/api/Modalitepaiement/Get")
      .pipe(map(res => {
        modaliteDePaiement$.next(res);
        return res;
      }));
  }

  findNumero(ID: number): Observable<Devise> {

    return this.http.get<Devise>("http://41.231.46.234:8062/api/Devise/Find" + '/' + ID);
  }
  findNumeroCollaborateur(ID: number): Observable<Collaborateur> {

    return this.http.get<Collaborateur>("http://41.231.46.234:8062/api/Collaborateur/Find" + '/' + ID);
  }
  findNumeroCategorieTarif(ID: number): Observable<CategorieTarif> {

    return this.http.get<CategorieTarif>("http://41.231.46.234:8062/api/CategorieTarif/Find" + '/' + ID);
  }
  findNumerofamilleTier(ID: number): Observable<familleTier> {

    return this.http.get<familleTier>("http://41.231.46.234:8062/api/Familletier/Find" + '/' + ID);
  }

  findNumeromodaliteDePaiement(ID: number): Observable<modaliteDePaiement> {

    return this.http.get<modaliteDePaiement>("http://41.231.46.234:8062/api/Modalitepaiement/Find" + '/' + ID);
  }

  updateDevise(devise: Devise): Observable<Devise> {
    console.log(devise)
    return this.http.put<Devise>("http://41.231.46.234:8062/api/Devise/Edit", devise)
      .pipe(map(res => {
        let deviseList = devise$.value;
        let index = deviseList.findIndex(x => x.ID == devise.ID);
        if (index >= 0) {
          deviseList[index] = devise;
        } else {
          deviseList.push(devise);
        }
        devise$.next(deviseList);
        return res;
      }));
  }
  updateCategorieTarif(CategorieTarif: CategorieTarif): Observable<CategorieTarif> {
    console.log(CategorieTarif)
    return this.http.put<CategorieTarif>("http://41.231.46.234:8062/api/CategorieTarif/Edit", CategorieTarif)
      .pipe(map(res => {
        let CategorieTarifList = CategorieTarif$.value;
        let index = CategorieTarifList.findIndex(x => x.ID == CategorieTarif.ID);
        if (index >= 0) {
          CategorieTarifList[index] = CategorieTarif;
        } else {
          CategorieTarifList.push(CategorieTarif);
        }
        CategorieTarif$.next(CategorieTarifList);
        return res;
      }));
  }
  updatefamilleTier(familleTier: familleTier): Observable<familleTier> {
    console.log(familleTier)
    return this.http.put<familleTier>("http://41.231.46.234:8062/api/familleTier/Edit", familleTier)
      .pipe(map(res => {
        let familleTierList = familleTier$.value;
        let index = familleTierList.findIndex(x => x.ID == familleTier.ID);
        if (index >= 0) {
          familleTierList[index] = familleTier;
        } else {
          familleTierList.push(familleTier);
        }
        familleTier$.next(familleTierList);
        return res;
      }));
  }
  updateCollaborateur(collaborateur: Collaborateur): Observable<Collaborateur> {
    console.log(collaborateur)
    return this.http.put<Collaborateur>("http://41.231.46.234:8062/api/Collaborateur/Edit", collaborateur)
      .pipe(map(res => {
        let collaborateurList = collaborateur$.value;
        let index = collaborateurList.findIndex(x => x.ID == collaborateur.ID);
        if (index >= 0) {
          collaborateurList[index] = collaborateur;
        } else {
          collaborateurList.push(collaborateur);
        }
        collaborateur$.next(collaborateurList);
        return res;
      }));
  }

  updatemodaliteDePaiement(modaliteDePaiement: modaliteDePaiement): Observable<modaliteDePaiement> {
    console.log(modaliteDePaiement)
    return this.http.put<modaliteDePaiement>("http://41.231.46.234:8062/api/Modalitepaiement/Edit", modaliteDePaiement)
      .pipe(map(res => {
        let modaliteDePaiementList = modaliteDePaiement$.value;
        let index = modaliteDePaiementList.findIndex(x => x.ID == modaliteDePaiement.ID);
        if (index >= 0) {
          modaliteDePaiementList[index] = modaliteDePaiement;
        } else {
          modaliteDePaiementList.push(modaliteDePaiement);
        }
        modaliteDePaiement$.next(modaliteDePaiementList);
        return res;
      }));
  }

  creatDevise(devise: Devise): Observable<Devise> {
    console.log(devise)
    return this.http.post<Devise>("http://41.231.46.234:8062/api/Devise/Create", devise)
      .pipe(map(res => {
        let deviseList = devise$.value;
        deviseList.push(res);
        devise$.next(deviseList)
        return res;
      }));
  }
  creatCategorieTarif(CategorieTarif: CategorieTarif): Observable<CategorieTarif> {
    return this.http.post<CategorieTarif>("http://41.231.46.234:8062/api/CategorieTarif/Create", CategorieTarif)
      .pipe(map(res => {
        let CategorieTarifList = CategorieTarif$.value;
        CategorieTarifList.push(res);
        CategorieTarif$.next(CategorieTarifList)
        return res;
      }));
  }
  creatfamilleTier(familleTier: familleTier): Observable<familleTier> {
    return this.http.post<familleTier>("http://41.231.46.234:8062/api/familleTier/Create", familleTier)
      .pipe(map(res => {
        let familleTierList = familleTier$.value;
        familleTierList.push(res);
        familleTier$.next(familleTierList)
        return res;
      }));
  }


  creatCollaborateur(collaborateur: Collaborateur): Observable<Collaborateur> {
    console.log(collaborateur);
    return this.http.post<Collaborateur>("http://41.231.46.234:8062/api/Collaborateur/Create", collaborateur)
      .pipe(map(res => {
        let collaborateurList = collaborateur$.value;
        collaborateurList.push(res);
        collaborateur$.next(collaborateurList)
        return res;
      }));
  }

  creatmodaliteDePaiement(modaliteDePaiement: modaliteDePaiement): Observable<modaliteDePaiement> {
    console.log(modaliteDePaiement);
    return this.http.post<modaliteDePaiement>("http://41.231.46.234:8062/api/Modalitepaiement/Create", modaliteDePaiement)
      .pipe(map(res => {
        let modaliteDePaiementList = modaliteDePaiement$.value;
        modaliteDePaiementList.push(res);
        modaliteDePaiement$.next(modaliteDePaiementList)
        return res;
      }));
  }

  deleteDevise(id: string): Observable<boolean> {
    console.log(id)
    return this.http.delete<boolean>("http://41.231.46.234:8062/api/Devise/Delete" + '/' + id)
      .pipe(map(res => {
        return res;
      }));
  }
  deleteCollaborateur(id: string): Observable<boolean> {
    return this.http.delete<boolean>("http://41.231.46.234:8062/api/Collaborateur/Delete" + '/' + id)
      .pipe(map(res => {
        return res;
      }));
  }
  deleteFamilleTier(id: string): Observable<boolean> {
    return this.http.delete<boolean>("http://41.231.46.234:8062/api/familleTier/Delete" + '/' + id)
      .pipe(map(res => {
        return res;
      }));
  }
  deleteCategorieTarif(id: string): Observable<boolean> {
    return this.http.delete<boolean>("http://41.231.46.234:8062/api/CategorieTarif/Delete" + '/' + id)
      .pipe(map(res => {
        return res;
      }));
  }
  deletemodaliteDePaiement(id: string): Observable<boolean> {
    return this.http.delete<boolean>("http://41.231.46.234:8062/api/Modalitepaiement/Delete" + '/' + id)
      .pipe(map(res => {
        return res;
      }));
  }
  // proccesing param
  getProcessingParam(): Observable<ProcessingParam[]> {
    return this.http.get<ProcessingParam[]>('http://41.231.46.234:8062/api/Parametres/Get')
      .pipe(map(res => {
        processingPram$.next(res);
        return res;
      }
      )); }
putProcessingPram(processingPram:ProcessingParam):Observable<ProcessingParam>{
  return this.http.put<ProcessingParam>('http://41.231.46.234:8062/api/Parametres/Edit',processingPram)
  // .pipe(map(res => {
  //   let processingPramList = processingPram$.value;
  //   let index = processingPramList.findIndex(x => x.ID == processingPram.ID);
  //   if (index >= 0) {
  //     processingPramList[index] = processingPram;
  //   } else {
  //     processingPramList.push(processingPram);
  //   }
  //   processingPram$.next(processingPramList);
  //   return res;
  // }));
}
}
