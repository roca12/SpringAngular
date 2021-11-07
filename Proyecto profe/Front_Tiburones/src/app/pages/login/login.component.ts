import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService, private router: Router) { 
     
  }

  // login
  listausers = ['diego', 'roca12', 'admin', 'user'];
  usercorrecto = 'admininicial';
  passcorrecto = 'admin123456';
  user = '';
  pass = '';
  correcto = -1;
  comparar() {
    if (this.user === this.usercorrecto) {
      this.correcto = 1;
      if (this.pass === this.passcorrecto) {
        this.correcto = 1;
        this.showNotification('top', 'right',1);

        this.router.navigate(['/clientes'])
      } else {
        this.correcto = 0;
        this.showNotification('top', 'right',2);
      }
    } else {
      this.correcto = 0;
      this.showNotification('top', 'right',2);
    }
  }

  showNotification(from, align,type) {
    switch (type) {
      case 1:
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span><b>Acceso correcto, redirigiendo</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Nombre de usuario o contraseña incorrecta</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
  }

}
