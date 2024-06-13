import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerinfoRoutingModule } from './customerinfo-routing.module';
import { CustomerinfoComponent } from './customerinfo.component';


@NgModule({
  declarations: [
    CustomerinfoComponent
  ],
  imports: [
    CommonModule,
    CustomerinfoRoutingModule
  ]
})
export class CustomerinfoModule { }
