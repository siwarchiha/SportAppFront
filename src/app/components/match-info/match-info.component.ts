import { MatchService } from 'src/app/services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id:any;
  matches:any;
  match:any;

  constructor( private activatedRoute :ActivatedRoute , private matchService :MatchService) {
    


   }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("here id",this.id);
    this.matchService.getMatchById(this.id).subscribe(
      (data) => {
        console.log("here resp",data);
        this.match=data;
      }
    );
    
    // this.matches=JSON.parse(localStorage.getItem("matches"));
    // for (let i = 0; i < this.matches.length; i++) {
    //   if(this.matches[i].id==this.id) {
    //     this.match = this.matches[i];
    //     break;
    //   }
      
    }

  }

