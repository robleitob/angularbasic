import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spider','Hulk','Iroman','Capi'];
  heroeCaido: string = '';
  
  borrarHeroe(){
    this.heroeCaido = this.heroes.shift() || '';
  }
}
