//make browser commands work in jsc
load('console_emulation.js');

load('text_engine.js');

load('feline_war_data.js');

//load('cat_battle_module.js');

var TOTAL_TESTS=0;
function assert(bool) {
  if( ! bool ) {
    console.log("Test failed");
    throw "Assertion Failed";
  }
  TOTAL_TESTS+=1;
}

function print_test_results() {
  console.log(TOTAL_TESTS + " tests passed");
}

function test_parse_input() {
  var result;
  result = parse_input("quit");
  assert(result.command == "quit");
  result = parse_input("move Chinchilla Mart");
  assert(result.command == "move");
  assert(result.argument == "chinchilla_mart");
}


test_parse_input();
print_test_results();

