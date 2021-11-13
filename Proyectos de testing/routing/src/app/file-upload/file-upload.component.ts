import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
    //lista que almacenara los resultados de la insercion de cada linea
    resultados: any;

    // Variable to store shortLink from api response
    file!: File; //variable para almacenar los datos

    //variable de confimación de recepcion de archivo
    recibido: boolean = false;

    // Injectando servicio
    constructor(private fileUploadService: FileUploadService) { }

    ngOnInit(): void {
    }

    // En caso de seleccionar archivo, escojer el primer archivo
    onChange(event: any) {
        this.file = event.target.files[0];
    }

    // Cuandop haga click, iniciar proceso de envio
    async onUpload() {
        console.log(this.file);
        this.resultados = await this.fileUploadService.upload(this.file);
        console.log(this.resultados);
    }
}