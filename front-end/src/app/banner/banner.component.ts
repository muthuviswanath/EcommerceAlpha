import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public imgSrc ='';
  // public srcs = [];

  // constructor() { }

  ngOnInit(): void {
  }

  // changeImage() {
  //  imgSrc = '';
  // }

}
