'use strict';

describe('Plane', function() {
	let plane;
    let airport;
	beforeEach(function() {
		plane = new Plane();
		airport = jasmine.createSpyObj('airport',['clearForLanding','clearForTakeOff']);
	});

	it('can land at an airport', function() {
		plane.land(airport);
		expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
	});

	it('can take off from airport', function () {
        plane.land(airport);
        plane.takeOff(airport);
        expect(airport.clearForTakeOff).toHaveBeenCalled();
    });
});

