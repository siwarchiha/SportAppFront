import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  //http://localhost/4200/
  {path:"" , component:HomeComponent},
  //http://localhost/4200/signin
  {path:"signin" , component:LoginComponent },
  //http://localhost/4200/subscription
  {path:"subscription" , component: SignupComponent},
  //http://localhost/4200/addMatch
  {path:"addMatch" , component: AddMatchComponent},
  //http://localhost/4200/addTeam
  {path:"addTeam" , component: AddTeamComponent},
  //http://localhost/4200/addPlayer
  {path:"addPlayer" , component: AddPlayerComponent},
  //http://localhost/4200/matches
  {path:"matches" , component:MatchesComponent }, 
  //http://localhost/4200/admin
  {path:"admin" , component:AdminComponent },
    //http://localhost/4200/matchInfo
    {path:"matchInfo/:id" , component:MatchInfoComponent },
    //http://localhost/4200/editMatch
  {path:"Editmatch/:id" , component: EditMatchComponent},
  //http://localhost/4200/editPlayer
  {path:"Editplayer/:id" , component: EditPlayerComponent},
  //http://localhost/4200/editTeam
  {path:"Editteam/:id" , component: EditTeamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
