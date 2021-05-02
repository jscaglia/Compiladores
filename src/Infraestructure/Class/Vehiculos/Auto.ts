import { IVehiculo } from "../../Interfaces/IVehiculo";

export class Auto implements IVehiculo{
    public TipoVehiculo: Evehiculo;
    public Tarifa: number;

    public constructor(){
        this.TipoVehiculo = 1;
        this.Tarifa = 10;
    }
}