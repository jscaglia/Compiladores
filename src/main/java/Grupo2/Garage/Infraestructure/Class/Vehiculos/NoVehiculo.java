package Grupo2.Garage.Infraestructure.Class.Vehiculos;

import Grupo2.Garage.Infraestructure.Enums.EVehiculo;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;

public class NoVehiculo implements IVehiculo {
    public EVehiculo TipoVehiculo;
    public Double Tarifa;
    public String Patente;

    public NoVehiculo(){
        this.TipoVehiculo = EVehiculo.VACIO;
        this.Tarifa = 0.0;
        this.Patente = "";
    }

    @Override
    public String getTipoVehiculo() {
        return this.TipoVehiculo.name();
    }
}
