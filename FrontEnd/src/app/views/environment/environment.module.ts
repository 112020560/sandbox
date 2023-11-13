import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EnvironmentRoutingModule } from './environment-routing.module';
import { EnvironmentComponent } from './environment.component';

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

import { NgJsonEditorModule } from 'ang-jsoneditor'


@NgModule({
  declarations: [
    EnvironmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EnvironmentRoutingModule,
    TableModule,
    ProgressBarModule,
    InputSwitchModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    NgJsonEditorModule
  ]
})
export class EnvironmentModule { }
