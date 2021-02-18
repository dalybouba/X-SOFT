import { Component, OnInit } from '@angular/core';
import { Pipe,PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/clients.model';
import { ClientService } from 'src/app/services/client.service';



@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filter: any, defaultFilter: boolean): any {
      if (!filter || !Array.isArray(items)) {
          return items;
      }

      if (filter && Array.isArray(items)) {
          let filterKeys = Object.keys(filter);

          if (defaultFilter) {

              return items.filter(item =>
                  filterKeys.reduce((x, keyName) =>
                      (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
          }
          else {

              return items.filter(item => {
                  return filterKeys.some((keyName) => {
                      return new RegExp(filter[keyName], 'gi').test(item[keyName]) ||                 
                      filter[keyName] == "";
                  });
              });
          }
      }
  }
}





@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls:['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

constructor(
  private clientService:ClientService,
  private router:Router){

}

searchableList: any;
searchText : string = "";
  searchTerm: string;
  page = 1;
  pageSize = 20;
  collectionSize: number;
  currentRate = 8;
  client: Client[];
allClient:Client[];
  ngOnInit(){
   
    this.clientService.find().subscribe(
      data=>{
        this.allClient=data;
       
      }
      
    );
  
  }

  
  edit(id: string) {
    this.router.navigate([`/customers/update/${id}`]);
  }
  delete(id: string) {
    if(confirm("Are you sure to delete "+id)){
    this.clientService.delete(id).subscribe(res => {
      if (res) {
        this.clientService.find().subscribe(
          data=>{
            this.allClient=data;
           
          }
          
        );
      }
    })}
  }


}
