import { ICoordenada } from "../Interfaces/ICoordenada";

export class Coordenada implements ICoordenada {
    public Piso: number;
    public Espacio: number;

    public constructor(piso: number, espacio: number) {
        this.Piso = piso;
        this.Espacio = espacio;
    }
}