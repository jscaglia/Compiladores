"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Coordenada_1 = require("../../../Infraestructure/Class/Coordenada");
describe('Test Class Coordenada: ', function () {
    it("Expect Coordenada Constructor: ", function () {
        var coordenada = new Coordenada_1.Coordenada(1, 2);
        chai_1.assert.equal(coordenada.Piso, 1);
        chai_1.assert.equal(coordenada.Espacio, 2);
    });
});
