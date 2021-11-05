import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grupo39';
  nombre: string = "Diego Rodriguez";
  numero: number = 3.14;
  booleano: boolean = false;
  cualquiera: any = "STRING";

  sumar(num1: number, num2: number): number {
    return num1 + num2;
  }

  nuevotipo: string = "password";

  titulovacio: string = "";
  cambiarTitulo() {
    this.titulovacio = Math.random() + "";
  }

  estudiante: string = "Lina";
  sexoestudiante: string = "F";


  lista = Array();
  llenarLista() {
    for (let i = 0; i < 15; i++) {
      this.lista.push(Math.random());
    }

  }

  temaclaro: boolean = true;
  cambiarTema() {
    if (this.temaclaro == false)
      this.temaclaro = true;
    else {
      this.temaclaro = false;
    }
  }
}
