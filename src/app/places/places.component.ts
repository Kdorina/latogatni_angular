 /*
* File: places.component.ts
* Author: Kovács Dorina
* Copyright: 2022, Kovács Dorina
* Group: Szoft II N
* Date: 2022-12-25
* Github: https://github.com/Kdorina
* Licenc: GNU GPL
*/ 


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent  implements OnInit{
  
  places:any = []
  constructor(){

  }
  
  ngOnInit(): void {
    this.places = [
      {name: "Székesfehérvár", county: "Fejér", area: 170.89, population: 95545},
      {name: "Szombathely", county: "Vas", area: 97.5, population:	78324},
      {name: "Sopron", county: "Győr-Moson-Sopron", area: 169.04, population: 62900},
      {name: "Zalaegerszeg", county: "Zala", area: 102.42, population: 55470},
      {name: "Sárvár", county: "Vas", area:	64.65, population: 15072},
      {name: "Lenti", county: "Zala", area:	73.79, population: 7348},
      {name: "Zalakaros", county: "Zala", area: 17.17, population: 1936}
    ]
  }

}
