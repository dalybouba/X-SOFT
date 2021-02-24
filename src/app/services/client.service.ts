import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/clients.model';
import { map} from 'rxjs/operators';
import { Parametres } from '../models/paramtres.model';
import { Contact } from '../models/contact.model';
export const client$: BehaviorSubject<Client[]> = new BehaviorSubject([]);
export const contact$: BehaviorSubject<Contact[]> = new BehaviorSubject([]);
 //export const parametres$: BehaviorSubject<Parametres> = new BehaviorSubject([]);

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //${this.url}
  url ="http://192.168.0.30:8062/api/Clients/Get";
  constructor(private http: HttpClient) {
    console.log(client$)
  }
  getParametre():Observable<Parametres> {
    return this.http.get<Parametres>("http://41.231.46.234:8062/api/Parametres/Get")
  //   .pipe(map(res => {
  //     parametres$.next(res);
  //     return res;   
  // }));
  
  }
  find(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}`)
        .pipe(map(res => {
            client$.next(res);
            return res;   
        }));
}

findId(id: string): Observable<Client> {

  return this.http.get<Client>("http://192.168.0.30:8062/api/Clients/Find"+'/'+id);
}
updateClient(client: Client): Observable<Client> {
  console.log(client)
  return this.http.put<Client>("http://41.231.46.234:8062/api/Clients/Edit", client)
      .pipe(map(res => {
          let clientList = client$.value;
          let index = clientList.findIndex(x => x.CBMarque == client.CBMarque);
          if (index >= 0) {
              clientList[index] = client;
          } else {
              clientList.push(client);
          }
          client$.next(clientList);
          return res;
      }));
}

delete(id:string):Observable<boolean>{
  return this.http.delete<boolean>("http://41.231.46.234:8062/api/Clients/Delete"+'/'+id)
      .pipe(map(res => {
          return res;
      }));
}

createCustomer(client: Client): Observable<Client> {
  console.log(client)
  return this.http.post<Client>("http://41.231.46.234:8062/api/Clients/Create", client)
      .pipe(map(res => {
          let clientList = client$.value;
          clientList.push(res);
          client$.next(clientList)
          return res;
      }));}
createContact(contact: Contact): Observable<Contact> {
  console.log(contact)
  return this.http.post<Contact>("http://41.231.46.234:8062/api/Contact/Create", contact)
      .pipe(map(res => {
          let contactList = contact$.value;
          contactList.push(res);
          contact$.next(contactList)
          return res;
      }));}
getContact(id: number): Observable<Contact[]> {
  console.log(id);
  return this.http.get<Contact[]>("http://41.231.46.234:8062/api/Clients/GetContacts"+'/'+id)
  .pipe(map(res => {
      contact$.next(res);
      return res;   
  }));}
}
