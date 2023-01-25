import { MatchService } from 'src/app/services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matchForm:FormGroup;
  match:any = {};
  constructor( private matchService:MatchService) { }

  ngOnInit() {
  }
  addMatch(){
    console.log("here match obj",this.match);
    this.matchService.addMatch(this.match).subscribe(
      (response) => 
      {
        console.log("here response", response);
      }
    );
    // let matchesTab=JSON.parse(localStorage.getItem("matches") || "[]")
    // this.match.id =this.maxId(matchesTab) +1 ;
    // matchesTab.push(this.match)
    // localStorage.setItem("matches" ,JSON.stringify(matchesTab))
  }
  maxId(T:any){
    let max ;
    if (T.length ==0) max=0;
    else {
      max=T[0].id;
      for(let i=1; i<T.lenth ; i++) {
        if (T[i].id > max )  max=T[i].id;

      }
    }
    return max ;
  }

}
