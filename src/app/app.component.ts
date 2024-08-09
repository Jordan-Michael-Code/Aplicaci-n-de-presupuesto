import { Component } from '@angular/core';
import { ingreso } from './ingreso/ingreso.model';
import { egreso } from './egreso/egreso.model';
import { ingresoServicio } from './ingreso/ingreso.service';
import { egresoServicio } from './egreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingreso: ingreso[]=[];
  egreso: egreso[]=[];
  constructor(private ingresoServicio: ingresoServicio, 
    private egresoServicio: egresoServicio){
      this.ingreso= ingresoServicio.ingreso;
      this.egreso= egresoServicio.egreso;
    }

    getIngresoTotal(){
      let ingresoTotal: number= 0;
      this.ingreso.forEach(ingreso =>{
        ingresoTotal= ingresoTotal + ingreso.valor;
      });
      return ingresoTotal;
    }

    getEgresoTotal(){
      let egresoTotal: number= 0;
      this.egreso.forEach(egreso =>{
        egresoTotal= egresoTotal + egreso.valor;
      });
      return egresoTotal;
    }

    getPorcentajeTotal(){
     return  this.getEgresoTotal() / this.getIngresoTotal();
    }

    getPresupuestoTotal(){
      return this.getIngresoTotal() - this.getEgresoTotal();
    }
}
