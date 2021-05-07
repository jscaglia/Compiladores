"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Coordenada_1 = require("../../../Infraestructure/Class/Coordenada");
var Garage_1 = require("../../../Infraestructure/Class/Garage");
var Auto_1 = require("../../../Infraestructure/Class/Vehiculos/Auto");
var Camioneta_1 = require("../../../Infraestructure/Class/Vehiculos/Camioneta");
describe('Test Class Garage: ', function () {
    describe('Test Garage constructor: ', function () {
        it("Expect Garage Constructor: ", function () {
            var garage = new Garage_1.Garage(1, 20);
            chai_1.assert.equal(garage.PisosGarage.length, 1);
            chai_1.assert.isTrue(Array.isArray(garage.PisosGarage));
            chai_1.assert.equal(garage.PisosGarage[0].CantidadEspacios, 20);
            chai_1.assert.equal(garage.PisosGarage[0].Espacios.length, 20);
            chai_1.assert.isTrue(Array.isArray(garage.PisosGarage[0].Espacios));
        });
    });
    describe('Test GetPrimerLugarLibre: ', function () {
        it("Expect Se devuelve el primer lugar libre en el primer piso espacio 3: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[0].Ocupado = true;
            garage.PisosGarage[0].Espacios[1].Ocupado = true;
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            garage.PisosGarage[0].Espacios[4].Ocupado = true;
            var coordenadaExpect = new Coordenada_1.Coordenada(0, 3);
            var result = garage.GetPrimerLugarLibre();
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Espacio, coordenadaExpect.Espacio);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Piso, coordenadaExpect.Piso);
        });
        it("Expect Se devuelve null cuando no existen espacios disponibles: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[0].Ocupado = true;
            garage.PisosGarage[0].Espacios[1].Ocupado = true;
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            garage.PisosGarage[0].Espacios[3].Ocupado = true;
            garage.PisosGarage[0].Espacios[4].Ocupado = true;
            var result = garage.GetPrimerLugarLibre();
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Espacio, null);
        });
    });
    describe('Test GuardarVehiculo: ', function () {
        it("Expect Se devuelve la cordenada del primer lugar libre donde se guarda el auto: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[0].Ocupado = true;
            garage.PisosGarage[0].Espacios[1].Ocupado = true;
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            garage.PisosGarage[0].Espacios[4].Ocupado = true;
            var auto = new Auto_1.Auto();
            var coordenadaExpect = new Coordenada_1.Coordenada(0, 3);
            var result = garage.GuardarVehiculo(auto);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Espacio, coordenadaExpect.Espacio);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Piso, coordenadaExpect.Piso);
        });
        it("Expect Se devuelve null cuando no existen espacios disponibles para guardar el auto: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[0].Ocupado = true;
            garage.PisosGarage[0].Espacios[1].Ocupado = true;
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            garage.PisosGarage[0].Espacios[3].Ocupado = true;
            garage.PisosGarage[0].Espacios[4].Ocupado = true;
            var auto = new Auto_1.Auto();
            var result = garage.GuardarVehiculo(auto);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Espacio, null);
        });
    });
    describe('Test GuardarVehiculoPosicion: ', function () {
        it("Expect Se devuelve la cordenada de donde se guardo el auto: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            var auto = new Auto_1.Auto();
            var coordenadaExpect = new Coordenada_1.Coordenada(0, 2);
            var result = garage.GuardarVehiculoPosicion(auto, 0, 2);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Espacio, coordenadaExpect.Espacio);
            chai_1.assert.equal(result === null || result === void 0 ? void 0 : result.Piso, coordenadaExpect.Piso);
        });
        it("Expect Se devuelve mensaje de error cuando no existe la posicion disponible pedida: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            var auto = new Auto_1.Auto();
            // var err = new Error('Esa posición está ocupada.');   
            var result = garage.GuardarVehiculoPosicion(auto, 0, 2);
            chai_1.expect(result).equal(null);
        });
        it("Expect Se devuelve mensaje de error cuando no existe el piso: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            var auto = new Auto_1.Auto();
            // var err = new Error('Esa posición está ocupada.');            
            chai_1.expect(garage.GuardarVehiculoPosicion(auto, 5, 2)).equal(null);
        });
        it("Expect Se devuelve mensaje de error cuando no existe el posicion: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            var auto = new Auto_1.Auto();
            // var err = new Error('Esa posición está ocupada.');            
            chai_1.expect(garage.GuardarVehiculoPosicion(auto, 0, 200)).equal(null);
        });
    });
    describe('Test QuitarVehiculo: ', function () {
        it("Expect Se devuelve monto a pagar por el auto: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            var auto = new Auto_1.Auto();
            garage.GuardarVehiculoPosicion(auto, 0, 2);
            setTimeout(function () {
                var result = garage.QuitarVehiculo(0, 2);
                chai_1.assert.equal(result, 10);
            }, 5000);
        });
        it("Expect Se devuelve monto a pagar por el camioneta: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            var camioneta = new Camioneta_1.Camioneta();
            garage.GuardarVehiculoPosicion(camioneta, 0, 3);
            setTimeout(function () {
                var result = garage.QuitarVehiculo(0, 3);
                chai_1.assert.equal(result, 15);
            }, 5000);
        });
        it("Expect Se devuelve mensaje de error cuando no existe la posicion disponible pedida: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            var auto = new Auto_1.Auto();
            var err = new Error('Esa posición está ocupada.');
            chai_1.expect(garage.QuitarVehiculo(0, 2)).equal(0);
        });
        it("Expect Se devuelve mensaje de error cuando no existe el piso: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            var auto = new Auto_1.Auto();
            // var err = new Error('Esa posición está ocupada.');            
            chai_1.expect(garage.QuitarVehiculo(5, 2)).equal(0);
        });
        it("Expect Se devuelve mensaje de error cuando no existe el posicion: ", function () {
            var garage = new Garage_1.Garage(1, 5);
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            var auto = new Auto_1.Auto();
            // var err = new Error('Esa posición está ocupada.');            
            chai_1.expect(garage.QuitarVehiculo(0, 200)).equal(0);
        });
    });
});
