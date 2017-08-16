import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  //styleUrls: ['./app.component.css']
})
export class BodyComponent {
  //title = 'app';

  mostrar:boolean = false;

  frase:any = {
    mensaje:"Un gran poder requiere una gran responsabilidad",
    autor:"Ben Parker"
  }

  personajes:string[] = ["Spiderman", "Venom", "Dr. Octopus"];

}
