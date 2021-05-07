"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var NoVehiculo_1 = require("../../../../Infraestructure/Class/Vehiculos/NoVehiculo");
describe('Test Class NoVehiculo: ', function () {
    it("Expect NoVehiculo Constructor Con TipoVehiculo -1 y Tarifa 0: ", function () {
        var noVehiculo = new NoVehiculo_1.NoVehiculo();
        chai_1.assert.equal(noVehiculo.TipoVehiculo, -1);
        chai_1.assert.equal(noVehiculo.Tarifa, 0);
    });
});
