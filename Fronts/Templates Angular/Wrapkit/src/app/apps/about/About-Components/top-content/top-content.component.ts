import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent implements OnInit {

  imagePath='../assets/images/innerpage/about-us.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
