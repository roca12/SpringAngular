import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //////////////GET////////////

  //OBJETO OBSERVABLE
  res: any;

  //OBJETO QUE ALMACENARA EL CONTENIDO DEL JSON
  content: any;

  //ERROR POSIBLE
  errorMessage: any;

  //URL DE LA REST API
  REST_API_SERVER = "http://universities.hipolabs.com/search?country=Colombia";

  //INICIALIZANDO OBJETO CLIENTE 
  constructor(private http: HttpClient) { }

  //FUNCIÓN DE CONTROL DE ERRORES
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = 
      `Error: ${error.error.message}
      \n 
      ${error.status}`;
    } else {
      // Errores del lado del servidor
      errorMessage = 
      `Codigo de Error: ${error.status}
      \n
      Mensaje: ${error.message}`;
    }
    //MOSTRANDO UN ERROR EN UNA ALERTA
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
  //FUNCIÓN DE INICIALIZACIÓN ANTES DE CARGAR LA PAGINA
  ngOnInit() {
    
    this.res = this.http.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
    this.res.subscribe((data: any[]) => {
      this.content = data;
      console.log(this.content);
    })

    
  }

}

