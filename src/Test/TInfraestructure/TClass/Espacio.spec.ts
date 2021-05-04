
import { assert } from 'chai';
import { Coordenada } from '../../../Infraestructure/Class/Coordenada';
import { Espacio } from '../../../Infraestructure/Class/Espacio';
import { Auto } from '../../../Infraestructure/Class/Vehiculos/Auto';

describe('Test Class Espacio: ', () => {
    it("Expect Espacio Constructor: ", function () {
        var autoExpect = new Auto();
        var coordenadaExpect = new Coordenada(1, 2);
        var espacio = new Espacio(1, 2, true, autoExpect);

        assert.equal(espacio.Coordenada.Piso, coordenadaExpect.Piso);
        assert.equal(espacio.Coordenada.Espacio, coordenadaExpect.Espacio);
        assert.equal(espacio.Ocupado, true);
        assert.equal(espacio.OcupadoPor, autoExpect);
        //TODO: Verificar fecha
    });
});