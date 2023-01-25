import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id:any;
  player:any={};
  

  constructor(private formbuilder:FormBuilder ,private playerService : PlayerService , private activatedRoute :ActivatedRoute,private router:Router) { }
  EditPlayerForm:FormGroup;
  ngOnInit() {
    this.EditPlayerForm=this.formbuilder.group({
      name: ["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      numberPlayer: ["",Validators.pattern("^[0-9]*$"),],
      age: ["",Validators.pattern("^[0-9]*$"),],
      position:["",[Validators.required]]

    });
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id:",this.id);
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        this.player=data;
        console.log("data",data);
        //this.EditPlayerForm.patchValue(data);
        // this.EditPlayerForm.setValue({
        //   numberPlayer:this.player.numberPlayer,
        //   name:this.player.name,
        //   age:this.player.age,
        //   position:this.player.position,
        // });
    
         this.EditPlayerForm.controls['name'].setValue(this.player.name);
         this.EditPlayerForm.controls['numberPlayer'].setValue(this.player.numberPlayer);
         this.EditPlayerForm.controls['age'].setValue(this.player.age);
         this.EditPlayerForm.controls['position'].setValue(this.player.position);

          
      }

    );
    


  }
  editPlayer(){
    this.player.id=this.id
    this.player.name=this.EditPlayerForm.value.name;
    this.player.numberPlayer=this.EditPlayerForm.value.numberPlayer;
    this.player.age=this.EditPlayerForm.value.age;
    this.player.position=this.EditPlayerForm.value.position;

     console.log(this.player)
    this.playerService.editPlayer(this.player).subscribe(
      (data) =>{
        console.log("updated",data);
        
      }

    );
    this.router.navigate(["admin"]);
  }

}
