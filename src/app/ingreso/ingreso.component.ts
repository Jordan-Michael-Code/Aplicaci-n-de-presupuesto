import { Component, OnInit } from '@angular/core';
import { ingreso } from './ingreso.model';
import { ingresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  ingresos:ingreso[]=[];
  
      
  constructor(private ingresoServicio:ingresoServicio) { 
   
  }

  ngOnInit(){
    this.ingresos= this.ingresoServicio.ingreso;
    this.imprimirValoresIngresos(); 
      }
      imprimirValoresIngresos() {
        console.log('Valores de Ingresos:');
        this.ingresos.forEach(ingreso => {
          console.log(ingreso.valor);
        });
      }

      eliminarIngreso(ingreso: ingreso){
      this.ingresoServicio.eliminar(ingreso);
      }

}
