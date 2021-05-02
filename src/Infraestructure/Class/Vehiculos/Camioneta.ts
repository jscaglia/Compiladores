import { IVehiculo } from "../../Interfaces/IVehiculo";

export class Camioneta implements IVehiculo{
    public TipoVehiculo: Evehiculo;
    public Tarifa: number;

    public constructor(){
        this.TipoVehiculo = 2;
        this.Tarifa = 15;
    }
}