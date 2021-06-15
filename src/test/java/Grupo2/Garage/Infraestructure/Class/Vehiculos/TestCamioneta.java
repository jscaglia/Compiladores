package Grupo2.Garage.Infraestructure.Class.Vehiculos;

import Grupo2.Garage.Infraestructure.Enums.EVehiculo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestCamioneta {
    @DisplayName("Camioneta test Mock ok")
    @Test
    void Constructor()  {
        Camioneta auto = new Camioneta("AAA123");

        assertEquals(auto.TipoVehiculo, EVehiculo.Camioneta);
        assertEquals(auto.Tarifa, 15);
        assertEquals(auto.Patente, "AAA123");
    }
}
