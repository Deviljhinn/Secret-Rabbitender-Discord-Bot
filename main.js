const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

const prefix = '!';

client.once('ready', () => {
    console.log('Juice is Online!');
});

client.on('message', message =>{
    if(!message.content.substring(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'vibe'){
        message.channel.send(':Rainbosaur: :Rainbosaur: :Rainbosaur: :Rainbosaur: :Rainbosaur: :Rainbosaur: :Rainbosaur:');
    } else if (command == 'web3'){
        message.channel.send('Together we can break the cycle of poverty');
    } else if (command == 'love'){
        message.channel.send('It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done - Vincent Van Gogh');
    } else if (command == 'dream'){
        message.channel.send('I dream my painting and I paint my dream.');
    } else if (command == 'art'){
        message.channel.send('There is nothing more truly artistic than to love people.');
    } else if (command == 'sad'){
        message.channel.send('The sadness wont last forever.');        
    } else if (command == 'juice'){
        message.channel.send('Sorry, were all out');
    } else if (command == 'martini'){
        message.channel.send('will a radartini suffice?');
    } else if (command == 'angry'){
        message.channel.send('For every minute you are angry you lose sixty seconds of happiness.');
    } else if (command == 'rose'){
        message.channel.send('It is the time you have wasted for your rose that makes your rose so important.');
    } else if (command == 'happy'){
        message.channel.send('Violet I know your apartment be smelling like overly boiled vegetables and wet dogs I just know it');
    } else if (command == 'greed'){
        message.channel.send('You can have it all. Just not all at once.');
    } else if (command == 'save'){
        message.channel.send('No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.');
    } else if (command == 'worry'){
        message.channel.send('If the problem can be solved why worry? If the problem cannot be solved worrying will do you no good.');
    } else if (command == 'purity'){
        message.channel.send('Purity or impurity depends on oneself, No one can purify another');
    } else if (command == 'lofi'){
        message.channel.send('https://www.youtube.com/watch?v=auTjwpERG1I');
    }
    });

client.login('OTYwMjkzNDIwNDY1ODA3Mzgw.YkoU8A.95oPK_R8JmM9o2Z0v1r5Uuh245E');

