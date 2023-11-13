import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';

//PRIMENG MODULES
import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar'
import {MultiSelectModule} from 'primeng/multiselect';
import {InputSwitchModule} from 'primeng/inputswitch';
// import {} from 'primeng/'


@NgModule({
  declarations: [
    CountryComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CountryRoutingModule,
    TableModule,
    ProgressBarModule,
    InputSwitchModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    ProgressSpinnerModule
  ]
})
export class CountryModule { }
