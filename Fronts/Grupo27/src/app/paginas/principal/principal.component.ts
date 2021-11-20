import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private principalservice: PrincipalService) { }

  resultados: any;
  file!: File;

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  async onUpload() {
    this.resultados = await this.principalservice.upload(this.file);
    console.log(this.resultados);
  }

  ngOnInit(): void {
  }

}
