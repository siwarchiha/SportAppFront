import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(private formbuilder:FormBuilder ,private playerService:PlayerService) { }
  AddPlayerForm : FormGroup;
  player:any = {}
  ngOnInit() {
    this.AddPlayerForm=this.formbuilder.group({
      name: ["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      numberPlayer: ["",Validators.pattern("^[0-9]*$"),],
      age: ["",Validators.pattern("^[0-9]*$"),],
      position:["",[Validators.required]]

    });

  
  }
  addPlayer(){
    console.log("here player to add",this.AddPlayerForm.value);
    this.playerService.addPlayer(this.AddPlayerForm.value).subscribe(
      (data) =>{
        console.log("resp",data);
        
      }

    );
    
    

    // let playersTab = JSON.parse(localStorage.getItem("players") || "[]")
    // this.AddPlayerForm.value.id=this.maxId(playersTab) + 1 ;
    // console.log(this.player)
    // playersTab.push(this.AddPlayerForm.value)

    // localStorage.setItem("players",JSON.stringify(playersTab))
  }
  maxId(T:any){
    let max 
    if(T.length == 0) max=0;
    else {
      max=T[0].id;
      for(let i=1;i<T.length ; i++){
        if (T[i].id > max ) max=T[i].id;
      }
    }
    return max ;
  }
}
