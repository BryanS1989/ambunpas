import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  servicesArr = [
    {
      title : 'Cocinas',
      subtitle : 'De construcción y a medida',
      image : 'https://img77.uenicdn.com/image/upload/v1569615466/business/fb3d6536-fe92-4f56-aee2-3312168c51ea/IMG-1833JPG.jpg',
      altImage : 'Photo of a Shiba Inu',
      description :  'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      additionalLink : '',
    },
    {
      title : 'Puertas',
      subtitle : 'Madera, Metal...',
      image : 'https://www.arquitecturayreforma.com/wp-content/uploads/Variedad-de-tipos-de-puertas.jpg',
      altImage : 'Todas nuestras puertas',
      description :  'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      additionalLink : '',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
