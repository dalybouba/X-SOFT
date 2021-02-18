import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../models/clients.model';
import { map} from 'rxjs/operators';
import { Parametres } from '../models/paramtres.model';
export const client$: BehaviorSubject<Client[]> = new BehaviorSubject([]);
 //export const parametres$: BehaviorSubject<Parametres> = new BehaviorSubject([]);

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //${this.url}
  url ="http://192.168.0.30:8062/api/Client/Get";
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

  return this.http.get<Client>("http://192.168.0.30:8062/api/Client/Find"+'/'+id);
}
updateClient(client: Client): Observable<Client> {
  console.log(client)
  return this.http.put<Client>("http://41.231.46.234:8062/api/Client/Edit", client)
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
  return this.http.delete<boolean>("http://41.231.46.234:8062/api/Client/Delete"+'/'+id)
      .pipe(map(res => {
          return res;
      }));
}

creatCustomer(client: Client): Observable<Client> {
  console.log(client)
  return this.http.post<Client>("http://41.231.46.234:8062/api/Client/Create", client)
      .pipe(map(res => {
          let clientList = client$.value;
          clientList.push(res);
          client$.next(clientList)
          return res;
      }));}
}
