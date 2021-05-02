"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Infraestructure/Class/Vehiculos/Auto");
var GarageService_1 = require("./Services/GarageService");
var garageService = new GarageService_1.GarageService();
var vehiculo = new Auto_1.Auto();
var park = garageService.EntrarVehiculo(vehiculo, 1, 2);
console.log(park);
setTimeout(function () {
    var unPark = garageService.QuitarVehiculo(1, 2);
    console.log("Monto a pagar: $" + unPark.toString());
}, 5000);
