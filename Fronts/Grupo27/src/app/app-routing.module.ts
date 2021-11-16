import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './paginas/formulario/formulario.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

const routes: Routes = [

  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "formulario",
    component: FormularioComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
