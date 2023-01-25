import { TeamService } from './../../services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  id:any;
  teams:any;
  team:any;
  teamForm:FormGroup;

  constructor( private activatedRoute :ActivatedRoute , private router:Router ,private teamService:TeamService ) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("here id",this.id);
    this.teamService.getTeamById(this.id).subscribe(
      (data)=>{
        this.team=data;
      }

    );
  }
  editTeam(){
    this.teamService.editTeam(this.team).subscribe(
      (data)=>{
        console.log("here data",data);
      }
    );
    this.router.navigate(["admin"]);
  }

}
