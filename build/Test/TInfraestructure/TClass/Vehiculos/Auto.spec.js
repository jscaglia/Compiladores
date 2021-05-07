"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Auto_1 = require("../../../../Infraestructure/Class/Vehiculos/Auto");
describe('Test Class Auto: ', function () {
    it("Expect Auto Constructor Con TipoVehiculo 1 y Tarifa 10: ", function () {
        var auto = new Auto_1.Auto();
        chai_1.assert.equal(auto.TipoVehiculo, 1);
        chai_1.assert.equal(auto.Tarifa, 10);
    });
});
