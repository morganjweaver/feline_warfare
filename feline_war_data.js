feline_war = {
places: {
  alleyway: {
    description: 'You find yourself in a filthy alleyway of scorched concrete and bones.  A dumpster sits to one side.',
    next_places: ['spacecraft', 'chinchilla_mart', 'bomb_shelter' ],

  },
  bomb_shelter: {
    description: 'You are now standing in a shabby concrete bunker.  There is a table with a couple of splintered chairs, a couple of cabinets, and. . . what\'s this. . . a trap door?',
    next_places: ['alleyway', 'war_room'],
  },
  war_room: {
    description: 'You are in a tiny secret room, which appears to have been used for planning attack strategies.  It is filled with cobwebs, and a heap of trash in one corner.',
    next_places: ['bomb_shelter'],
  },
  spacecraft: {
    description: 'You now stand inside a downed ship.  Twisted metal and broken wires are everywhere.  An anti-cat propaganda poster is still clinging to the wall.',
    next_places: ['sick_bay', 'alleyway'],
  },
  sick_bay: {
    description: 'You enter the ship\'s sick bay.  Cryo rehabilitation gear and an antigravity operating bed cram the tiny space.',
    next_places: ['spacecraft'],
  },
  chinchilla_mart: {
    description: 'You are inside the remnants of a Chinchilla Mart. The floor is dusted with scraps of neon packaging.  You can almost hear the Chinchilla Mart jingle ringing in your ears.  An information kiosk sits in one corner, luckily powered by its nuclear battery.',
    next_places: ['alleyway', 'kiosk', 'soylent_refinery'],
  },
  soylent_refinery: {
    description: 'The Soylent refinery has clearly been pillaged of its various nutritionally calibrated, food-like wafer products.  Vats and conveyor belts sit empty, and an eerie smell haunts the large factory floor.',
    next_places: ['chinchilla_mart'],
  },
  kiosk: {
    description: 'You wander over to the battered kiosk.  A screen offers several news articles and what appear to be federally sponsored survival information for megafeline emergencies.  Enter a number to access an article or leave the kiosk.',
  next_places: ['chinchilla_mart'],
  articles: [
      { 
        title: 'Xelebrity News',
        contents: '<Xelebrity News, March 20, 3011, 20:15> Rock star research scientist Kifteq VC25 announces the release of new cerebral nanobot technology enabling direct frontal forebrain/G-wave interface---5th Season of Quantum Scandal initial screening attended by Chinese Royal Family---Nanodrop chanteuse/-teur Rit Kaylor CB99 elects to have second clone---Zero-G talking wombat wins hearts, minds of the nation\'s remaining children </Xelebrity News>',
      },
      {
        title: 'INFOASSAULT',
        contents: '<INFOASSAULT, July 1, 3011, 04:00> Reunited [A]\'Merican Defense Intelligence Cooperative (RADIC) reports what could be a rare spacetime disturbance near Sirius; RADIC executives are calling for New Greenlandic Observatory corroberation.  Chief diplomatic commander Ptier WX39 (GlaxoSmithKleine-Samsung) may initiate exploratory probe. </INFOASSAULT>',
      },
      {
        title: 'RADIC EMERGENCY PUSH',
        contents:'<RADIC EMERGENCY PUSH, October 17, 3011, 23:45> Clowder of unidentified feline-like life approaching Terra by way of Sirius; until clowder is confirmed not a direct threat, please relocate to subterranian shelters provided by your local corporate federal partner.  Minor charges will be incurred for premium advertising-free shelter experience. Scientists strongly advise refugees to leave any cat treats at home. </RADIC EMERGENCY PUSH>',
      },
      {
        title: 'UNICORP Global Push',
        contents: '<UNICORP Global Push, November 1, 3011, 12:00> Please enter your language or corperate nomenclature code for non-standard English.  Clowder positively identified as Lasercat threat and confirmed by all major corporate and government intelligences.  Remain in your shelters and do not leave for any reason.  RADIC, UNIC, EURASIA, and ANTARC forces are currently attempting to contain all Lasercats for further research and experimentation. DO NOT open any food rations (dehydrated, tablets, modules or threads) containing liver pate or suspected imitation liver pate flavoring. Shelter guests will be advised to leave upon threat neutralization. </UNICORP Global Push>',
      },
      {
        title: "Attack NeuTralIzing Multi-Edible Organic Weaponry (ANTIMEOW)",
        contents: "1. 	Cat Attack Cookies: A nutrious treat for those special occasions.\n \n" +
'Ingredients \n' +
'1 C	Whole brown rice flour \n' +
'1/4 C	Soy flour \n' +
'3 t	Catnip \n' +
'1	Egg \n' +
'1/3 C	Almond Milk \n' +
'2 T	Wheat germ \n' +
'1/3 C	Almond FLour \n' +
'1 T	Unsulfurated molasses \n' +
'2 T	Olive Oil \n\n' +

'Directions\n' +
'Preheat oven to 350F. Mix dry ingredients together. Add molasses, egg, oil and almond milk. Roll out flat onto oiled cookie sheet and cut into small, cat bite-sized pieces. Bake for 20 minutes. Let cool and store in tightly sealed container. \n' +

'Your lil furbaby will just adores these. Remember though....it\'s just a treat, not a meal! \n\n' +


'2. Kitty Heaven Sardine Suprise: A toothsome delicacy for good kitties \n\n' +


'Ingredients \n' +
'2	Tins of sardines in oil (do not drain)\n' +
'2/3 C	Cooked brown rice\n' +
'1 T	Pureed liver (or canned liver cat food)\n' +
'1/4 C	Chopped parsley\n\n' +

'Directions\n' +
'Combine all ingredients and mix well. Shape into balls of desired size or simply spoon into cat\'s dish and serve. These treats may be stored in the refrigerator for up to three days, and may also be frozen.',
      },
    ],
  },
},
laser_cats: {
  name: ['Mr. Whiskas', 'Peaches','Dr. Meow', 'Spicy Bob',],
  color: ['Calico', 'Black', 'Extra Fluffy White', 'Purple',],
  rank: ['Kitten', 'Junior Cadet', 'Shock Troop', 'Covert Ops',],
  // HP stands for 'Hit Points' or total damage laser cat may sustain.
  HP: [2, 5, 7, 10],
},
boss_cat: {
  name: ['Admiral Fluff-Muffin',],
  color: ['Neon Leapard',],
  rank: ['Admiral--Use extreme caution!',],
  HP: [15,],
},
}

/*
 items = {
  // Data structure experiment to remove item from inventory after use
  pelt: { 
    var pelt = 'pelt';
    HP = (HP + 5);
    console.log('You don the mutant chinchilla pelt and feel its freakishly soft and fluffy power flowing through you.  Your hit points rise by 5!';
    item_removal(pelt);
    }
  pate_treats: {
    // End laser cat round/cat runs away
    console.log('You hurl the goose pate flavored laser treats far off into the distance.  The laser cat rushes away in an unearthly fury to recover the very substance which may have tempted it to Earth. . .';
    slaying = false;
    }
  soylent_treats: {
  var soylent_random = (Math.floor(Math.random() * 2));
  if soylent_random {
    console.log('You hurl the off-brand soylent blue cat treats into a nearby crater.  The laser cat must be very hungry--it tears off towards the generic food product, only slightly preferred over human flesh.'
    slaying = false;
    } else {
    console.log('Did you think the laser cat would go after such an inferior pet product?');
    //continues battle here.  how to launch battle?
      }
    }
  granules: {
    console.log('Nothing happens--what did you think you could do by throwing cat litter, anyway?')
    //continue battle here/launch battle module
    }
  laser: {
    //for only this match.  can I do this or need to create separate battle module?
    console.log('You rip the ultimate antifeline weapon out of your pocket--a laser pointer!  The laser cat starts going mad as you make the vivid red dot zigzag across buildings, cars, rubble and trash, its gigantic head whippng back and forth uncontrollably as it emits a series of short, twittering sounds of kitty excitement.  It seems very confused--time to attack!';
    damageThisRound = damageThisRound*2;
    }


//thic code removes certain items from inventory after they have been used, such as treats.  By principle of DRY, this shouldn't be in EVERY item's mini program.  How to refer to this function so that only the item character just used is removed? 
var item_removal = function('item_name'){
  for(var i = inventory.length - 1; i >= 0; i--) {
  if(inventory[i] === item_name) {
    inventory.splice(i, 1);
    }
  }
}*/
