var cat_battle = prompt("A laser cat emerges! Do you FIGHT, PAY by distracting it with valuable cat treats, or RUN?").toUpperCase();

switch(cat_battle) {
  case 'FIGHT':
    var weapon = prompt("How courageous! Did you bring an ANTI-FELINE WEAPON? (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(weapon === 'YES' || smart === 'YES') {
        console.log("Time to do battle with laser cat!");
            var slaying = true
            var youHit = (Math.floor(Math.random() * 2))
            var damageThisRound = (Math.floor(Math.random()*5 + 1))
            var totalDamage = 0 
        while (slaying) {
            if (youHit) {
                console.log("You hit laser cat and did " + damageThisRound + " damage against the nefarious beast!");
                    totalDamage += damageThisRound;
                if (totalDamage >= 3) {
                    console.log("You have defeated laser cat!!!  You go about your way through the post-apocalyptic ruin, wary of more laser cats.");
                    slaying = false;
                } else {
                    youHit = Math.floor(Math.random() * 2);
                }
            } else {
                console.log("You fire and miss--laser cat nukes you!");
                slaying = false;
            }    
            break;
        }
    } else {
      console.log("You're not equipped OR smart? Well, 
        if you were smarter, you probably wouldn't have tried to fight a mutant laser cat. You have been baked to a crackling, popping crisp by laser cat's searing gaze!");
    }
    break;
  case 'PAY':
    var haveTreats = prompt("All right, we'll scatter our currency in an attempt to distract it. Do you have any cat treats (YES or NO)?").toUpperCase();
    var isGoosePateFlavored = prompt("Are your cat treats goose pate flavored?").toUpperCase();
    if(haveTreats === 'YES' && isGoosePateFlavored === 'YES') {
      console.log("Great! You distract the whiskered beast with a delicious snack and continue on your merry way.");
    } else {
      console.log("No! This laser cat only takes liver pate flavored treats. Too bad you don't have any. You get vaporized!");
    }
    break;
  case 'RUN':
    var fast = prompt("Let's run! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You make a narrow escape! You live to wander the urban ruins another day.");
    } else {
      console.log("You're not fast AND you didn't get a head start? That wasn't going to end well.  The laser cat vaporizes you with its searing feline gaze.");
    }
    break;
  default:
    console.log("That entry didn't make sense to me. Rerun the code and try again, this time picking FIGHT, PAY, or RUN!");
}
