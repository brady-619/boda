import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {


  countrycode:string ="52"; 
  whatsappnumber:string ="5513794083";
  url:string= "https://wa.me/" +this.countrycode+this.whatsappnumber+"?text=¡Hola! Podrías ayudarme con una duda.";
  

  constructor() { }

  ngOnInit() {}

}
