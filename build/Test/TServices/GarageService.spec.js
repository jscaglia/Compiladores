"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var GarageService_1 = require("../../Services/GarageService");
var Auto_1 = require("../../Infraestructure/Class/Vehiculos/Auto");
describe('Test Class GarageService: ', function () {
    describe('Test Garage Service constructor: ', function () {
        it("Expect Garage Service Constructor: ", function () {
            var garageService = new GarageService_1.GarageService(4, 20);
            chai_1.assert.notEqual(garageService, null);
        });
    });
    describe('Test Garage Service GetPrimerLugarLibre: ', function () {
        it("Expect Garage Service GetPrimerLugarLibre: ", function () {
            var garageService = new GarageService_1.GarageService(1, 5);
            var result = garageService.GetPrimerLugarLibre();
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Espacio, 0);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Piso, 0);
        });
    });
    describe('Test Garage Service EntrarVehiculo: ', function () {
        it("Expect Garage Service EntrarVehiculo guarda vehiculo por posicion: ", function () {
            var garageService = new GarageService_1.GarageService(4, 20);
            var result = garageService.EntrarVehiculo(new Auto_1.Auto(), 1, 2);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Espacio, 2);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Piso, 1);
        });
        it("Expect Garage Service EntrarVehiculo guarda vehiculo en primer posicion disponible: ", function () {
            var garageService = new GarageService_1.GarageService(4, 20);
            var result = garageService.EntrarVehiculo(new Auto_1.Auto());
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Espacio, 0);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Piso, 0);
        });
    });
    describe('Test Garage Service QuitarVehiculo: ', function () {
        it("Expect Garage Service QuitarVehiculo: ", function () {
            var garageService = new GarageService_1.GarageService(4, 20);
            var result = garageService.QuitarVehiculo(1, 2);
            chai_1.assert.equal(result, 0);
        });
    });
});
