import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) return conn.reply(m.chat, `ššØšš§ššš šš” š£š¤š¢šš§š šš šŖšØšŖšš§šš¤ šš š©šš š©š¤š  šØšš£ šŖšØšš§ "@"\nšššš¢š„š”š¤\n*${usedPrefix + command} mundo_dos_animes81*`, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let gata = `
š¤ ššØšŖšš§šš¤(š¼)
${json.result.username}
āāāāāāāāāāāāāāāāā
āØ šš¤š¢šš§š
${json.result.nickname}
āāāāāāāāāāāāāāāāā
ā ššššŖššš¤š§ššØ
${json.result.followers}
āāāāāāāāāāāāāāāāā
āļø ššššŖššš¤šØ
${json.result.followings}
āāāāāāāāāāāāāāāāā
ā¤ļø šš ššŖšØš©š 
${json.result.likes}
āāāāāāāāāāāāāāāāā
š ššŖšš”šššššš¤Ģš£ššØ
${json.result.video}
āāāāāāāāāāāāāāāāā
š šæššØšš§šš„ššš¤Ģš£
${json.result.bio}
`.trim()
await conn.sendFile(m.chat, res2, 'error.jpg', gata, m, false)
} catch (e) {
throw `ššš, šš§š§š¤š§, š«šŖšš”š«š šš” šš£š©šš£š©šš§.`
}
/*
let info = `š šš£šš¤š§š¢šš©š šØš¤šš§š š”ššØ šš¤š«ššššššØ š® š§šššŖšš§šš š©šš£šš§ š”š šŖš”š©šš¢š š«šš§šØšš¤š£.
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['ššš£šŖ šæššØššš§šššØ š', '#descargasmenu'],
['ššš£šŖ š¾š¤š¢š„š”šš©š¤ āØ', '.allmenu'],
['šš¤š”š«šš§ šš” ššš£šŖĢ āļø', '/menu']
], m,)  
*/
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.exp = 48
export default handler
