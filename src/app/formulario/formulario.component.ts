import { Component, OnInit } from '@angular/core';
import { ingresoServicio } from '../ingreso/ingreso.service';
import { egresoServicio } from '../egreso/ingreso.servicio';
import { ingreso } from '../ingreso/ingreso.model';
import { egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo: string= 'ingreso';
  descripcionInput: string;
  valorInput: number;
  constructor(private ingresoServicio: ingresoServicio, 
    private egresoServicio: egresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperador(event: any){
    this.tipo= event.target.value;
    console.log('Tipo seleccionado:', this.tipo);
    // Aquí puedes hacer lo que necesites con el tipo seleccionado

  }
  agregarValor(){
    if(this.tipo === 'ingreso'){
      this.ingresoServicio.ingreso.push(new ingreso(this.descripcionInput, this.valorInput))
      console.log('Estoy en ingreso:', this.tipo);
    }else{
      this.egresoServicio.egreso.push(new egreso(this.descripcionInput, this.valorInput))
      console.log('Estoy en ingreso:', this.tipo);
    }

  }
  onInputChange() {
    return null;
}

}
