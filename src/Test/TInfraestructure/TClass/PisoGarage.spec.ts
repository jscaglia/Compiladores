
import { assert } from 'chai';
import { PisoGarage } from '../../../Infraestructure/Class/PisoGarage';

describe('Test Class PisoGarage: ', () => {
    it("Expect PisoGarage Constructor: ", function () {
        var pisoGarage = new PisoGarage(20, 1);
        assert.equal(pisoGarage.CantidadEspacios, 20);
        assert.equal(pisoGarage.Espacios.length, 20);
        assert.isTrue(Array.isArray(pisoGarage.Espacios));
    });
});