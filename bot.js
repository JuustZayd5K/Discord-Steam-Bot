const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['343743154429755392','515786788078485515'];

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Hwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Hls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Hst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/justzayd5k");
  client.user.setStatus("dnd")
   message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Hpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(` ** Done. :white_check_mark: ** `)

}
  client.on('message', message => {//ImZayd5K.🍸#5505
        if (!developers.includes(message.author.id)) return;//ImZayd5K.🍸#5505
  if (message.content === '963') {//ImZayd5K.🍸#5505

//if (!channel) return generale.join() .then(connection => message.channel.send(` \` ** Done.:white_check_mark:  ** `));  

  let channel = client.channels.get('515786788078485515');//ImZayd5K.🍸#5505


  channel.join()//iiHouSSaM#9494
  .then(connection => console.log(`????`))//ImZayd5K.🍸#5505
  .catch(console.error);//ImZayd5K.🍸#5505
  }
});
          
});
client.login(NDc1MzY4NjQ0MjkwMDE5MzM4.DmgZkQ.0x5LMQCjnojoSggA2Uqmk0kWSBE);
