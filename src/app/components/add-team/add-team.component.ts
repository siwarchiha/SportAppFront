import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm:FormGroup;
  team:any = {};
  constructor( private teamService:TeamService) { }

  ngOnInit() {
  }
  addTeam(){
    this.teamService.addTeam(this.team).subscribe(
      (data)=>{
        console.log("here team", data);
        
      }

    );
    // let teamsTab=JSON.parse(localStorage.getItem("teams") || "[]")
    // this.team.id =this.maxId(teamsTab) +1 ;
    // teamsTab.push(this.team)
    // localStorage.setItem("teams" ,JSON.stringify(teamsTab))
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
