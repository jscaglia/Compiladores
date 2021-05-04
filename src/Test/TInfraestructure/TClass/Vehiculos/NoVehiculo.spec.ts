
import { assert } from 'chai';
import { NoVehiculo } from '../../../../Infraestructure/Class/Vehiculos/NoVehiculo';

describe('Test Class NoVehiculo: ', () => {
    it("Expect NoVehiculo Constructor Con TipoVehiculo -1 y Tarifa 0: ", function () {
        var noVehiculo = new NoVehiculo();
        assert.equal(noVehiculo.TipoVehiculo, -1);
        assert.equal(noVehiculo.Tarifa, 0);
    });
});