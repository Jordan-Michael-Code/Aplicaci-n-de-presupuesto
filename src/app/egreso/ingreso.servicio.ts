import { egreso } from "./egreso.model";

export class egresoServicio{
    egreso: egreso[]= [
        new egreso('Renta departamento', 300),
        new egreso('Ropa', 300)
    ];

    eliminar(egreso: egreso){
        const indice: number= this.egreso.indexOf(egreso);
        console.log('Egreso', indice);
        this.egreso.splice(indice, 1);

    }

}