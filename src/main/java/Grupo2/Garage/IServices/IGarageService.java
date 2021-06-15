package Grupo2.Garage.IServices;

import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;

public interface IGarageService {
    public Coordenada GuardarVehiculoPosicion(IVehiculo vehiculo, Integer piso, Integer posicion);
    public Coordenada GuardarVehiculo(IVehiculo vehiculo );

    public Double QuitarVehiculo(Integer piso, Integer posicion);
    public Coordenada GetPrimerLugarLibre();
}
