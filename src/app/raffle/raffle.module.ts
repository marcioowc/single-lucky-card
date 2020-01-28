import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaffleRoutingModule } from './raffle-routing.module';
import { RaffleDetailComponent } from './raffle-detail/raffle-detail.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [RaffleDetailComponent],
  imports: [
    CommonModule,
    RaffleRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TextMaskModule  
  ]
})
export class RaffleModule { }
