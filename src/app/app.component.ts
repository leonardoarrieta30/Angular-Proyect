import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practise2';
  name='Leonardo';
  username='Leoarru30';
  email='leoah302001gmail.com';


  //Este evento se ejecutara cuando en el hijo(saludo component) se pulse un boton
  RecibirMensajeDelHijo(Event:string){
    alert(Event);
  }

  function(){

  }

}
