import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players:any=[];
  constructor(private router:Router , private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayer().subscribe(
      (data)=>{
        this.players=data;
      }

    );
    //this.players=JSON.parse(localStorage.getItem("players"))
  }
  editPlayer(X:number){
    this.router.navigate([`Editplayer/${X}`]);
  }
  deletePlayer(X:number){
    alert("delete ?  " + X);
    this.playerService.deletePlayerById(X).subscribe(
      (data)=>{
        console.log("deleted",data);
        
      }

    );

    // for (let i = 0; i < this.players.length; i++) {
    //   if(this.players[i].id == X){
    //     this.players.splice(i,1);
    //     break;
    //   }
      
    // }
    // localStorage.setItem("players",JSON.stringify(this.players));

  }

}


function goToDisplay() {
  this.router.navigate(["playerInfo"]);
}

