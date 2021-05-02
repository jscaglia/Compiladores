"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PisoGarage = void 0;
var Espacio_1 = require("./Espacio");
var NoVehiculo_1 = require("./Vehiculos/NoVehiculo");
var PisoGarage = /** @class */ (function () {
    function PisoGarage(cantidadEspacios, piso) {
        this.CantidadEspacios = cantidadEspacios;
        this.Espacios = new Array(cantidadEspacios);
        for (var i = 0; i < this.Espacios.length; i++) {
            this.Espacios[i] = new Espacio_1.Espacio(piso, i, false, new NoVehiculo_1.NoVehiculo());
        }
    }
    return PisoGarage;
}());
exports.PisoGarage = PisoGarage;
