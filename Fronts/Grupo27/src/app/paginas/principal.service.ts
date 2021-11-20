import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  apiURL: string = "http://localhost:8080/api/productos";

  constructor(private objetohttp: HttpClient) { }

  resultados = Array();

  upload(file: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      var lector = new FileReader();
      lector.onloadend = (e) => {
        //se leyo el contenido de todo el archivo
        let contenido: string = lector.result as string;
        //se va a separar el contenido en filas
        let lineas_separadas = contenido.split("\n");

        for (let filaactual of lineas_separadas) {
          filaactual.replace(";", ",");
          let columnas = filaactual.split(",");
          this.objetohttp.post(this.apiURL,
            {
              "codigoproducto":columnas[0],
              "nombreproducto":columnas[1],
              "nitproveedor":columnas[2],
              "preciocompra":columnas[3],
              "ivacompra":columnas[4],
              "precioventa":columnas[5]
            },
            {observe:'response'}).subscribe(
            (response:any)=>{
              this.resultados.push(response.status);
            }
          );
        }
        resolve(this.resultados);
      }
      lector.readAsText(file);
    });
  }
}
