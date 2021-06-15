package Grupo2.Garage.Infraestructure.Class.Garage;

import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;

import java.util.Date;

public class Espacio {
    public Coordenada Coordenada;
    public boolean Ocupado;
    public IVehiculo OcupadoPor;
    public Date Tiempo;

    public Espacio(Integer piso, Integer espacio, boolean ocupado, IVehiculo OcupadoPor){
        this.Coordenada = new Coordenada(piso, espacio);
        this.Ocupado = ocupado;
        this.OcupadoPor = OcupadoPor;
        this.Tiempo = new Date();
    }
}
