import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProcessingParam } from 'src/app/models/processing-param.model';
import { SocieteService } from 'src/app/services/societe.service';

@Component({
  selector: 'app-processing-param',
  templateUrl: './processing-param.component.html',
  styleUrls: ['./processing-param.component.css']
})
export class ProcessingParamComponent implements OnInit {
  processingParamForm: FormGroup;
  processingParam: any;
  constructor(
    private societeService: SocieteService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getParam()
    this.processingParamForm = this.fb.group({
      INCFRS: [''],
      INCCLI: [''],
      NUMFRS: [''],
      NUMCLI: [''],
      ClientGen: [''],
      FournisseurGen: [''],
      Devise: [''],
    })
  }

  getParam() {
    this.societeService.getProcessingParam().subscribe(
      data => {
        this.processingParam = data;
      }
    );
  }

  validateEdit() {
    this.societeService.putProcessingPram(this.processingParam).subscribe(
      (data) => {
        console.log(data)
        this.getParam;
      }
    )
  }
}
