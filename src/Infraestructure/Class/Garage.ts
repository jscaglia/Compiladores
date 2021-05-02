import moment from "moment";
import { ICoordenada } from "../Interfaces/ICoordenada";
import { IEspacio } from "../Interfaces/IEspacio";
import { IGarage } from "../Interfaces/IGarage";
import { IPisoGarage } from "../Interfaces/IPisoGarage";
import { IVehiculo } from "../Interfaces/IVehiculo";
import { PisoGarage } from "./PisoGarage";
import { NoVehiculo } from "./Vehiculos/NoVehiculo";

export class Garage implements IGarage {

    public PisosGarage: Array<IPisoGarage>;

    public constructor(piso: number, espacios: number) {
        this.PisosGarage = new Array<PisoGarage>(piso);

        for (var i = 0; i < this.PisosGarage.length; i++) {
            this.PisosGarage[i] = new PisoGarage(espacios, i);
        }
    }


    public GetPrimerLugarLibre(): ICoordenada | null {
        this.PisosGarage.forEach((piso: PisoGarage, i: number) => {
            piso.Espacios.forEach((espacio: IEspacio, j: number) => {
                if (!espacio.Ocupado) {
                    return espacio.Coordenada;
                }
            })
        });

        return null;
    }

    public GuardarVehiculo(vehiculo: IVehiculo): ICoordenada | null {
        let coordenada: ICoordenada | null = null;
        let isBreak: boolean = false;

        this.PisosGarage.forEach((piso: PisoGarage, i: number) => {
            if (!isBreak) {
                piso.Espacios.forEach((espacio: IEspacio, j: number) => {
                    if (!espacio.Ocupado && !isBreak) {
                        espacio.Ocupado = true;
                        espacio.OcupadoPor = vehiculo;
                        coordenada = espacio.Coordenada;
                        isBreak = true;
                    }
                })
            }
        });

        return coordenada;
    }

    public GuardarVehiculoPosicion(vehiculo: IVehiculo, piso: number, posicion: number): ICoordenada | null {
        try {
            if (this.checkPosicion(piso, posicion)) {
                this.PisosGarage[piso].Espacios[posicion].Ocupado = true;
                this.PisosGarage[piso].Espacios[posicion].OcupadoPor = vehiculo;
                this.PisosGarage[piso].Espacios[posicion].Tiempo = new Date();
                return this.PisosGarage[piso].Espacios[posicion].Coordenada;
            }

            return null;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }

    public QuitarVehiculo(piso: number, posicion: number): number {
        try {

            let monto: number = 0;

            if (this.checkPosicionUnPark(piso, posicion)) {
                let fechaFin = new Date().getTime();
                let duracion = fechaFin - this.PisosGarage[piso].Espacios[posicion].Tiempo.getTime();

                monto = Math.floor(duracion/60/60) * this.PisosGarage[piso].Espacios[posicion].OcupadoPor.Tarifa;
                
                this.PisosGarage[piso].Espacios[posicion].Ocupado = false;
                this.PisosGarage[piso].Espacios[posicion].OcupadoPor = new NoVehiculo();
            }

            return monto;
        }
        catch (e) {
            console.log(e);
            return -1;
        }
    }

    private checkPosicionUnPark(piso: number, posicion: number): boolean {
        try {
            if (this.PisosGarage[piso] === null || this.PisosGarage[piso] === undefined) {
                throw new Error('No existe ese piso.');
            }

            if (this.PisosGarage[piso].CantidadEspacios < posicion) {
                throw new Error('No existe esa posición.');
            }

            if (!this.PisosGarage[piso].Espacios[posicion].Ocupado) {
                throw new Error('Este espacio ya está vacio.');
            }

            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    private checkPosicion(piso: number, posicion: number): boolean {
        try {
            if (this.PisosGarage[piso] === null || this.PisosGarage[piso] === undefined) {
                throw new Error('No existe ese piso.');
            }

            if (this.PisosGarage[piso].CantidadEspacios < posicion) {
                throw new Error('No existe esa posición.');
            }

            if (this.PisosGarage[piso].Espacios[posicion].Ocupado) {
                throw new Error('Esa posición está ocupada.');
            }
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}