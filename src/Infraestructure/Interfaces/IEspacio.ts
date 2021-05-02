import { ICoordenada } from "./ICoordenada";
import { IVehiculo } from "./IVehiculo";

export interface IEspacio{
    Coordenada: ICoordenada;
    Ocupado: boolean;
    OcupadoPor: IVehiculo;
    Tiempo: Date;
}