import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdadPageRoutingModule } from './edad-routing.module';

import { EdadPage } from './edad.page';
import {HttpClientJsonpModule} from '@angular/common/http'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdadPageRoutingModule,
    HttpClientJsonpModule
  ],
  declarations: [EdadPage]
})
export class EdadPageModule {}
