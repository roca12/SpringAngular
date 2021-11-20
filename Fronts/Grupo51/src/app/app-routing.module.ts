import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraComponent } from './componentes/extra/extra.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { StylesComponent } from './componentes/styles/styles.component';


const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent
  },
  {
    path:'formulario',
    component:FormularioComponent
  },
  {
    path:'extras',
    component:ExtraComponent
  },
  {
    path:'estilos',
    component:StylesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
