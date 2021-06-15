package Grupo2.Garage.Infraestructure.Class.Vehiculos;

import Grupo2.Garage.Infraestructure.Enums.EVehiculo;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;

public class Camioneta implements IVehiculo {
    public EVehiculo TipoVehiculo;
    public Double Tarifa;
    public String Patente;

    public Camioneta(String patente){
        this.TipoVehiculo = EVehiculo.Camioneta;
        this.Tarifa = 15.0;
        this.Patente = patente;
    }
}
