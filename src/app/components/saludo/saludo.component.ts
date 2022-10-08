import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  @Input() name:string="Leo";
  @Output() mensajeEmitter:EventEmitter<string>=new EventEmitter<string>();
  @Input() username:string=" ";
  @Input() email:string=" ";

  constructor() { }

  ngOnInit(): void {
    //aca puedes poner tareas para que se ejecute previo a la renderizacion del componente
    //por ejemplo: cargar datos de forma asincrona, una peticion http y obtener la informacion antes de pintarla
    //y no pintar cosas que no existen
    console.log("ngOnInit del componente saludo");

  }


  /*
  Ejemplo para gestionar un evento de tipo click en el DOM
  */

  // alertaSaludo():void{
  //   alert(`Hola, ${this.name}. Alerta despachada desde un click de boton`);
  //
  // }
  /*
   Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
 */


  EnviarMensajeAlPadre():void{
    // alert(`Hola, ${this.name}. Alerta despachada desde un click de boton`);
    this.mensajeEmitter.emit(`Hola, ${this.name}. Alerta despachada desde un click de boton`);
  }





}
