import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  T:any =[] ; 
  constructor() { }

  ngOnInit() {
    this.T= [
    {id:1, author:"News1", title:"test1",date:"27/09/1999",img:"assets/images/img_1.jpg",avatar:"assets/images/person_1.jpg"},
    {id:2, author:"News2", title:"test2",date:"27/09/1999",img:"assets/images/img_2.jpg",avatar:"assets/images/person_2.jpg"},
    {id:3, author:"News3", title:"test3",date:"27/09/1999",img:"assets/images/img_3.jpg",avatar:"assets/images/person_3.jpg"},
    {id:4, author:"News4", title:"test4",date:"27/09/1999",img:"assets/images/img_1.jpg",avatar:"assets/images/person_2.jpg"}

  ];
  }

}
