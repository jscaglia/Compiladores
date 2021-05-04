
import { assert } from 'chai';
import { Garage } from '../../../Infraestructure/Class/Garage';

describe('Test Class Garage: ', () => {
    it("Expect Garage Constructor: ", function () {
        var garage = new Garage(1, 20);
        assert.equal(garage.PisosGarage.length, 1);
        assert.isTrue(Array.isArray(garage.PisosGarage));

        assert.equal(garage.PisosGarage[0].CantidadEspacios, 20);
        assert.equal(garage.PisosGarage[0].Espacios.length, 20);
        assert.isTrue(Array.isArray(garage.PisosGarage[0].Espacios));
    });
});