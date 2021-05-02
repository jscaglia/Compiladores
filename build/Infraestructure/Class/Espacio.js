"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espacio = void 0;
var Coordenada_1 = require("./Coordenada");
var Espacio = /** @class */ (function () {
    function Espacio(piso, espacio, ocupado, OcupadoPor) {
        this.Coordenada = new Coordenada_1.Coordenada(piso, espacio);
        this.Ocupado = ocupado;
        this.OcupadoPor = OcupadoPor;
        this.Tiempo = new Date();
    }
    return Espacio;
}());
exports.Espacio = Espacio;
