import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'fundraise', component: FundraiserComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }