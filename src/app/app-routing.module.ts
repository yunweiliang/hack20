import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import { MemoryShareComponent } from './memory-share/memory-share.component';

const routes: Routes = [
  { path: 'fundraise', component: FundraiserComponent},
  { path: '', component: LoginComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'memories', component: MemoryShareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }