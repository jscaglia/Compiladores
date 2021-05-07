"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Coordenada_1 = require("../../../Infraestructure/Class/Coordenada");
var Espacio_1 = require("../../../Infraestructure/Class/Espacio");
var Auto_1 = require("../../../Infraestructure/Class/Vehiculos/Auto");
describe('Test Class Espacio: ', function () {
    it("Expect Espacio Constructor: ", function () {
        var autoExpect = new Auto_1.Auto();
        var coordenadaExpect = new Coordenada_1.Coordenada(1, 2);
        var espacio = new Espacio_1.Espacio(1, 2, true, autoExpect);
        chai_1.assert.equal(espacio.Coordenada.Piso, coordenadaExpect.Piso);
        chai_1.assert.equal(espacio.Coordenada.Espacio, coordenadaExpect.Espacio);
        chai_1.assert.equal(espacio.Ocupado, true);
        chai_1.assert.equal(espacio.OcupadoPor, autoExpect);
        //TODO: Verificar fecha
    });
});
