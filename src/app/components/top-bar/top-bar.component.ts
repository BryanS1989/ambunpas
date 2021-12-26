import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  menu = [
    {
      name : 'Nosotros',
      path : 'us'
    },
    {
      name : 'Servicios',
      path : 'services'
    },
    {
      name : 'Contáctanos',
      path : 'contact'
    }
  ];

  activeLink = this.menu[0];

  constructor() { }

  ngOnInit(): void {
  }

}
