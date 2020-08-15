import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemoryShareComponent } from './memory-share/memory-share.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { ResourcesComponent } from './resources/resources.component';
import { ZoomComponent } from './zoom/zoom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemoryShareComponent,
    FundraiserComponent,
    ResourcesComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
