require("dotenv").config();

const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
client.on("ready", (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.on("guildMemberAdd", (member) => {
  const channel = member.guild.systemChannel;
  if (channel) {
    channel.send(
      `Olá ${member}, seja bem vindo ao servidor do Breno! Para informações de contato, envie qualquer mensagem, por gentileza.`
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content) {
    message.reply(
      "Olá, eu sou o LinkBot do Breno! Gostaria de agradecer ao Sr./Sra. pelo contato, " +
        "você também pode entrar em contato dele pelo LinkedIn: https://www.linkedin.com/in/breno-carvalho-8711952b9/ ou pelo e-mail: carv.breno.dev@gmail.com"
    );
  }
});

client.login(process.env.TOKEN);
