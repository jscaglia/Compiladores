import { EVehiculo } from "../../Enums/EVehiculo";
import { IVehiculo } from "../../Interfaces/IVehiculo";

export class Auto implements IVehiculo {
    public TipoVehiculo: EVehiculo;
    public Tarifa: number;

    public constructor() {
        this.TipoVehiculo = 1;
        this.Tarifa = 10;
    }
}