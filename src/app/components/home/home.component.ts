import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  match:any={id:3,ScoreOne:"4",ScoreTwo:"5",teamOne:"LAREGA",teamtwo:"CA",statutOne:"(loss)",statutwp:"(win)"};

  constructor() { }

  ngOnInit() {
  }

}
