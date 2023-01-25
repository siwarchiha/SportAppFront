import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()newMatch :any;
  constructor() { }

  ngOnInit() {
  }
  color(a:number , b:number ){
    if(a>b){
      return 'green';
    }else if(a<b){
      return'red';
    }else {
      return 'blue';
    }

  }

}
