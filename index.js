const Discord = require("discord.js");
const client = new Discord.Client();

const R6StatsAPI = require('r6statsapi').default
 
const API = new R6StatsAPI('51686eb8-20d6-4a49-a65e-004818103b96')


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("En dev");
  API
      .getGenericStats('SFZ-SFZ', 'pc', 'all')
      .then(userStats => console.log(userStats))
    

});

client.on('message', message => {
    if (message.content === "%ping"){
        console.log(`${Date.now() - message.createdTimestamp} ms`)
    }
});


client.login("ODQzOTA5NTU1OTk3MTE0Mzk4.YKKuBQ.J7AwktifOOyxjgsDzrgXoUzDevA");
