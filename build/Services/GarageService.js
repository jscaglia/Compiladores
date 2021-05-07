"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarageService = void 0;
var Garage_1 = require("../Infraestructure/Class/Garage");
var GarageService = /** @class */ (function () {
    function GarageService(piso, posiciones) {
        if (!this.Garage) {
            this.Garage = new Garage_1.Garage(piso, posiciones);
        }
    }
    GarageService.prototype.GetPrimerLugarLibre = function () {
        var _a;
        if (this.Garage) {
            return (_a = this.Garage) === null || _a === void 0 ? void 0 : _a.GetPrimerLugarLibre();
        }
        return null;
    };
    GarageService.prototype.EntrarVehiculo = function (vehiculo, piso, posicion) {
        var _a, _b;
        try {
            if (this.Garage) {
                if (piso && posicion) {
                    return (_a = this.Garage) === null || _a === void 0 ? void 0 : _a.GuardarVehiculoPosicion(vehiculo, piso, posicion);
                }
                else {
                    return (_b = this.Garage) === null || _b === void 0 ? void 0 : _b.GuardarVehiculo(vehiculo);
                }
            }
            return null;
        }
        catch (e) {
            return this.GetPrimerLugarLibre();
        }
    };
    GarageService.prototype.QuitarVehiculo = function (piso, posicion) {
        var _a;
        try {
            if (this.Garage) {
                return (_a = this.Garage) === null || _a === void 0 ? void 0 : _a.QuitarVehiculo(piso, posicion);
            }
            return 0;
        }
        catch (e) {
            return 0;
        }
    };
    return GarageService;
}());
exports.GarageService = GarageService;
