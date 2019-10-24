// Keepit-Clean - a simple Discord bot created by Alex P. (@acryllect)
// Improved by Nashii#0001 @ Discord | nemdev_ @ Twitter

let Discord = require("discord.js");
let client = new Discord.Client();

let prefixes = [
	"!",
	"?",
	"-"
];

const token = "STRING_TOKEN";

/* Function to check if an array has the value passed*/
function check(value, arrayofvalues) {
  return arrayofvalues.indexOf( value ) == -1;
}

client.on('message', message => {
  try 
  {
     const characters = message.split('');
     /* Split by chars*/
     if(message.author.bot /* If the author is a boy*/ && /* and */ check(characters[0], prefixes)) /* The first character is a prefix */){
         message.delete(); /* Delete the message */
     }  
  }
  catch (...)
  {
      console.error("Exception catched\n");
  }
  /* 
  TODO: Add a check to see if it has permissions to delete the message 
  */
});

client.login("token");
