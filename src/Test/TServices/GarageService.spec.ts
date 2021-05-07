
import { assert } from 'chai';
import { PisoGarage } from '../../Infraestructure/Class/PisoGarage';
import { GarageService } from '../../Services/GarageService';
import { Auto } from '../../Infraestructure/Class/Vehiculos/Auto';
import { IGarageService } from '../../IServices/IGarageService';

describe('Test Class GarageService: ', () => {


    describe('Test Garage Service constructor: ', () => {
        it("Expect Garage Service Constructor: ", function () {
            var garageService = new GarageService(4, 20);
            assert.notEqual(garageService, null);
        });
    });
    describe('Test Garage Service GetPrimerLugarLibre: ', () => {
        it("Expect Garage Service GetPrimerLugarLibre: ", function () {
            var garageService = new GarageService(1, 5);
            var result = garageService.GetPrimerLugarLibre();
            assert.equal(result?.Espacio, 0);
            assert.equal(result?.Piso, 0);
        });
    });

    describe('Test Garage Service EntrarVehiculo: ', () => {
        it("Expect Garage Service EntrarVehiculo guarda vehiculo por posicion: ", function () {
            var garageService = new GarageService(4, 20);
            var result = garageService.EntrarVehiculo(new Auto(), 1, 2);
            assert.equal(result?.Espacio, 2);
            assert.equal(result?.Piso, 1);
        });

        it("Expect Garage Service EntrarVehiculo guarda vehiculo en primer posicion disponible: ", function () {
            var garageService = new GarageService(4, 20);
            var result = garageService.EntrarVehiculo(new Auto());
            assert.equal(result?.Espacio, 0);
            assert.equal(result?.Piso, 0);
        });
    });

    describe('Test Garage Service QuitarVehiculo: ', () => {
        it("Expect Garage Service QuitarVehiculo: ", function () {
            var garageService = new GarageService(4, 20);
            var result = garageService.QuitarVehiculo(1, 2);
            assert.equal(result, 0);
        });

    });
});
