
import { assert } from 'chai';
import { Coordenada } from '../../../Infraestructure/Class/Coordenada';

describe('Test Class Coordenada: ', () => {
    it("Expect Coordenada Constructor: ", function () {
        var coordenada = new Coordenada(1, 2);
        assert.equal(coordenada.Piso, 1);
        assert.equal(coordenada.Espacio, 2);
    });
});