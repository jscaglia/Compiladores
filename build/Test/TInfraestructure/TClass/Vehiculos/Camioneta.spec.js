"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Camioneta_1 = require("../../../../Infraestructure/Class/Vehiculos/Camioneta");
describe('Test Class Camioneta: ', function () {
    it("Expect Camioneta Constructor Con TipoVehiculo 2 y Tarifa 15: ", function () {
        var camioneta = new Camioneta_1.Camioneta();
        chai_1.assert.equal(camioneta.TipoVehiculo, 2);
        chai_1.assert.equal(camioneta.Tarifa, 15);
    });
});
