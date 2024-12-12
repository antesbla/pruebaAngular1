import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Identificador del componente
  templateUrl: './app.component.html', //Interfaz del componente
  styleUrl: './app.component.css' //Estilo de la interfaz
})
export class AppComponent {
  public title : string = 'Hola mundo';

  public counter: number= 10;

increaseBy(value: number):void{
  this.counter += value;
}
idecrementBy(value: number):void{
  this.counter-=1;
}
reset(value: number):void{
  this.counter = 10;
}
}


