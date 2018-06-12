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

    it('can check for stormy conditions', function () {
        expect(airport.isStormy()).toBeFalsy();
    });

    describe('under stormy conditions', function () {
        it('does not clear plane for take off', function () {
            spyOn(airport, 'isStormy').and.returnValue(true);
            expect(function(){ airport.clearForTakeOff(plane)}).toThrowError('cannot takeoff during stormy weather');
        });
        it('does not clear plane for landing', function() {
            spyOn(airport, 'isStormy').and.returnValue(true);
            expect(function(){ airport.clearForLanding(plane)}).toThrowError('cannot land during stormy weather');
        })
    });
});