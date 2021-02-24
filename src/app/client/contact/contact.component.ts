import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() ClientId: number;
  public isCollapsed = true;
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
  ) { }
  contactForm: FormGroup;
  contact: Contact[];
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      NomPrenom: [''],
      Fonction: [''],
      Adresse: [''],
      CodePostal: [''],
      Ville: [''],
      Telephone: [''],
      Portable: [''],
      Fax: [''],
      Email: [''],
      TiersId: this.fb.control(this.ClientId, Validators.required),
    });
    this.getContact();
    console.log(this.ClientId)
  }
  createContact(contact: any) {
    this.clientService.createContact(contact).subscribe(
      () => {
       

        this.resetForm();
        this.getContact();
      }
    );
  }
  getContact() {
    this.clientService.getContact(this.ClientId).subscribe(
      data => {
        this.contact = data;
        console.log(this.contact)
      }
    )
  }

  setDefaultValue(){
    this.contactForm.patchValue({
      ClientId:this.ClientId,

    });

  }
  resetForm(){
    this.contactForm.controls['NomPrenom'].reset();
    this.contactForm.controls['Fonction'].reset();
    this.contactForm.controls['Adresse'].reset();
    this.contactForm.controls['CodePostal'].reset();
    this.contactForm.controls['Ville'].reset();
    this.contactForm.controls['Telephone'].reset();
    this.contactForm.controls['Portable'].reset();
    this.contactForm.controls['Fax'].reset();
    this.contactForm.controls['Email'].reset();
  }

}
