package Grupo2.Garage.Controllers;

import Grupo2.Garage.IServices.IGarageService;
import Grupo2.Garage.Infraestructure.Class.EntryParams.EntryAutomovil;
import Grupo2.Garage.Infraestructure.Class.Garage.Coordenada;
import Grupo2.Garage.Infraestructure.Class.Garage.Espacio;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.Auto;
import Grupo2.Garage.Infraestructure.Class.Vehiculos.Camioneta;
import Grupo2.Garage.Infraestructure.Enums.EVehiculo;
import Grupo2.Garage.Infraestructure.Exceptions.GarageException;
import Grupo2.Garage.Infraestructure.Interfaces.IVehiculo;
import lombok.var;
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
    public ResponseEntity<Coordenada> GuardarVehiculoPosicion(@RequestBody EntryAutomovil vehiculo) throws GarageException {
        try {
            IVehiculo miVehiculo;
            if(vehiculo.Vehiculo == EVehiculo.AUTOMOVIL){
                miVehiculo = new Auto(vehiculo.Patente);
            } else{
                miVehiculo = new Camioneta(vehiculo.Patente);
            }
            return ResponseEntity.ok(garageService.GuardarVehiculoPosicion(miVehiculo, vehiculo.Coordenada.Piso, vehiculo.Coordenada.Espacio));
        } catch (GarageException ex) {
            throw ex;
        }
    }

    @PostMapping(value = "guardarVehiculo")
    @ResponseStatus(value = HttpStatus.OK)
    public ResponseEntity<Coordenada> GuardarVehiculo(String patente, EVehiculo vehiculo) throws GarageException {
        try {
            IVehiculo miVehiculo;
            if(vehiculo == EVehiculo.AUTOMOVIL){
                miVehiculo = new Auto(patente);
            } else{
                miVehiculo = new Camioneta(patente);
            }

            return ResponseEntity.ok(garageService.GuardarVehiculo(miVehiculo));
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
