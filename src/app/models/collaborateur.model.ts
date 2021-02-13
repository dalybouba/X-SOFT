import { EmailValidator } from "@angular/forms";

export class Collaborateur{
    public Nom: string;
    public Prenom: string;
    public Adresse: number;
    public CodePostal: string;
    public Ville: string;
    public Service: string;
    public Telephone: number;
    public EMail: EmailValidator;
    public Matricule: number;
    public ID: number;
    public Type : boolean;
}