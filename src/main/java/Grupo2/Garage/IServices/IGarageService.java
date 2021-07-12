package Grupo2.Garage.IServices;

import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Exceptions.GarageException;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;

public interface IGarageService {
    public Coordenada GuardarVehiculoPosicion(IVehiculo vehiculo, Integer piso, Integer posicion) throws GarageException;
    public Coordenada GuardarVehiculo(IVehiculo vehiculo ) throws GarageException;

    public Double QuitarVehiculo(Integer piso, Integer posicion, String patente) throws GarageException;
    public Coordenada GetPrimerLugarLibre() throws GarageException;
}
