import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  apiURL: string = "http://localhost:8080/api/productos";

  constructor(private httpObject: HttpClient) { }

  resultados = Array();


  upload(file: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      var reader = new FileReader();
      reader.onloadend = (e) => {
        let lineas:string = reader.result as string;
        let separados = lineas.split("\n");

        for (let lineaactual of separados) {
          lineaactual.replace(";", ",");
          let columnas = lineaactual.split(",");
          this.httpObject.post(this.apiURL,
            {
              "codigoproducto": columnas[0],
              "ivacompra": columnas[4],
              "nitproveedor": columnas[2],
              "nombreproducto": columnas[1],
              "preciocompra": columnas[3],
              "precioventa": columnas[5]
            },
            { observe: 'response' }).subscribe(
              (response: any) => {
                this.resultados.push(response.status);
              }
            );
        }
        resolve(this.resultados);
      }
      reader.readAsText(file);
    });
  }

}
