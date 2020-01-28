import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-raffle-detail',
  templateUrl: './raffle-detail.component.html',
  styleUrls: ['./raffle-detail.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RaffleDetailComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  color: string="primary";

  myModel: any;
  datemask = ['(', /\d/,/\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {   
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    
  }

  onClick(event){
    if(this.color == "primary"){
      this.color = "accent";
    }else{
      this.color = "primary";
    }

    console.log(event.target.textContent);
  }

}
