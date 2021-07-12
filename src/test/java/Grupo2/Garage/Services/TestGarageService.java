package Grupo2.Garage.Services;

import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Class.Garage.Garage;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import Grupo2.Garage.Infraestructure.Exceptions.GarageException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.STRICT_STUBS)
public class TestGarageService {

    @DisplayName("Garage test Mock GetPrimerLugarLibre ok")
    @Test
    void GetPrimerLugarLibre() throws GarageException {
        GarageService garageService = new GarageService();
        Coordenada result = garageService.GetPrimerLugarLibre();
        assertEquals(result.Espacio, 0);
        assertEquals(result.Piso, 0);
    }

    @DisplayName("Garage test Mock GuardarVehiculoPosicion ok")
    @Test
    void GuardarVehiculoPosicion() throws GarageException {
        GarageService garageService = new GarageService();
        Coordenada result = garageService.GuardarVehiculoPosicion(new Auto("AAA123"), 1,2);
        assertEquals(result.Espacio, 2);
        assertEquals(result.Piso, 1);
    }

    @DisplayName("Garage test Mock GuardarVehiculo ok")
    @Test
    void GuardarVehiculo() throws GarageException {
        GarageService garageService = new GarageService();
        Coordenada result = garageService.GuardarVehiculo(new Auto("AAA124"));
        assertEquals(result.Espacio, 0);
        assertEquals(result.Piso, 0);
    }

    @DisplayName("Garage test Mock QuitarVehiculo ok")
    @Test
    void QuitarVehiculo() throws GarageException {
        GarageService garageService = new GarageService();
        garageService.GuardarVehiculoPosicion(new Auto("AAA123"), 1,2);
        Double result = garageService.QuitarVehiculo(1, 2, "AAA123");
        assertEquals(result, 0);
    }
}
