import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  apiURL:string ="http://localhost:8080/api/productos";
  
  constructor(private httpobject:HttpClient) { }

  resultados=Array();

  upload(file:any):Promise<any[]>{
      return new Promise<any[]>(
        (resolve,reject)=>{
          var lector = new FileReader();
          lector.onloadend=(e)=>{
            let contenido :string = lector.result as string;
            let lineas_separadas=contenido.split("\n");

            for (let linea_actual of lineas_separadas){
              linea_actual.replace(";",",");
              let columnas = linea_actual.split(",");

              this.httpobject.post(this.apiURL,
              {
                "codigoproducto":columnas[0],
                "nombreproducto":columnas[1],
                "nitproveedor":columnas[2],
                "preciocompra":columnas[3],
                "ivacompra":columnas[4],
                "precioventa":columnas[5]
              },{
                observe:'response'
              }).subscribe(
                (response:any)=>{
                  this.resultados.push(response.status);
                }
              );
            }
            resolve(this.resultados);
          }
          lector.readAsText(file);
        }
      );
  }
}
