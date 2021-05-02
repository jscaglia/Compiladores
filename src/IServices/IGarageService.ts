import { ICoordenada } from "../Infraestructure/Interfaces/ICoordenada";
import { IVehiculo } from "../Infraestructure/Interfaces/IVehiculo";

export interface IGarageService {

    EntrarVehiculo(vehiculo: IVehiculo, piso: number, posicion: number): ICoordenada | null; 
    EntrarVehiculo(vehiculo: IVehiculo): ICoordenada | null; 
    
    QuitarVehiculo(piso: number, posicion: number): number;
    GetPrimerLugarLibre(): ICoordenada | null;
}