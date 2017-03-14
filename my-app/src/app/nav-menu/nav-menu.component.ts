import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

   myList =
   [
    { id: 1, txt: 'Home' },
    { id: 2, txt: 'Team Of Week' },
    { id: 3,  txt: 'Players' },
    { id: 4, txt: 'Statistics' }
   ];

  constructor() { }

  ngOnInit() {
  }

}
