//make browser commands work in jsc
load('console_emulation.js')

var test_places = {
  place1: {
    description: 'yer in place 1',
    next_places: ['place2', 'place3',],
  },
  place2: {
    description: 'you are in place 2',
    next_places: ['place1', 'place3',],
  },
  place3: {
    description: 'u r in place3',
    next_places: ['place1', 'place2',],
  }
};


//stores player's current place and list of all places
var places = test_places;
var current_place = {};

var look = function() {
  console.log(current_place.description);
}
//functions for moving to new places, utilizing items, etc.

var goto = function(place) {
    current_place = places[place];
    look(place);
}

//not sure how to translate comparison of user input to place object's next possible place list in JS-LINE 18
var command_goto = function(place) {
    if (current_place.next_places.indexOf(place) == -1) {
        console.log("You can't go there from your current place.  Maybe you can access it from somewhere else?");
    } else {
        goto(place);
    }
 
};

var inventory = {}

var use = function() {
    

