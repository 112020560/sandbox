import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { ListconectionsComponent } from './listconections/listconections.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListprocedureComponent } from './listprocedure/listprocedure.component';
import { ListpropertyComponent } from './listproperty/listproperty.component'

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
//import {ToastModule} from 'primeng/toast';
//import { MessageService } from 'primeng';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../services/common/notification.service';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ListconectionsComponent,
    ListprocedureComponent,
    ListpropertyComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ModalModule,
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
    InputSwitchModule,
    ToastrModule.forRoot()
    //ToastModule.fo
  ],
  providers: [BsModalService, NotificationService, ToastrService ] //, MessageService]
})
export class ApplicationModule { }
