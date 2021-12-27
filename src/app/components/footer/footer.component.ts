import { Component, OnInit } from '@angular/core';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  rrssArray = [
    {
      icon : faInstagram,
      url : "https://instagram.com"
    },
    {
      icon : faTwitter,
      url : "https://twitter.com"
    },
    {
      icon : faFacebook,
      url : "https://facebook.com"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
