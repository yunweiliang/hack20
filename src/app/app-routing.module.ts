import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { ResourcesComponent } from './resources/resources.component';
import { MemoryShareComponent } from './memory-share/memory-share.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { IndividualComponent } from './individual/individual.component';

const routes: Routes = [
  { path: 'fundraise', component: FundraiserComponent},
  { path: 'create', component: IndividualComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'memories', component: MemoryShareComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }