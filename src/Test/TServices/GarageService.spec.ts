
import { assert } from 'chai';
import { PisoGarage } from '../../Infraestructure/Class/PisoGarage';
import { GarageService } from '../../Services/GarageService';
import { Auto } from '../../Infraestructure/Class/Vehiculos/Auto';

describe('Test Class GarageService: ', () => {


    describe('Test Garage Service constructor: ', () => {
        it("Expect Garage Service Constructor: ", function () {
            var garageService = new GarageService();
            assert.equal(1, 1);
        });


    });
    describe('Test Garage Service GetPrimerLugarLibre: ', () => {
        it("Expect Garage Service GetPrimerLugarLibre: ", function () {
            var garageService = new GarageService();
            var result = garageService.GetPrimerLugarLibre();
            assert.equal(result?.Espacio,0);
            assert.equal(result?.Piso,0);
            console.log("primer lugar libre");
        });


    describe('Test Garage Service EntrarVehiculo: ', () => {
        it("Expect Garage Service EntrarVehiculo: ", function () {
            var garageService = new GarageService();
            var result = garageService.EntrarVehiculo(new Auto,1,2);
            assert.equal(result?.Espacio, 2);
            assert.equal(result?.Piso, 1);
            console.log("Ingreso nuevo vehiculo");
        });
    });

    describe('Test Garage Service QuitarVehiculo: ', () => {
        it("Expect Garage Service QuitarVehiculo: ", function () {
            var garageService = new GarageService();
            var result = garageService.QuitarVehiculo(1,2);
            assert.equal(result, 0);
            console.log("vehiculo quitado");
        });

    });
    });
});
