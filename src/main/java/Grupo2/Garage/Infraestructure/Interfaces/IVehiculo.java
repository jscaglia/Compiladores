package Grupo2.Garage.Infraestructure.Interfaces;

import Grupo2.Garage.Infraestructure.Enums.EVehiculo;

public interface IVehiculo {
    public EVehiculo TipoVehiculo = null;
    public Double Tarifa = 0.0;
    public String Patente = "";

    public String getTipoVehiculo();
}
