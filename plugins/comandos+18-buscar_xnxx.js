//Creditos https://github.com/BrunoSobrino

import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `šš¤šØ šš¤š¢šš£šš¤ +18 ššØš©šĢš£ šššØššš©šš«ššš¤šØ šŖšØš #š¤š£ š¢š¤šš¤šš¤š§š£š® š„šš§š ššš©šš«šš§\n\n`
if (!text) throw `ššŖš ššŖšØšš? \nššØšš§ šš” šš¤š¢šš£šš¤ šš ššØš©š š¢šš£šš§š\nšššš¢š„š”š¤\n*${usedPrefix + command} Sexo*`
try {
//let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${keysxxx}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `šššØšŖš”š©ššš¤ šš š”š š½šŖšØš¦šŖššš | ${args.join(" ")}`
const sections = [{
title: `šŖšššššššš ššššššššššš`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'š¬šššš š šššššššš šššššš',
title: " ā¤ šŖšššššššš šššššššššš",
buttonText: "ā¤ š¹ššššššššš",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: `ā¹ šŗššššššššš šššš š·ššš ššššš ššššššššš šš ššĢššš`, rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply(`š¼šš, šš šš ššššĢ šš šššššššš¤”, šššššš šš šššššššš šššššš`)
console.log(e)
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch|buscarxnxx|xnxxbuscar$/i
handler.level = 5
handler.limit = 1
handler.register = true
export default handler

