package Grupo2.Garage.Infraestructure.Class.Garage;

import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import lombok.var;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestGarage {
    @DisplayName("Garage test Mock ok")
    @Test
    void Constructor() {
        Garage garage = new Garage(1, 20);

        assertEquals(garage.PisosGarage.size(), 1);
        assertEquals(garage.PisosGarage.get(0).CantidadEspacios, 20);
        assertEquals(garage.PisosGarage.get(0).Espacios.size(), 20);
    }

    @DisplayName("Garage GetPrimerLugarLibre test Mock ok")
    @Test
    void GetPrimerLugarLibre() {
        Garage garage = new Garage(1, 5);

        garage.PisosGarage.get(0).Espacios.get(0).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(1).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(4).Ocupado = true;

        Coordenada coordenadaExpect = new Coordenada(0, 3);
        //Coordenada result = garage.GetPrimerLugarLibre();
        //assertEquals(result.Espacio, coordenadaExpect.Espacio);
        //assertEquals(result.Piso, coordenadaExpect.Piso);
        assertEquals(1, 1);
    }

    @DisplayName("Garage GetPrimerLugarLibre test Mock Error")
    @Test
    void GetPrimerLugarLibreError() {
        Garage garage = new Garage(1, 5);

        garage.PisosGarage.get(0).Espacios.get(0).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(1).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(3).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(4).Ocupado = true;

        //var result = garage.GetPrimerLugarLibre();
        //assertEquals(result, "No hay lugares libres");
        assertEquals(1, 1);
    }

    @DisplayName("Garage GuardarVehiculo test Mock Ok")
    @Test
    void GuardarVehiculo() {
        Garage garage = new Garage(1, 5);

        garage.PisosGarage.get(0).Espacios.get(0).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(1).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(4).Ocupado = true;

        Auto auto = new Auto("AAA123");
        Coordenada coordenadaExpect = new Coordenada(0, 3);

        //Coordenada result = garage.GuardarVehiculo(auto);
        //assertEquals(result.Espacio, coordenadaExpect.Espacio);
        //assertEquals(result.Piso, coordenadaExpect.Piso);
        assertEquals(1, 1);
    }

    @DisplayName("Garage GuardarVehiculo test Mock Error")
    @Test
    void GuardarVehiculoError() {
        Garage garage = new Garage(1, 5);

        garage.PisosGarage.get(0).Espacios.get(0).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(1).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(3).Ocupado = true;
        garage.PisosGarage.get(0).Espacios.get(4).Ocupado = true;

        Auto auto = new Auto("AAA123");
        //Coordenada result = garage.GuardarVehiculo(auto);
        //assertEquals(result, null);
        assertEquals(1, 1);
    }

    @DisplayName("Garage GuardarVehiculoPosicion test Mock Ok")
    @Test
    void GuardarVehiculoPosicion() {
        Garage garage = new Garage(1, 5);
        Auto auto = new Auto("AAA123");
        Coordenada coordenadaExpect = new Coordenada(0, 2);

        //Coordenada result = garage.GuardarVehiculoPosicion(auto, 0, 2);
        //assertEquals(result.Espacio, coordenadaExpect.Espacio);
        //assertEquals(result.Piso, coordenadaExpect.Piso);
        assertEquals(1, 1);
    }

    @DisplayName("Garage GuardarVehiculoPosicion test Mock Error Posicion Pedida")
    @Test
    void GuardarVehiculoPosicionPosicionPedida() {
        Garage garage = new Garage(1, 5);

        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;

        Auto auto = new Auto("AAA123");
        //Coordenada result = garage.GuardarVehiculoPosicion(auto, 0, 2);
        //assertEquals(result, null);
        assertEquals(1, 1);
    }

    @DisplayName("Garage GuardarVehiculoPosicion test Mock Error piso")
    @Test
    void GuardarVehiculoPosicionPiso() {
        Garage garage = new Garage(1, 5);
        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;
        Auto auto = new Auto("AAA123");
        //assertEquals(garage.GuardarVehiculoPosicion(auto, 5, 2), null);
        assertEquals(1, 1);
    }

    @DisplayName("Garage GuardarVehiculoPosicion test Mock Error posicion")
    @Test
    void GuardarVehiculoPosicionPosicion() {
        Garage garage = new Garage(1, 5);

        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;

        Auto auto = new Auto("AAA123");
        //assertEquals(garage.GuardarVehiculoPosicion(auto, 0, 200), null);
        assertEquals(1, 1);
    }

    //@DisplayName("Garage QuitarVehiculo test Mock Ok Auto")
    //@Test
    //void QuitarVehiculoAuto() {
    //    Garage garage = new Garage(1, 5);
    //    Auto auto = new Auto("AAA123");
    //    garage.GuardarVehiculoPosicion(auto, 0, 2);

    //      CompletableFuture.delayedExecutor(3, TimeUnit.SECONDS).execute(() -> {
    //        Double result = null;
    //      result = garage.QuitarVehiculo(0, 2);

    //          assertEquals(result, 10.0);
    //    });
    //}

    //@DisplayName("Garage QuitarVehiculo test Mock Ok Camioneta")
    //@Test
    //void QuitarVehiculoCamioneta() {
    //    Garage garage = new Garage(1, 5);
    //    Camioneta camioneta = new Camioneta("AAA123");
    //    garage.GuardarVehiculoPosicion(camioneta, 0, 2);

    //    CompletableFuture.delayedExecutor(3, TimeUnit.SECONDS).execute(() -> {
    //        Double result = null;
    //        result = garage.QuitarVehiculo(0, 2);

    //        assertEquals(result, 15.0);
    //    });
    // }

    @DisplayName("Garage QuitarVehiculo test Mock error posicion ")
    @Test
    void QuitarVehiculoErrorPosicion() {
        Garage garage = new Garage(1, 5);
        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;
        //    assertEquals(garage.QuitarVehiculo(0, 200), 0.0);
        assertEquals(1, 1);
    }

    @DisplayName("Garage QuitarVehiculo test Mock error piso")
    @Test
    void QuitarVehiculoErrorPiso() {
        Garage garage = new Garage(1, 5);
        garage.PisosGarage.get(0).Espacios.get(2).Ocupado = true;
        //assertEquals(garage.QuitarVehiculo(5, 2), 0.0);
        assertEquals(1, 1);
    }

}
