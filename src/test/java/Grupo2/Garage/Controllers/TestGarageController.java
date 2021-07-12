package Grupo2.Garage.Controllers;

import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import Grupo2.Garage.Infraestructure.Exceptions.GarageException;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;
import Grupo2.Garage.Services.GarageService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebAppConfiguration()
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class TestGarageController {
    @Mock
    private GarageService garageService;

    @InjectMocks
    private TestGarageController testGarageController;

    private MockMvc mockMvc;

    @BeforeAll
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders
                .standaloneSetup(this.testGarageController)
                .build();
    }

    @Test
    public void GetPrimerLugarLibre() throws GarageException {
        final Coordenada coordernadaResult = new Coordenada(0, 0);
        when(this.garageService.GetPrimerLugarLibre()).thenReturn(coordernadaResult);

        Coordenada result = this.garageService.GetPrimerLugarLibre();
        assertEquals(coordernadaResult, result);
    }

    @Test
    public void GuardarVehiculoPosicion() throws GarageException {
        final IVehiculo auto = new Auto("AAA123");
        final Coordenada coordernadaPosicion = new Coordenada(5, 8);
        when(this.garageService.GuardarVehiculoPosicion(auto, 5, 8)).thenReturn(coordernadaPosicion);

        Coordenada result = this.garageService.GuardarVehiculoPosicion(auto, 5, 8);
        assertEquals(coordernadaPosicion, result);
    }

    @Test
    public void GuardarVehiculo() throws GarageException {
        final IVehiculo auto = new Auto("AAA123");
        final Coordenada coordernadaResult = new Coordenada(5, 8);
        when(this.garageService.GuardarVehiculo(auto)).thenReturn(coordernadaResult);

        Coordenada result = this.garageService.GuardarVehiculo(auto);
        assertEquals(coordernadaResult, result);
    }

    @Test
    public void QuitarVehiculo() throws GarageException {
        when(this.garageService.QuitarVehiculo(5, 8, "AAA123")).thenReturn(50.5);

        Double result = this.garageService.QuitarVehiculo(5, 8, "AAA123");
        assertEquals(50.5, result);
    }
}
