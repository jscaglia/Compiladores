"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var PisoGarage_1 = require("../../../Infraestructure/Class/PisoGarage");
describe('Test Class PisoGarage: ', function () {
    it("Expect PisoGarage Constructor: ", function () {
        var pisoGarage = new PisoGarage_1.PisoGarage(20, 1);
        chai_1.assert.equal(pisoGarage.CantidadEspacios, 20);
        chai_1.assert.equal(pisoGarage.Espacios.length, 20);
        chai_1.assert.isTrue(Array.isArray(pisoGarage.Espacios));
    });
});
