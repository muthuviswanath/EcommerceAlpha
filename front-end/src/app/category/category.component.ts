import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  public sessionStorage=sessionStorage;
  constructor() { }

  ngOnInit(): void 
  {
  }

  SetSession(category:string):void
  {
    console.log(category);
    sessionStorage.setItem('ProductCategory',category);
  }

}
