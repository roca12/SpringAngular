import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';

  listausuarios=["diego","sergio","admin","user"];
  listapass=["diego","sergio","admin","user"];


  user_correcto: string = "admininicial";
  pass_correcto: string = "admin123456";

  user: string = "";
  pass: string = "";

  correcto: number=-1;
  comparar() {
    if (this.user === this.user_correcto) {
      this.correcto = 1;
      if (this.pass === this.pass_correcto) {
        this.correcto = 1;
      } else {
        this.correcto = 0;
      }
    } else {
      this.correcto = 0;
    }

  }
}
