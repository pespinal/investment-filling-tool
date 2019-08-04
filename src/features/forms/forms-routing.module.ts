import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulateFormComponent } from './components/formulate-form/formulate-form.component';

const routes: Routes = [
  {
    path: '',
    component: FormulateFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
