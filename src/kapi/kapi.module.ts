import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { KapiRoutingModule } from './kapi-routing.module';

import { KapiRootComponent } from './kapi.component';
import { TelaTesteComponent } from './tela-teste/tela-teste.component';

@NgModule({
  declarations: [
    KapiRootComponent,

    TelaTesteComponent
  ],
  exports:[
    TelaTesteComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    KapiRoutingModule
  ],
  providers: [],
  bootstrap: [KapiRootComponent]
})
export class KapiModuleModule { }
