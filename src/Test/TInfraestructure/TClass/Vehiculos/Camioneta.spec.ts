
import { assert } from 'chai';
import { Camioneta } from '../../../../Infraestructure/Class/Vehiculos/Camioneta';

describe('Test Class Camioneta: ', () => {
    it("Expect Camioneta Constructor Con TipoVehiculo 2 y Tarifa 15: ", function () {
        var camioneta = new Camioneta();
        assert.equal(camioneta.TipoVehiculo, 2);
        assert.equal(camioneta.Tarifa, 15);
    });
});