package Grupo2.Garage.Infraestructure.Class.Garage;

import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestEspacio {
    @DisplayName("Espacio test Mock ok")
    @Test
    void Constructor()  {
        Auto autoExpect = new Auto("AAA123");
        Coordenada coordenadaExpect = new Coordenada(1, 2);
        Espacio espacio = new Espacio(1,2, true, autoExpect);

        assertEquals(espacio.Coordenada.Piso, coordenadaExpect.Piso);
        assertEquals(espacio.Coordenada.Espacio, coordenadaExpect.Espacio);
        assertEquals(espacio.Ocupado, true);
        assertEquals(espacio.OcupadoPor, autoExpect);
    }
}
