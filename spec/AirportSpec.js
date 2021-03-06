'use strict';


describe('Airport', function() {

    let weather;
    let airport;
    let plane;


    beforeEach(function() {
        weather = jasmine.createSpyObj('weather', ['isStormy']);
        airport = new Airport(weather);
        plane = jasmine.createSpy('plane', ['land']);
    });

    it('Has no planes by default', function() {
        expect(airport.planes()).toEqual([]);
    });


    describe("Under normal conditions", function() {

        beforeEach(function() {
            weather.isStormy.and.returnValue(false);
            airport.clearForLanding(plane);
        });

        it('can clear planes for landing', function() {
            expect(airport.planes()).toEqual([plane]);
        });

        it('can clear planes for takeoff', function() {
            airport.clearForTakeOff(plane);
            expect(airport.planes()).toEqual([]);
        });

    });

    // remove the test for checking airport.isStormy


    describe('under stormy conditions', function() {

        beforeEach(function() {
            weather.isStormy.and.returnValue(true);
        });

        it('does not clear plane for take off', function() {
            expect(function(){ airport.clearForTakeOff(plane)}).toThrowError('cannot takeoff during stormy weather');
        });

        it('does not clear plane for landing', function() {
            expect(function(){ airport.clearForLanding(plane)}).toThrowError('cannot land during stormy weather');
        });

    });
});