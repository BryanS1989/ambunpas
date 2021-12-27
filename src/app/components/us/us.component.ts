import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {

  ambUnPasDescription = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas metus vestibulum purus ullamcorper, vel ultricies felis sollicitudin. Ut finibus ornare urna, a molestie tellus lacinia ut. Sed sit amet venenatis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean consequat dolor consequat erat sagittis posuere. Vivamus vel fermentum quam. Etiam dictum in orci ac convallis. Maecenas dictum viverra nisi non volutpat. Fusce maximus ipsum id purus tincidunt vestibulum. Curabitur vestibulum dictum risus, blandit cursus nisi efficitur ac. Duis et arcu vitae est sollicitudin ultricies. Vivamus tempus lacus a leo pharetra vestibulum. Sed tempus, est et tincidunt laoreet, tortor mauris feugiat risus, sed consequat leo eros non lorem. Nulla ut egestas tellus. Vestibulum vehicula maximus enim sit amet vulputate. Fusce vitae gravida urna.',
    'Donec finibus velit augue, sed varius erat efficitur vitae. Proin ut tempus massa. Nullam ac arcu in turpis dignissim blandit ac nec purus. Phasellus at mauris massa. Phasellus porttitor enim sed neque eleifend tristique. Quisque ornare leo non mi luctus egestas. Vestibulum sed massa congue leo molestie viverra. Maecenas dictum dui vitae nibh dictum, vel fringilla enim vestibulum. Sed vel turpis eget ipsum sodales rutrum. Nullam tristique rutrum congue. Sed dapibus mauris nec massa tempor, dignissim tempus urna consectetur. Integer id urna et justo commodo venenatis non nec tellus. Donec lectus sapien, auctor non tortor at, tincidunt elementum lorem. Aliquam dui nunc, dictum vitae elit ac, venenatis euismod ex. Sed lacus leo, ultricies non gravida eleifend, gravida ac tortor. Curabitur in est ut erat faucibus vehicula sit amet at ipsum.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
