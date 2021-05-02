import { Auto } from "./Infraestructure/Class/Vehiculos/Auto";
import { IVehiculo } from "./Infraestructure/Interfaces/IVehiculo";
import { GarageService } from "./Services/GarageService";

let garageService = new GarageService();

let vehiculo: IVehiculo = new Auto();

let park = garageService.EntrarVehiculo(vehiculo, 1, 2);
console.log(park);

setTimeout(() => {
    let unPark = garageService.QuitarVehiculo(1, 2);
    console.log("Monto a pagar: $" + unPark.toString()); 
}, 5000);

