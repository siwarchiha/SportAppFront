import { MatchService } from 'src/app/services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id:any;
  matches:any;
  match:any = {};
  matchForm:FormGroup
  constructor(private activatedRoute :ActivatedRoute , private router:Router , private matchService : MatchService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("here id",this.id);
    this.matchService.getMatchById(this.id).subscribe(
      (data) =>{
        this.match=data;
      }
    );
    
    // this.matches=JSON.parse(localStorage.getItem("matches"));
    // for (let i = 0; i < this.matches.length; i++) {
    //   if(this.matches[i].id==this.id) {
    //     this.match = this.matches[i];
    //     break;
    //   }
      
    // }
  }

  editMatch(){
   
    this.matchService.editMatch(this.match).subscribe(
      (data) =>{
        console.log("here",data);
        
        
      }
    )
    this.router.navigate(["admin"]);


    // for (let i = 0; i < this.matches.length; i++) {
    //   if(this.matches[i].id==this.id){
    //     this.matches[i]=this.match;
    //     break;
    //   }
      
    // }
    // localStorage.setItem("matches", JSON.stringify(this.matches));
    // this.router.navigate(["admin"]);
  }




}
