import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {
  url  = "http//google.com.br";
  cursoAngular : boolean = true;
  imageUrl: string = "http://lorempixel.com.br/largura/altura"
  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }
  constructor(){

  }

}

