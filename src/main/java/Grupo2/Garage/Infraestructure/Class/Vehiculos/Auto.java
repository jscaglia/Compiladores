package Grupo2.Garage.Infraestructure.Class.Vehiculos;

import Grupo2.Garage.Infraestructure.Enums.EVehiculo;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;

public class Auto implements IVehiculo {
    public EVehiculo TipoVehiculo;
    public Double Tarifa;
    public String Patente;

    public Auto(String patente){
        this.TipoVehiculo = EVehiculo.Automovil;
        this.Tarifa = 10.0;
        this.Patente = patente;
    }
}
