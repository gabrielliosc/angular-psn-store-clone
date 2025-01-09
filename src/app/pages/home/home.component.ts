import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gamesCard = [{
    gameCover: "assets/ac-cover.jpg",
    gameLabel: "BEST OF YEAR",
    gameType: "DIGITAL | PS5",
    gamePrice: "R$ 369,99"
  },{
    gameCover: "assets/bt-1.jpg",
    gameLabel: "DIGITAL",
    gameType: "DIGITAL | PS4",
    gamePrice: "R$ 129,99"
  },{
    gameCover: "assets/bt-4.jpg",
    gameLabel: "EXCLUSIVE",
    gameType: "DISC | PS5",
    gamePrice: "R$ 269,99"
  },{
    gameCover: "assets/bt-hardline.jpg",
    gameLabel: "NEW",
    gameType: "DIGITAL | PS3 PS4 PS5",
    gamePrice: "R$ 369,99"
  },{
    gameCover: "assets/bt-5.jpg",
    gameLabel: "EXCLUSIVE",
    gameType: "DIGITAL | PS5",
    gamePrice: "R$ 369,99"
  },{
    gameCover: "assets/bt-bad-company-2.jpg",
    gameLabel: "EXCLUSIVE",
    gameType: "DIGITAL | PS3",
    gamePrice: "R$ 69,99"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
