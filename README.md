# Translation Steps For Airport Challenge into .JS

### User Stories
```

As an air traffic controller
To get passengers to a destination
I want to instruct a plane to land at
  an airport and confirm that it has landed


As an air traffic controller
To get passengers to a destination
I want to instruct a plane to take off from
  an airport and confirm that it is no longer in the airport


As an air traffic controller 
To ensure safety 
I want to prevent takeoff when weather is stormy 


As an air traffic controller 
To ensure safety 
I want to prevent landing when weather is stormy 

```

Create feature, spec, and .js files :

+ spec/FeatureSpec.js</br>
+ spec/PlaneSpec.js</br>
+ spec/AirportSpec.js</br>

+ src/Airport.js</br>
+ src/Plane.js</br>

Note: all files should use the :</br>
``` 'use strict';```</br>
at the top of each page to ensure all JavaScript runs in Strict mode, to ensure compliance</br>


### Steps for first user case reconstruction

in the spec/FeatureSpec.js file :</br>
```

+ Add a Describe 'Feature Test :'
+ Add a plane variable
+ Add an airport variable
+ Use a beforeEach to complete the instantiation of the Plane/Airport objects	...[be]
+ Add an "it" => 'planes can be instructed to land at an airport'	...[it]
+ Specify a plane.land(airport) method call
+ expect that an airport.planes() method contains a plane 	...[tc]

```

in spec/PlaneSpec.js, create a unit test for a Plane :</br>
```

+ Add a Describe 'Plane :'
+ Add a plane variable
+ Use a beforeEach to complete the instantiation of the Plane object 	...[be]
+ Add an "it" => 'can land at an airport' 	...[it]
+ expect that a plane.land is not defined 	...[nu]

```

Run the ```SpecRunner.html```</br>

in src/Plane.js
```

+ define a Plane(){} function
+ define a Plane prototype with land method

```

Run the ```SpecRunner.html```</br>

in spec/AirportSpec.js, create a unit test for an Airport

```

+ Add a Describe 'Airport :'
+ Add an airport variable
+ Use a beforeEach to complete the instantiation of the Airport object 	...[be]
+ Add an "it" => 'has no planes by default' 	...[it]
+ expect that an airport.planes() method is equal to an enpty array 	...[te]

```

Run the ```SpecRunner.html```</br>

in src/Airport.js
```

+ define an Airport(){} function
+ define an Airport prototype with planes method 	...[proto]

```

Run the ```SpecRunner.html```</br>

in spec/PlaneSpec.js :
```

+ update the airport to use a jasmine createSpyObject for airport to have a simulated clearForLanding method 	...[cso]
+ in the 'it can land at an airport' update the plane.land to include an airport parameter
+ expect that airport.clearForLanding toHaveBeenCalledWith a plane 	...[thbcw]

```

Note: jasmine spies are equivalent to doubles

in src'/Plane.js :
```

+ specify that the land prototype has an airport parameter
+ update the land method to call that an airport's clearedForLanding method can accept 'this' plane object

```

Run the ```SpecRunner.html```</br>

in src/AirportSpec.js :
```

+ Update the plane instantiation to use a jasmine createSpy that simulates the plane having a lamd method 	...[cs]
+ Add an "it" 'can clear planes for landing'
+ Specify that an airport has a clearForlanding method which takes a plane as a parameter
+ expect that the airport contains a plane

```

in src/Airport.js :
```

+ Add an Airport clearForLanding prototype which takes a plane as an argument
+ Add a this._hangar state variable which contains an empty array to store the planes
+ Update the planes prototype to return this.hangar()
+ Update the clearForLanding prototype to push a plane into the ._hangar

```

Run the ```SpecRunner.html```</br>
Note: you should be all green at this point!


### Steps for second user case reconstruction


in spec/FeatureSpec.js :
```

+ Add an "it" 'planes can be instructed to takeoff'
+ Specify that a plane can land at an airport
+ Specify that a plane can takeoff()
+ expect that airport.planes() does not contain a plane

```

Run the ```SpecRunner.html```</br>

in spec/FeatureSpec.js :
```

+ Update the createSpyObject to also include a clearForTakeOff mocked method
+ Add an "it" 'can takeoff from an airport'
+ land a plane at the airport
+ takeoff a plane
+ expect that airport.clearForTakeOff has been called 	...[thbc]

```

in src/Plane.js :
```

+ Add a this._location variable to the land prototype and set it to the Airport being passed into the method parameter
+ Add a plane takeoff() prototype
+ Call the clearForTakeOff() method from this._location

```

in spec/AirportSpec.js :
```

+ Add an "it" 'can clear planes for takeoff'
+ Specify that a plane is clearForLanding form an airport
+ Specify that a plane is clearForTakeOff from an airport
+ expect that airport.planes() is equal to an empty array

```

Run the ```SpecRunner.html```</br>

in src/Airport.js :
```

+ Add a prototype method that can clearForTakeOff a plane
+ pop the plane off the this._hangar array

```

### Steps for third user case reconstruction


in spec/FeatureSpec.js :
```

+ Add "it" 'blocks takeoff when the weather is stormy'
+ Land a plane at the airport
+ Create a spyOn to call the original method and returnValue as true 	...[srv]
+ expect function(){plane.takeoff();} toThrowError 'cannot takeoff during a storm' 	...[tte]
+ expect the airport to contain a plane

```

in spec/AirportSpec.js :
```

+ Add an "it" 'can check for stormy conditions'
+ expect airport.isStormy() toBeFalsy 	...[tbf]

```

in src/Airport.js
```

+ Add an isStormy prototype and return false 

```

Run the ```SpecRunner.html```</br>

in spec/AirportSpec.js
```

+ Add a guard clause to clear a plane for takeoff
+ i.e. if this.isStormy() is true, throw new Error('cannot takeoff during a storm')
+ call this._hangar.pop or set the .hangar to an empty array

```

Run the ```SpecRunner.html```</br>
Note: all tests should be green


### Steps for forth user case reconstruction

Refactoring the code to extract the weather and add random functionality, using dependency injection to tell the Airport what kind of weather to have 

create a new file : spec/WeatherSpec.js
```

+ Add a describe 'Weather' 	...[desc]
+ specify a weather variable
+ Add a beforeEach to instantiate the Weather function 	...[be]
+ Add an "it" 'gives stormy sometimes'
+ Add a mock spyOn with Math 'random'and returnValue 1
+ expect weather.isStormy toBeTruthy 	...[tbt]

+ Add an "it" 'gives not stormy other times'
+ Add a mock spyOn with Math 'random' and returnValue 0
+ expect weather.isStormy toBeFalsy 	...[tbf]

```

Run the ```SpecRunner.html```</br>

in src/Weather.js :
```

+ define a Weather function(){}
+ Add a this._CHANCE_OF_STORMY attribute to 0.5
+ Add an isStormy prototype
+ Return Math.random() > this._CHANCE_OF_STORMY

```

#### Injecting the weather into the Airport

in src/Airport.js :
```

+ Add a parameter to the Airport function that accepts the weather
+ Add a this._weather attribute and assign a typeof weather !== 'undefined' ? weather : new Weather()

```



