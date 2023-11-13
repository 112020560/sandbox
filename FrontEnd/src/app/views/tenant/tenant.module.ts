import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TenantRoutingModule } from './tenant-routing.module';
import { ListComponent } from './list/list.component';

//PRIMENG MODULES
import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar'
import {MultiSelectModule} from 'primeng/multiselect';

import { NgJsonEditorModule } from 'ang-jsoneditor'

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    MultiSelectModule,
    NgJsonEditorModule
  ]
})
export class TenantModule { }
