import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'raffle', loadChildren: './raffle/raffle.module#RaffleModule'},
  {path:'', pathMatch: 'full', redirectTo:'raffle'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
