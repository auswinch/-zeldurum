var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Butonlara tıklar mısın canım?",
assets : {
large_image : "astwinch",
large_text : "Astwinch" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Astwinch - Sunucu" , url : "https://discord.gg/sEU25HNJFJ"},{label : "Captive - Bot",url : "https://discord.com/oauth2/authorize?client_id=829536314322845746&scope=bot&permissions=8"}]
}
})
})
client.login({ clientId : "831970384986243133" }).catch(console.error);