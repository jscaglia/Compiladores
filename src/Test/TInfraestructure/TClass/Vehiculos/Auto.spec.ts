
import { assert } from 'chai';
import { Auto } from '../../../../Infraestructure/Class/Vehiculos/Auto';

describe('Test Class Auto: ', () => {
    it("Expect Auto Constructor Con TipoVehiculo 1 y Tarifa 10: ", function () {
        var auto = new Auto();
        assert.equal(auto.TipoVehiculo, 1);
        assert.equal(auto.Tarifa, 10);
    });
});