// Feline Warfare - Browser Edition
// Adapted from original terminal-based game

//
// Global Variables
//
let current_place = {};
let commands = {};
let inventory = {};
let places = {};
let move_counter = 0;
let player_hp = 100;
let cats_defeated = 0;

// DOM Elements
const output = document.getElementById('output');
const commandInput = document.getElementById('commandInput');
const playerHPDisplay = document.getElementById('playerHP');
const moveCountDisplay = document.getElementById('moveCount');
const catsDefeatedDisplay = document.getElementById('catsDefeated');

//
// Output Functions (replaces console.log)
//

function print(message, className = '') {
    const p = document.createElement('p');
    p.textContent = message;
    if (className) {
        p.className = className;
    }
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

function printHTML(html, className = '') {
    const div = document.createElement('div');
    div.innerHTML = html;
    if (className) {
        div.className = className;
    }
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
}

function clearOutput() {
    output.innerHTML = '';
}

function updateStats() {
    playerHPDisplay.textContent = player_hp;
    moveCountDisplay.textContent = move_counter;
    catsDefeatedDisplay.textContent = cats_defeated;
}

//
// Utility Functions
//

// Pretty format transforms next_places into user-friendly format
// I.e. cat_party --> Cat Party
function pretty_format(key) {
    const split_key = key.split("_");
    let ret = '';
    for (let i in split_key) {
        const word = split_key[i];
        ret += word[0].toUpperCase() + word.substring(1, word.length) + ' ';
    }
    return ret.substring(0, ret.length - 1);
}

//
// Game Commands
//

function quit() {
    print("Thanks for playing FELINE WARFARE! 🐱", "success");
    print("Refresh the page to play again.", "success");
    commandInput.disabled = true;
}

function look() {
    print(current_place.description);

    if ('articles' in current_place) {
        print('There are some things you can read here:');
        const num_articles = Object.keys(current_place.articles).length;
        for (let i = 0; i < num_articles; i++) {
            print(`${i}: ${current_place.articles[i].title}`);
        }
    }

    if (current_place.next_places && current_place.next_places.length > 0) {
        const formatted_places = current_place.next_places.map(pretty_format).join(', ');
        print(`These are the places you can go next: ${formatted_places}`, "success");
    }
}

function read(num) {
    if ('articles' in current_place) {
        const article_num = parseInt(num);
        if (article_num >= 0 && article_num < current_place.articles.length) {
            print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
            print(current_place.articles[article_num].title, 'warning');
            print(current_place.articles[article_num].contents);
            print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
        } else {
            print("That article doesn't exist!", "error");
        }
    } else {
        print("There's nothing to read here.", "error");
    }
}

function move(place) {
    move_counter += 1;
    updateStats();

    // Random cat battle every 2 moves
    if ((move_counter % 2) == 0 && typeof cat_battle === 'function') {
        cat_battle();
    }

    current_place = places[place];
    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
    look();
}

function command_move(place) {
    if (!current_place.next_places || current_place.next_places.indexOf(place) == -1) {
        print("You can't go there from your current place. Maybe you can access it from somewhere else?", "error");
    } else {
        move(place);
    }
}

function command_look() {
    look();
}

function command_quit() {
    quit();
}

function command_help() {
    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
    print('⚡ AVAILABLE COMMANDS ⚡', 'warning');
    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
    for (let c in commands) {
        print(`${c.toUpperCase()} - ${commands[c].help}`);
    }
    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
}

function command_read(input) {
    read(input);
}

// Commands registry
commands = {
    move: {
        help: 'Move to location specified (e.g., "move alleyway")',
        command: command_move,
    },
    look: {
        help: 'Look around the current place and see where you can go next',
        command: command_look,
    },
    quit: {
        help: 'Mission abort - exits game',
        command: command_quit,
    },
    help: {
        help: 'Displays available commands',
        command: command_help,
    },
    read: {
        help: 'Read printed matter (e.g., "read 0")',
        command: command_read,
    }
};

//
// Input Parsing
//

function parse_input(input) {
    const lower_input = input.toLowerCase().trim();

    if (lower_input.indexOf(' ') == -1) {
        return {
            command: lower_input,
            argument: null
        };
    } else {
        const user_parsed_command = lower_input.slice(0, lower_input.indexOf(' '));
        let user_parsed_arg = lower_input.slice(lower_input.indexOf(' ') + 1, lower_input.length);
        user_parsed_arg = user_parsed_arg.replace(/ /g, "_");

        return {
            command: user_parsed_command,
            argument: user_parsed_arg,
        };
    }
}

//
// Save/Load Functions
//

function saveGame() {
    const gameState = {
        current_place: current_place,
        move_counter: move_counter,
        player_hp: player_hp,
        cats_defeated: cats_defeated,
        inventory: inventory
    };

    localStorage.setItem('feline_warfare_save', JSON.stringify(gameState));
    print('💾 Game saved!', 'success');
}

function loadGame() {
    const savedGame = localStorage.getItem('feline_warfare_save');

    if (savedGame) {
        const gameState = JSON.parse(savedGame);
        current_place = gameState.current_place;
        move_counter = gameState.move_counter;
        player_hp = gameState.player_hp;
        cats_defeated = gameState.cats_defeated;
        inventory = gameState.inventory || {};

        updateStats();
        clearOutput();
        print('📂 Game loaded!', 'success');
        print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
        look();
    } else {
        print('No saved game found!', 'error');
    }
}

//
// Command Execution
//

function executeCommand(cmdText) {
    if (!cmdText || cmdText.trim() === '') return;

    // Echo command
    print(`> ${cmdText}`, 'warning');

    const input = parse_input(cmdText);

    if (!(input.command in commands)) {
        print(`"${input.command}" doesn't look like a valid command.`, 'error');
        command_help();
    } else {
        commands[input.command].command(input.argument);
    }
}

//
// Input Handler
//

commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const cmd = commandInput.value;
        commandInput.value = '';
        executeCommand(cmd);
    }
});

//
// Game Initialization
//

function init_game(game_data, start_place) {
    places = game_data.places;
    current_place = places[start_place];

    print('🐱 FELINE WARFARE INITIALIZED 🐱', 'success');
    print('Year 3011 • Post-Sirius Invasion', 'success');
    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');

    look();

    updateStats();
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', function() {
    if (typeof feline_war !== 'undefined') {
        init_game(feline_war, 'alleyway');
    } else {
        print('ERROR: Game data not loaded!', 'error');
        print('Make sure feline_war_data.js is loaded.', 'error');
    }
});

// Placeholder cat_battle function (will be replaced by actual module)
function cat_battle() {
    if (typeof feline_war === 'undefined' || !feline_war.laser_cats) {
        return;
    }

    const cats = feline_war.laser_cats;
    const cat_type = Math.floor(Math.random() * cats.name.length);
    const cat_name = cats.name[cat_type];
    const cat_color = cats.color[cat_type];
    const cat_rank = cats.rank[cat_type];
    const cat_hp = cats.HP[cat_type];

    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
    print('⚠️  LASER CAT ENCOUNTER! ⚠️', 'battle-text');
    print(`A ${cat_color} ${cat_rank} named ${cat_name} appears!`, 'battle-text');
    print(`HP: ${cat_hp}`, 'battle-text');
    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');

    // Simple battle resolution
    const damage = Math.floor(Math.random() * 10) + 1;
    const player_damage = Math.floor(Math.random() * cat_hp) + 1;

    player_hp -= damage;
    updateStats();

    if (player_hp <= 0) {
        print(`${cat_name} defeated you! 💀`, 'error');
        print('GAME OVER', 'error');
        commandInput.disabled = true;
    } else {
        print(`You took ${damage} damage! Current HP: ${player_hp}`, 'warning');
        print(`You dealt ${player_damage} damage to ${cat_name}!`, 'success');

        if (player_damage >= cat_hp) {
            print(`You defeated ${cat_name}! 🎉`, 'victory-text');
            cats_defeated++;
            updateStats();
        } else {
            print(`${cat_name} fled into the wasteland...`, 'success');
        }
    }

    print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'separator');
}
