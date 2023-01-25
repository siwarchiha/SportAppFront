import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
   matches:any=[
    {id:1,scoreOne:"4",scoreTwo:"5",teamOne:"LA LEGA",teamTwo:"JUVENDU",statut1:"(loss)",statut2:"(win)"},
    {id:2,scoreOne:"2",scoreTwo:"5",teamOne:"LAVega",teamTwo:"EST",statut1:"(loss)",statut2:"(win)"},
    {id:3,scoreOne:"4",scoreTwo:"6",teamOne:"LAREGA",teamTwo:"CA",statut1:"(loss)",statut2:"(win)"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
