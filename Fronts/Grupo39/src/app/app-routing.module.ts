import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraComponent } from './componentes/extra/extra.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { StyleComponent } from './componentes/style/style.component';

const routes: Routes = [
  {
    path:'',
    component:PrincipalComponent
  },{
    path:'extra',
    component:ExtraComponent
  },{
    path:'style',
    component:StyleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
