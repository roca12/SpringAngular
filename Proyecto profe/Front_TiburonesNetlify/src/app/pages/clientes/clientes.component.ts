import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private objetohttp: HttpClient, private toastr: ToastrService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  res: any;
  contenido: any;
  urlapiGET: string = "http://localhost:8080/api/clientes";

  cedulainsert!: string;
  direccioninsert!: string;
  emailinsert!: string;
  nombreinsert!: string;
  telefonoinsert!: string;
  codepost!: number;

  insertarCliente() {
    this.objetohttp.post(this.urlapiGET,
      {
        "cedulacliente": this.cedulainsert,
        "direccioncliente": this.direccioninsert,
        "emailcliente": this.emailinsert,
        "nombrecliente": this.nombreinsert,
        "telefonocliente": this.telefonoinsert
      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {

        this.codepost = response.status;

        switch (this.codepost) {
          case 201:
            this.showNotification('top', 'right', 1);
            break;

          case 226:
            this.showNotification('top', 'right', 2);
            break;

          case 500:
            this.showNotification('top', 'right', 3);
            break;

        }
        this.cedulainsert = "";
        this.direccioninsert = "";
        this.emailinsert = "";
        this.nombreinsert = "";
        this.telefonoinsert = "";
      }
    );
  }

  ceduladelete!: string;
  codedelete!: number;
  eliminarCliente() {
    this.objetohttp.delete(this.urlapiGET + "/cedula/" + this.ceduladelete, {
      observe: 'response'
    }).subscribe(
      (response: any) => {

        this.codedelete = response.status;

        switch (this.codedelete) {
          case 202:
            this.showNotification('top', 'right', 4);
            break;

          case 500:
            this.showNotification('top', 'right', 5);
            break;

        }
        this.ceduladelete = "";
      }
    );
  }

  cedulasearch!: string;
  direccionsearch!: string;
  emailsearch!: string;
  nombresearch!: string;
  telefonosearch!: string;
  contenido2: any;
  buscarCliente() {
    try {
      this.res = this.objetohttp.get(this.urlapiGET + "/cedula/" + this.cedulasearch);
      this.res.subscribe((datos: any[]) => {
        this.contenido2 = datos;
        console.log(this.contenido2);
        this.direccionsearch = this.contenido2.direccioncliente;
        this.emailsearch = this.contenido2.emailcliente;
        this.nombresearch = this.contenido2.nombrecliente;
        this.telefonosearch = this.contenido2.telefonocliente;

      });
    }
    catch (e) {
      console.error("BK DOWN");
      this.contenido = []
    }
  }

  codeput!: number;
  actualizarCliente() {
    this.objetohttp.put(this.urlapiGET + "/cedula/" + this.cedulasearch,
      {
        "cedulacliente": this.cedulasearch,
        "direccioncliente": this.direccionsearch,
        "emailcliente": this.emailsearch,
        "nombrecliente": this.nombresearch,
        "telefonocliente": this.telefonosearch
      }, {
      observe: 'response'
    }).subscribe(
      (response: any) => {

        this.codeput = response.status;

        switch (this.codeput) {
          case 200:
            this.showNotification('top', 'right', 6);
            break;

          case 224:
            this.showNotification('top', 'right', 7);
            break;

          case 500:
            this.showNotification('top', 'right', 8);
            break;

        }
        this.cedulainsert = "";
        this.direccioninsert = "";
        this.emailinsert = "";
        this.nombreinsert = "";
        this.telefonoinsert = "";
      }
    );
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.cedulainsert);
    try {
      this.res = this.objetohttp.get(this.urlapiGET);
      this.res.subscribe((datos: any[]) => {
        this.contenido = datos;
        console.log(this.contenido);
        this.dtTrigger.next(this.dtOptions);
      });
    }
    catch (e) {
      console.error("BK DOWN");
      this.contenido = []
    }

    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'Cedula',
      },
      {
        title: 'dirección',
      },
      {
        title: 'email',
      },
      {
        title: 'Nombre',
      },
      {
        title: 'telefono',
      },
      ],
      pageLength: 10,
      responsive: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };




  }

  showNotification(from, align, type) {
    switch (type) {
      case 1:
        this.toastr.success('<b>Dato creado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.warning('<b>El dato se encuentra duplicado', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 3:
        this.toastr.error('<b>Error en el servidor BK, consulte con el administrador</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 4:
        this.toastr.success('<b>Dato eliminado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 5:
        this.toastr.error('<b>Error al eliminar el dato, verifique el que dato exista o no haya un error en el servidor</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;

      case 6:
        this.toastr.success('<b>Dato actualizado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 7:
        this.toastr.warning('<b>Error al eliminar el dato, verifique el que dato exista</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;

      case 8:
        this.toastr.error('<b>Error en el servidor</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }
}
