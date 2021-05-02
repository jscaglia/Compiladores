import { ICoordenada } from "../Interfaces/ICoordenada";
import { IEspacio } from "../Interfaces/IEspacio";
import { IVehiculo } from "../Interfaces/IVehiculo";
import { Coordenada } from "./Coordenada";

export class Espacio implements IEspacio {
    public Coordenada: ICoordenada;
    public Ocupado: boolean;
    public OcupadoPor: IVehiculo;
    public Tiempo: Date;

    public constructor(piso: number, espacio: number, ocupado: boolean, OcupadoPor: IVehiculo) {
        this.Coordenada = new Coordenada(piso, espacio);
        this.Ocupado = ocupado;
        this.OcupadoPor = OcupadoPor;
        this.Tiempo = new Date();
    }
}