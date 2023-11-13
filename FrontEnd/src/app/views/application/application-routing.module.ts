import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ListconectionsComponent } from './listconections/listconections.component';
import { ListprocedureComponent } from './listprocedure/listprocedure.component';
import { ListpropertyComponent } from './listproperty/listproperty.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Aplicaciones'
    },
    children: [
      {
        path: '',
        redirectTo: 'aplicaciones'
      },
      {
        path: 'lista',
        component: ListComponent,
        data: {
          title: 'Lista'
        }
      },
      {
        path: 'listadetalle',
        component: ListconectionsComponent,
        data: {
          title: 'Detalle'
        }
      },
      {
        path: 'prodeduredetalle',
        component: ListprocedureComponent,
        data: {
          title: 'Proc-Detalle'
        }
      },
      {
        path: 'propertiesdetalle',
        component: ListpropertyComponent,
        data: {
          title: 'Prop-Detalle'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
