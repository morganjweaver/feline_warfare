var test_game = {
places: {
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
},
};
  

//
// Global Variables
//

// stores player's current place and list of all places
var current_place = {};
var commands = {};
var inventory = {};
var places = {};


//
// Commands for moving to new places, utilizing items, etc.
//

// pretty_format transforms next_places (in data file) into user-friendly format
// I.e. cat_party --> Cat Party
var pretty_format = function(key) {
  var split_key = key.split("_");
  var ret = '';
  for (i in split_key) { // looping over arrays returns indecies
    var word = split_key[i];
    ret += word[0].toUpperCase() + word.substring(1, word.lenght) + ' ';
  }
  return ret.substring(0, ret.length -1);
}

var test_pretty_format = function() {
  console.log('Pretty Format: ' + pretty_format('chic_mart'));
}

var look = function() {
  console.log(current_place.description);
  console.log('These are the places you can go next: ' + 
    current_place.next_places.map(pretty_format));
}

var move = function(place) {
    current_place = places[place];
    look(place);
}



// display what the user can do
var help = function() {
  for ( c in commands ) {
    console.log(c + " : " + commands[c].help)
  }
}  
// not sure how to translate comparison of user input to place object's next possible place list in JS-LINE 18
var command_move = function(place) {
    if (current_place.next_places.indexOf(place) == -1) {
        console.log("You can't go there from your current place.  Maybe you can access it from somewhere else?");
    } else {
        move(place);
    }  
};

var command_look = function(place) {
  look();
}

var command_quit = function(input){
  quit();
}
var command_help = function(input) {
  help();
}

var commands = {
  move : {
    help : 'move to location specified',
    command : command_move, 
  },
  look : { 
    help: 'look around the current place and see where you can go next',
    command : command_look,
  },
  quit : {
    help: 'mission abort--exits game',
    command : command_quit,
  },
  help : {
    help: 'displays available commands',
    command: command_help,
  }
}


//
// Internal game functions
//

// Given input, returns an object with a command variable
// and a arguments variable. The command variable is the first
// string before a space, the argument is everything outside
// the space.
var parse_input = function(input) {
    //need to make parser separate command and arg, save seperately
    var lower_input = input.toLowerCase();
    // Move(Chinchilla Mart) --> move(chinchilla mart)
    //var user_text_underscored = lower_input.replace(/ /g,"_");
    //move(chinchilla mart) --> move(chinchilla_mart)
    // to do: fix parser
    var user_parsed_command = lower_input.slice(0, lower_input.indexOf(' '));
    var user_parsed_arg = lower_input.slice(lower_input.indexOf(' ') +1, lower_input.length);
    user_parsed_arg = user_parsed_arg.replace(/ /g,"_");
  
  var ret = {
    command : user_parsed_command,
    argument : user_parsed_arg,
  };
  console.log(ret.command);
  console.log(ret.argument);
  return ret;
}


var run_game = function(game_data, start_place) {
  places = game_data.places;
  move(start_place);
  //maybe substitute player_alive or boss_cat consition for true below?
  while (true) {
    input = parse_input(prompt('What do you want to do?'));
    if (!(input.command in commands)) {
      console.log('that doesn\'t look like a valid command.');
      help(); 
    } else {
      //finds chosen command in commands list, takes input argument
      commands[input.command].command(input.argument)
    }
  }
}


//is this legit?  add to end of every item script?
/*var remove_item = function(item) {
  inventory.replace('item','');
}

//do I need to specify for use while battling cat?  will the cat fight loop just exclude the possibility of 
//executing other commands?
var use = function(item) {
  if (slaying == false) {
    console.log('Hm, that didn\'t seem to do much--try using it next time you see a laser cat!');
    } else {
//execute code stored in a specific item, apply to only current battle
//then attempts to remove the item from inventory
    var index = array.indexOf(item);
    array.splice(index, 1);
    }
}
*/
    
    

