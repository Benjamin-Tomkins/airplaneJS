# Translation Steps For Airport Challenge into .JS

### First User Story
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
at the top of each page to sensure all JavaScript runs in Strict mode, to ensure compliance</br>


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



