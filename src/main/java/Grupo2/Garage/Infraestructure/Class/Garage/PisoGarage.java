package Grupo2.Garage.Infraestructure.Class.Garage;

import Grupo2.Garage.Infraestructure.Class.Vehiculos.NoVehiculo;
import lombok.var;

import java.util.ArrayList;

public class PisoGarage {
    public Integer CantidadEspacios;
    public ArrayList<Espacio> Espacios;

    public PisoGarage(Integer cantidadEspacios, Integer piso){
        this.CantidadEspacios = cantidadEspacios;
        this.Espacios = new ArrayList<Espacio>(cantidadEspacios);

        for (var i = 0; i < cantidadEspacios; i++) {
            this.Espacios.add(i, new Espacio(piso, i, false, new NoVehiculo()));
        }
    }
}
