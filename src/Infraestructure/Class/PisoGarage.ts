import { IEspacio } from "../Interfaces/IEspacio";
import { IPisoGarage } from "../Interfaces/IPisoGarage";
import { Espacio } from "./Espacio";
import { NoVehiculo } from "./Vehiculos/NoVehiculo";

export class PisoGarage implements IPisoGarage{
    public CantidadEspacios: number;
    public Espacios: Array<IEspacio>;

    public constructor(cantidadEspacios: number, piso: number){
        this.CantidadEspacios = cantidadEspacios;
        this.Espacios = new Array<IEspacio>(cantidadEspacios);

        for (var i = 0; i < this.Espacios.length; i++) {
            this.Espacios[i] = new Espacio(piso, i, false, new NoVehiculo());
        }
    }
}