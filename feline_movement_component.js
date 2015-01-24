//stores player's items

var inventory = {};

//stores player's current location and list of all locations

var locations = {};
var current_location = {};

//functions for moving to new locations, utilizing items, etc.

var goto(location){
    current_location = locations[location];
    look(location);
}
//not sure how to translate comparison of user input to location object's next possible location list in JS-LINE 18
var command_goto(location){
    if location not in locations.location[possible_locations] {
        prompt("You can't go there from your current location.  Maybe you can access it from somewhere else?");
        else:
            goto(location);
    } 
};