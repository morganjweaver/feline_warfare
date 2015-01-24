
// Emulate the code academy environment so that laser cats can run in jsc

// Defines a 'console' like class that has a log function that utilizes jsc's 'debug'
// funtion to print strings to the terminal
var console = {
    log: function(output) {
	debug(output)  
    }
};

// Defines a new prompt function based on jsc's 'readline' functionality,
// and the console class defined above.
var prompt = function(prompt) {
    console.log(prompt);
    return readline();
}
