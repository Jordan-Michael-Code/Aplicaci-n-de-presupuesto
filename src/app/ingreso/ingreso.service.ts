import { ingreso } from "./ingreso.model";

export class ingresoServicio{
    ingreso: ingreso []= [
        new ingreso ("Salario", 1000), 
        new ingreso ("Venta coche", 1000)];

        eliminar(ingreso: ingreso){
            const indice:number= this.ingreso.indexOf(ingreso);
            this.ingreso.splice(indice, 1);

        }

}


