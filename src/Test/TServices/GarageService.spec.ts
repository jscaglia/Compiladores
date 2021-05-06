
import { assert } from 'chai';
import { GarageService } from '../../Services/GarageService';

describe('Test Class GarageService: ', () => {

    describe('Test Garage Service constructor: ', () => {
        it("Expect Garage Service Constructor: ", function () {
            var garageService = new GarageService();
            assert.equal(1, 1);
        });
    });

});