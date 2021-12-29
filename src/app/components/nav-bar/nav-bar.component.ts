import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

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

  activeLink = {};

  constructor() { }

  ngOnInit(): void {
  }

}
