var { readdirSync } = require("fs")
const ascii = require('ascii-table');

let table = new ascii("Commands");
table.setHeading('Command', "Load Status");
module.exports = (bot) =>{
    readdirSync('./commands/').forEach(dir=>{
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name){
                bot.commands.set(pull.name, pull);
                table.addRow(file, 'Loaded.');
            }else{
                table.addRow(file, "ERROR!")
                continue;
            }
        }
    });
    console.log(table.toString())
}