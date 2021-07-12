package Grupo2.Garage.Infraestructure.Class.Vehiculos;

import Grupo2.Garage.Infraestructure.Enums.EVehiculo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestNoVehiculo {
    @DisplayName("NoVehiculo test Mock ok")
    @Test
    void Constructor()  {
        NoVehiculo noVehiculo = new NoVehiculo();

        assertEquals(noVehiculo.TipoVehiculo, EVehiculo.VACIO);
        assertEquals(noVehiculo.Tarifa, 0);
        assertEquals(noVehiculo.Patente, "");
    }
}
