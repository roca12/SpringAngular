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
  urlapi: string = "http://universities.hipolabs.com/search";

  constructor(private objetohttp: HttpClient) { }

  ngOnInit(): void {

    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
    });
  }


  username!:string;
  password!:string;
  nombre!:string;
  correo!:string;
  
  codigorespuesta!: number;
  postData() {
    this.objetohttp.post<any>(
      "http://localhost:8080/api/usuarios",
      {
        "email": this.correo,
        "nombre_completo": this.nombre,
        "password": this.password,
        "username": this.username
      },
      {observe:'response'}
    ).subscribe(response=>{
      this.codigorespuesta=response.status;
    });

  }


}
