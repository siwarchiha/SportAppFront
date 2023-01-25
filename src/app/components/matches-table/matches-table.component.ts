import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches:any=[];
  
  constructor( private router:Router , 
                private matchService : MatchService) { }

  ngOnInit() {
    //this.matches=JSON.parse(localStorage.getItem("matches"))
    this.matchService.getAllMatches().subscribe(
      (data) => {
        console.log('heeeere', data);
        
        this.matches = data ; 
      }
      //el rep eli chne5ouha mel service nsobha fel data w ba3d fel matches 
      //wel rep jeyetni mel back mel bd 

    );
  
  }
  deleteMatch(X:number){
    alert("delete ?  " + X)
    this.matchService.deleteMatchById(X).subscribe(
      (response) =>{ 
        console.log("response",response);
        this.matchService.getAllMatches().subscribe(
          (data) => {
            console.log('heeeere', data);
            
            this.matches = data ; 
          }
        );
        
      }
    );
      
    }

  goToDisplay(x:number){
      this.router.navigate([`matchInfo/${x}`]);
  }
  goToEdit(x:number){
    this.router.navigate([`Editmatch/${x}`]);
  }

}
