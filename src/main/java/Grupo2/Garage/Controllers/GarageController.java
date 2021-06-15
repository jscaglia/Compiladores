package Grupo2.Garage.Controllers;

import Grupo2.Garage.IServices.IGarageService;
import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
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
    public ResponseEntity<Coordenada> GetPrimerLugarLibre(){
        return ResponseEntity.ok(garageService.GetPrimerLugarLibre());
    }

    @PostMapping(value = "guardarVehiculoPosicion")
    public ResponseEntity<Coordenada> GuardarVehiculoPosicion(Integer piso, Integer posicion){
        Auto vehiculo = new Auto("AAA123");
        return ResponseEntity.ok(garageService.GuardarVehiculoPosicion(vehiculo, piso, posicion));
    }

    @PostMapping(value = "guardarVehiculo")
    public ResponseEntity<Coordenada> GuardarVehiculo(){
        Auto vehiculo = new Auto("AAA444");
        return ResponseEntity.ok(garageService.GuardarVehiculo(vehiculo));
    }

    @PostMapping(value = "quitarVehiculo")
    public ResponseEntity<Double> QuitarVehiculo(Integer piso, Integer posicion){
        return ResponseEntity.ok(garageService.QuitarVehiculo(piso, posicion));
    }
}
