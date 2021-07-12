package Grupo2.Garage.Infraestructure.Class.Vehiculos;

import Grupo2.Garage.Infraestructure.Enums.EVehiculo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestAuto {
    @DisplayName("Auto test Mock ok")
    @Test
    void Constructor()  {
        Auto auto = new Auto("AAA123");

        assertEquals(auto.TipoVehiculo, EVehiculo.AUTOMOVIL);
        assertEquals(auto.Tarifa, 10);
        assertEquals(auto.Patente, "AAA123");
    }
}
