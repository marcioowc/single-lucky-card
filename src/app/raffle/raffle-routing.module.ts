import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaffleDetailComponent } from './raffle-detail/raffle-detail.component';


const routes: Routes = [
  {path:'', component: RaffleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaffleRoutingModule { }
