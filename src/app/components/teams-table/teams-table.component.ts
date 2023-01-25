import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams:any={};
  
  constructor( private router:Router , private teamService:TeamService) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams=data;
      }
    );
    //this.teams=JSON.parse(localStorage.getItem("teams"))
  }
  deleteTeam(X:number){
    alert("delete ?  " + X)
    this.teamService.deleteTeamById(X).subscribe(
      (data)=>{
        console.log("deleted",data);
        this.teamService.getAllTeams().subscribe(
          (data)=>{
            this.teams=data;
          }
        );
        
      }
    );
    // for (let i = 0; i < this.teams.length; i++) {
    //   if(this.teams[i].id == X){
    //     this.teams.splice(i,1);
    //     break;
    //   }
      
    // }
    // localStorage.setItem("teams",JSON.stringify(this.teams));

  }
  goToDisplay(){
      this.router.navigate(["teamInfo"]);
  }
  goToEdit(x:number){
    this.router.navigate([`Editteam/${x}`]);
  }


}
