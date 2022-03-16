const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
    function YousamPower() {
        let hungry = ["music = 1p"]
        let Power = Math.floor(Math.random() * hungry.length);
        client.user.setActivity(hungry[Power], {type: "PLAYING"});
      }; setInterval(YousamPower, 10000)
});

client.login('OTUzMjQ3NTMzNTA3OTUyNjcw.YjBy8g.Tm0AvewqKGdLpgbidwHLINus2_U');