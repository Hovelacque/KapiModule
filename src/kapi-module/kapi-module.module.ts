import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaTesteComponent } from './tela-teste/tela-teste.component';

@NgModule({
  declarations: [
    TelaTesteComponent
  ],
  exports:[
    TelaTesteComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
})
export class KapiModuleModule { }
