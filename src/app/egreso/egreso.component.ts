import { Component, Input, OnInit } from '@angular/core';
import { egreso } from './egreso.model';
import { egresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  egresos:egreso[]=[];
  @Input() ingresoTotal: number;


  constructor(private egresoServico: egresoServicio) { 

  }

  ngOnInit(): void {
    this.egresos= this.egresoServico.egreso;
  }
  
  eliminarEgreso(egreso: egreso){
  this.egresoServico.eliminar(egreso);
  }

  calcularPorcentaje(egreso: egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
