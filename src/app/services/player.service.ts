import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl:string ="http://localhost:8089/api/players"

  constructor( private http : HttpClient) { }
  addPlayer(obj){
    return this.http.post(this.playerUrl,obj);
  }

  getAllPlayer(){
    return this.http.get(this.playerUrl);
  }

  getPlayerById(id){
    return this.http.get(`${this.playerUrl}/${id}`);
  }

  editPlayer(obj){
    return this.http.put(`${this.playerUrl}`,obj);
  }

  deletePlayerById(id){
    return this.http.delete(`${this.playerUrl}/${id}`);
  }
}
