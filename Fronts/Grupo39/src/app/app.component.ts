import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  res: any;

  contenido: any;

  urlapi: string = "http://universities.hipolabs.com/search?name=middle";


  suma: number = 0;

  constructor(private objetohttp: HttpClient) { }


  //FUNCIÓN DE CONTROL DE ERRORES
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Error: ${error.error.message}\n ${error.status}`;
    } else {
      // Errores del lado del servidor
      errorMessage = `Codigo de Error: ${error.status} \nMensaje: ${error.message}`;
    }
    //MOSTRANDO UN ERROR EN UNA ALERTA
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  ngOnInit(): void {
    this.suma = 45 + 98;

    //utilizando el servicio en la url
    this.res = this.objetohttp.get(this.urlapi).pipe(catchError(this.handleError));
    //suscribe el archivo json y lo convierte
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
    });

  }


  /////////////////////////////////////////////////////////////////
  codigoRespuesta!: number;
  res2: any;
  username!:string;
  password!:string;
  name!:string;
  email!:string;
  postData() {
    this.objetohttp.post<any>(
      'http://localhost:8080/api/usuarios',
      {
        nombre_completo:this.name,
        email: this.email,
        username: this.username,
        password: this.password
      },
      { observe: 'response' }
    ).subscribe(response=>{
      this.codigoRespuesta=response.status;
      this.res2=response;
    });

  }






}













/*
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
  */
