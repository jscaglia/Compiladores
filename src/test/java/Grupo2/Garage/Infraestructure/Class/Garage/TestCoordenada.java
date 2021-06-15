package Grupo2.Garage.Infraestructure.Class.Garage;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestCoordenada {
    @DisplayName("Coordenada test Mock ok")
    @Test
    void Constructor()  {
        Coordenada coordenada = new Coordenada(1,2);

        assertEquals(coordenada.Piso, 1);
        assertEquals(coordenada.Espacio, 2);
    }
}
