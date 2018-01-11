import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgrammaPage } from './programma';

@NgModule({
  declarations: [
    ProgrammaPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgrammaPage),
  ],
})
export class ProgrammaPageModule {}
