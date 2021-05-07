import { Garage } from "../Infraestructure/Class/Garage";
import { ICoordenada } from "../Infraestructure/Interfaces/ICoordenada";
import { IGarage } from "../Infraestructure/Interfaces/IGarage";
import { IVehiculo } from "../Infraestructure/Interfaces/IVehiculo";
import { IGarageService } from "../IServices/IGarageService";

export class GarageService implements IGarageService {
    private Garage: IGarage | undefined;

    public constructor(piso: number, posiciones: number) {
        if (!this.Garage) {
            this.Garage = new Garage(piso, posiciones);
        }
    }
    
    public GetPrimerLugarLibre(): ICoordenada | null {
        if (this.Garage) {
            return this.Garage?.GetPrimerLugarLibre();
        }

        return null;
    }

    public EntrarVehiculo(vehiculo: IVehiculo, piso?: number, posicion?: number): ICoordenada | null {
        try {
            if (this.Garage) {
                if (piso && posicion) {
                    return this.Garage?.GuardarVehiculoPosicion(vehiculo, piso, posicion);
                } else {
                    return this.Garage?.GuardarVehiculo(vehiculo);
                }
            }

            return null;
        }
        catch (e) {
            return this.GetPrimerLugarLibre();
        }
    }

    public QuitarVehiculo(piso: number, posicion: number): number {
        try {
            if (this.Garage) {
                return this.Garage?.QuitarVehiculo(piso, posicion);
            }
            return 0;
        }
        catch (e) {
            return 0;
        }
    }
}