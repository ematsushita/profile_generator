const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, 
//prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

rl.question("What's your name? Nicknames are also acceptable :) \n", (name) => {

  rl.question("What's an activity you like doing? \n", (activity) => {

    rl.question("What do you listen to while doing that? \n", (music) => {

      rl.question("Which meal is your favourite \n", (meal) => {

        rl.question("What's your favourite thing to eat for that meal? \n", (favouriteThingMeal) => {

          rl.question("Which sport is your absolute favourite? \n", (sport) => {

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! \n", (superpower) => {
            
              console.log(`${name} likes to listen to ${music} while ${activity} and eat ${favouriteThingMeal} for ${meal}. ${name}'s favourite sport is ${sport}, and ${name} has the ability to ${superpower}.`)

                rl.close();
            });

          });

        });

      });

    });

  });


});


