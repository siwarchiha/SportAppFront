import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //@du serveur BE
  matchUrl:string = "http://localhost:8089/api/matches"
  constructor( private http:HttpClient ) { }
  //fct appelee lors du click btn add pour la demander de transporter l'objet match
  //http est notre livreur
  //return pour dire attendre une rep 
  addMatch(obj){
     return this.http.post(this.matchUrl,obj);

  }
  getAllMatches(){
    return this.http.get(this.matchUrl);
  }
  getMatchById(id){
    return this.http.get(`${this.matchUrl}/${id}`);
  }

  deleteMatchById(id){
    return this.http.delete(`${this.matchUrl}/${id}`);
  }
  editMatch(obj){
    return this.http.put(`${this.matchUrl}`, obj)
  }



}
