import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl:string = "http://localhost:8089/api/teams"


  constructor(private http:HttpClient) { }
  addTeam(obj){
    return this.http.post(this.teamUrl,obj);

 }
 getAllTeams(){
   return this.http.get(this.teamUrl);
 }
 getTeamById(id){
   return this.http.get(`${this.teamUrl}/${id}`);
 }

 deleteTeamById(id){
   return this.http.delete(`${this.teamUrl}/${id}`);
 }
 editTeam(obj){
   return this.http.put(`${this.teamUrl}`, obj)
 }

}
