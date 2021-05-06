
import { assert, expect } from 'chai';
import { Coordenada } from '../../../Infraestructure/Class/Coordenada';
import { Garage } from '../../../Infraestructure/Class/Garage';
import { Auto } from '../../../Infraestructure/Class/Vehiculos/Auto';
import { Camioneta } from '../../../Infraestructure/Class/Vehiculos/Camioneta';

describe('Test Class Garage: ', () => {
    describe('Test Garage constructor: ', () => {
        it("Expect Garage Constructor: ", function () {
            var garage = new Garage(1, 20);
            assert.equal(garage.PisosGarage.length, 1);
            assert.isTrue(Array.isArray(garage.PisosGarage));

            assert.equal(garage.PisosGarage[0].CantidadEspacios, 20);
            assert.equal(garage.PisosGarage[0].Espacios.length, 20);
            assert.isTrue(Array.isArray(garage.PisosGarage[0].Espacios));
        });
    });

    describe('Test GetPrimerLugarLibre: ', () => {
        it("Expect Se devuelve el primer lugar libre en el primer piso espacio 3: ", function () {
            var garage = new Garage(1, 5);

            garage.PisosGarage[0].Espacios[0].Ocupado = true;
            garage.PisosGarage[0].Espacios[1].Ocupado = true;
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            garage.PisosGarage[0].Espacios[4].Ocupado = true;

            var coordenadaExpect = new Coordenada(0, 3);
            var result = garage.GetPrimerLugarLibre();
            assert.equal(result?.Espacio, coordenadaExpect.Espacio);
            assert.equal(result?.Piso, coordenadaExpect.Piso);
        });

        it("Expect Se devuelve null cuando no existen espacios disponibles: ", function () {
            var garage = new Garage(1, 5);

            garage.PisosGarage[0].Espacios[0].Ocupado = true;
            garage.PisosGarage[0].Espacios[1].Ocupado = true;
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            garage.PisosGarage[0].Espacios[3].Ocupado = true;
            garage.PisosGarage[0].Espacios[4].Ocupado = true;

            var result = garage.GetPrimerLugarLibre();
            assert.equal(result?.Espacio, null);
        });
    });

    describe('Test GuardarVehiculo: ', () => {
        it("Expect Se devuelve la cordenada del primer lugar libre donde se guarda el auto: ", function () {
            var garage = new Garage(1, 5);

            garage.PisosGarage[0].Espacios[0].Ocupado = true;
            garage.PisosGarage[0].Espacios[1].Ocupado = true;
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            garage.PisosGarage[0].Espacios[4].Ocupado = true;

            var auto = new Auto();
            var coordenadaExpect = new Coordenada(0, 3);

            var result = garage.GuardarVehiculo(auto);

            assert.equal(result?.Espacio, coordenadaExpect.Espacio);
            assert.equal(result?.Piso, coordenadaExpect.Piso);
        });

        it("Expect Se devuelve null cuando no existen espacios disponibles para guardar el auto: ", function () {
            var garage = new Garage(1, 5);

            garage.PisosGarage[0].Espacios[0].Ocupado = true;
            garage.PisosGarage[0].Espacios[1].Ocupado = true;
            garage.PisosGarage[0].Espacios[2].Ocupado = true;
            garage.PisosGarage[0].Espacios[3].Ocupado = true;
            garage.PisosGarage[0].Espacios[4].Ocupado = true;

            var auto = new Auto();
            var result = garage.GuardarVehiculo(auto);

            assert.equal(result?.Espacio, null);
        });
    });

    describe('Test GuardarVehiculoPosicion: ', () => {
        it("Expect Se devuelve la cordenada de donde se guardo el auto: ", function () {
            var garage = new Garage(1, 5);
            var auto = new Auto();
            var coordenadaExpect = new Coordenada(0, 2);

            var result = garage.GuardarVehiculoPosicion(auto, 0, 2);

            assert.equal(result?.Espacio, coordenadaExpect.Espacio);
            assert.equal(result?.Piso, coordenadaExpect.Piso);
        });

        // it("Expect Se devuelve mensaje de error cuando no existe la posicion disponible pedida: ", function () {
        //     var garage = new Garage(1, 5);
        //     garage.PisosGarage[0].Espacios[2].Ocupado = true;

        //     var auto = new Auto();
        //     var err = new Error('Esa posición está ocupada.');
        //     expect(garage.GuardarVehiculoPosicion.bind(garage, auto, 0, 2)).to.throw('Esa posición está ocupada.');
        // });
    });

    describe('Test QuitarVehiculo: ', () => {
        it("Expect Se devuelve monto a pagar por el auto: ", function () {
            var garage = new Garage(1, 5);
            var auto = new Auto();
            garage.GuardarVehiculoPosicion(auto, 0, 2);

            setTimeout(() => {
                var result = garage.QuitarVehiculo(0, 2);
                assert.equal(result, 10);
            }, 5000);
        });

        it("Expect Se devuelve monto a pagar por el camioneta: ", function () {
            var garage = new Garage(1, 5);
            var camioneta = new Camioneta();
            garage.GuardarVehiculoPosicion(camioneta, 0, 3);

            setTimeout(() => {
                var result = garage.QuitarVehiculo(0, 3);
                assert.equal(result, 15);
            }, 5000);
        });

        // it("Expect Se devuelve mensaje de error cuando no existe la posicion disponible pedida: ", function () {
        //     var garage = new Garage(1, 5);
        //     garage.PisosGarage[0].Espacios[2].Ocupado = true;

        //     var auto = new Auto();
        //     var err = new Error('Esa posición está ocupada.');
        //     expect(garage.GuardarVehiculoPosicion.bind(garage, auto, 0, 2)).to.throw('Esa posición está ocupada.');
        // });
    });
});