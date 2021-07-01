package Grupo2.Garage.Controllers;

import Grupo2.Garage.IServices.IGarageService;
import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import Grupo2.Garage.Infraestructure.Exceptions.GarageException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/garage")
public class GarageController {

    @Autowired
    private IGarageService garageService;

    @GetMapping(value = "getPrimerLugarLibre")
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<Coordenada> GetPrimerLugarLibre() throws GarageException {
        try {
            return ResponseEntity.ok(garageService.GetPrimerLugarLibre());
        } catch (GarageException ex) {
            throw ex;
        }
    }

    @PostMapping(value = "guardarVehiculoPosicion")
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<Coordenada> GuardarVehiculoPosicion(Integer piso, Integer posicion) throws GarageException {
        try {
            Auto vehiculo = new Auto("AAA123");
            return ResponseEntity.ok(garageService.GuardarVehiculoPosicion(vehiculo, piso, posicion));
        } catch (GarageException ex) {
            throw ex;
        }
    }

    @PostMapping(value = "guardarVehiculo")
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<Coordenada> GuardarVehiculo() throws GarageException {
        try {
            Auto vehiculo = new Auto("AAA444");
            return ResponseEntity.ok(garageService.GuardarVehiculo(vehiculo));
        } catch (GarageException ex) {
            throw ex;
        }
    }

    @PostMapping(value = "quitarVehiculo")
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<Double> QuitarVehiculo(Integer piso, Integer posicion) throws GarageException {
        try {
            return ResponseEntity.ok(garageService.QuitarVehiculo(piso, posicion));
        } catch (GarageException ex) {
            throw ex;
        }
    }
}
