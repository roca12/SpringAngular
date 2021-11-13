import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  res: any;
  contenido: any;
  urlapi: string = "http://universities.hipolabs.com/search?country=Colombia";

  constructor(private objetohttp: HttpClient) { }

  ngOnInit() {
    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    }
    );
  }


  //post
  nombre!: string; 
  correo!: string; 
  user!: string;
  pass!: string;

  codigoRespuesta!: number;
  postData() {
    this.objetohttp.post<any>(
      "http://localhost:8080/api/usuarios",
      {
        nombre_completo: this.nombre,
        email:this.correo ,
        username: this.user,
        password: this.pass
      }, { observe: 'response' }
    ).subscribe(response => {
      this.codigoRespuesta = response.status;
    });
  }
}
