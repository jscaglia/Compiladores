import { ICoordenada } from "./ICoordenada";
import { IPisoGarage } from "./IPisoGarage";
import { IVehiculo } from "./IVehiculo";

export interface IGarage{
    PisosGarage: Array<IPisoGarage>;
    GuardarVehiculoPosicion(vehiculo: IVehiculo, piso?: number, posicion?: number): ICoordenada | null;
    GuardarVehiculo(vehiculo: IVehiculo): ICoordenada | null;
    QuitarVehiculo(piso: number, posicion: number): number;

    GetPrimerLugarLibre(): ICoordenada | null;
}