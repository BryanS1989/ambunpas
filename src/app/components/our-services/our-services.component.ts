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
    },
    {
      title : 'Armarios',
      image : 'https://i.pinimg.com/originals/bf/90/84/bf9084c583d52510c76d789152bff0e0.jpg',
      altImage : 'Todas nuestras puertas',
      description :  'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      additionalLink : '',
    },
    {
      title : 'Baños',
      subtitle : 'Marmol, Cristal, Azulejos...',
      image : 'https://www.coblonal.com/wp-content/uploads/2017/02/Hab-Andorra_048-1024x681.jpg',
      altImage : 'Todas nuestras puertas',
      description :  'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      additionalLink : '',
    },
    {
      title : 'Tarima Flotante',
      image : 'https://www.estratoshomes.com/wp-content/uploads/2020/06/portada-tarima-laminado-parquet.jpg',
      altImage : 'Todas nuestras puertas',
      description :  'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      additionalLink : '',
    },
    {
      title : 'Fontanería Rápida',
      subtitle : 'Madera, Metal...',
      image : 'https://www.desatascosjumbo.com/wp-content/uploads/2021/02/www.emagister.com-cursoline-3602232-curso-online-de-fontaneria-materiales-para-instalaciones-fluxores-evacuacion-de-aguas-31.jpg',
      altImage : 'Todas nuestras puertas',
      description :  'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      additionalLink : '',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
