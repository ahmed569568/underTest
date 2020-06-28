import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items :any =[
    {id : 1 , name :'ahmed' , title :'frontend'},
    {id : 2 , name :'ezzat' , title :'backend'},
    {id : 3 , name :'rewan' , title :'node jas'}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
