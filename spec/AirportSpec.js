'use strict';

describe('Airport', function(){
    let airport;
    let plane;
    beforeEach(function(){
        airport = new Airport();
        plane = jasmine.createSpy('plane', ['land']);
    });

    it('Has no planes by default', function(){
        expect(airport.planes()).toEqual([]);
    });

    it('Can clear planes for landing', function () {
        airport.clearForLanding(plane);
        expect(airport.planes()).toEqual([plane]);
    });

    it('Can clear planes for takeoff', function () {
        airport.clearForLanding(plane);
        airport.clearForTakeOff(plane);
        expect(airport.planes()).toEqual([]);
    });
});