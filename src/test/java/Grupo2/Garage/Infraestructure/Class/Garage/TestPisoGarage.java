package Grupo2.Garage.Infraestructure.Class.Garage;

import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestPisoGarage {
    @DisplayName("PisoGarage test Mock ok")
    @Test
    void Constructor()  {
        PisoGarage pisoGarage = new PisoGarage(20,5);

        assertEquals(pisoGarage.CantidadEspacios, 20);
        assertEquals(pisoGarage.Espacios.size(), 20);

    }
}
