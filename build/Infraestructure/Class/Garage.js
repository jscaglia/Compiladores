"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garage = void 0;
var PisoGarage_1 = require("./PisoGarage");
var NoVehiculo_1 = require("./Vehiculos/NoVehiculo");
var Garage = /** @class */ (function () {
    function Garage(piso, espacios) {
        this.PisosGarage = new Array(piso);
        for (var i = 0; i < this.PisosGarage.length; i++) {
            this.PisosGarage[i] = new PisoGarage_1.PisoGarage(espacios, i);
        }
    }
    Garage.prototype.GetPrimerLugarLibre = function () {
        this.PisosGarage.forEach(function (piso, i) {
            piso.Espacios.forEach(function (espacio, j) {
                if (!espacio.Ocupado) {
                    return espacio.Coordenada;
                }
            });
        });
        return null;
    };
    Garage.prototype.GuardarVehiculo = function (vehiculo) {
        var coordenada = null;
        var isBreak = false;
        this.PisosGarage.forEach(function (piso, i) {
            if (!isBreak) {
                piso.Espacios.forEach(function (espacio, j) {
                    if (!espacio.Ocupado && !isBreak) {
                        espacio.Ocupado = true;
                        espacio.OcupadoPor = vehiculo;
                        coordenada = espacio.Coordenada;
                        isBreak = true;
                    }
                });
            }
        });
        return coordenada;
    };
    Garage.prototype.GuardarVehiculoPosicion = function (vehiculo, piso, posicion) {
        try {
            if (this.checkPosicion(piso, posicion)) {
                this.PisosGarage[piso].Espacios[posicion].Ocupado = true;
                this.PisosGarage[piso].Espacios[posicion].OcupadoPor = vehiculo;
                this.PisosGarage[piso].Espacios[posicion].Tiempo = new Date();
                return this.PisosGarage[piso].Espacios[posicion].Coordenada;
            }
            return null;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    };
    Garage.prototype.QuitarVehiculo = function (piso, posicion) {
        try {
            var monto = 0;
            if (this.checkPosicionUnPark(piso, posicion)) {
                var fechaFin = new Date().getTime();
                var duracion = fechaFin - this.PisosGarage[piso].Espacios[posicion].Tiempo.getTime();
                monto = Math.floor(duracion / 60 / 60) * this.PisosGarage[piso].Espacios[posicion].OcupadoPor.Tarifa;
                this.PisosGarage[piso].Espacios[posicion].Ocupado = false;
                this.PisosGarage[piso].Espacios[posicion].OcupadoPor = new NoVehiculo_1.NoVehiculo();
            }
            return monto;
        }
        catch (e) {
            console.log(e);
            return -1;
        }
    };
    Garage.prototype.checkPosicionUnPark = function (piso, posicion) {
        try {
            if (this.PisosGarage[piso] === null || this.PisosGarage[piso] === undefined) {
                throw new Error('No existe ese piso.');
            }
            if (this.PisosGarage[piso].CantidadEspacios < posicion) {
                throw new Error('No existe esa posición.');
            }
            if (!this.PisosGarage[piso].Espacios[posicion].Ocupado) {
                throw new Error('Este espacio ya está vacio.');
            }
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    };
    Garage.prototype.checkPosicion = function (piso, posicion) {
        try {
            if (this.PisosGarage[piso] === null || this.PisosGarage[piso] === undefined) {
                throw new Error('No existe ese piso.');
            }
            if (this.PisosGarage[piso].CantidadEspacios < posicion) {
                throw new Error('No existe esa posición.');
            }
            if (this.PisosGarage[piso].Espacios[posicion].Ocupado) {
                throw new Error('Esa posición está ocupada.');
            }
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    };
    return Garage;
}());
exports.Garage = Garage;
