let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let id = m.chat
conn.vote = conn.vote ? conn.vote : {}
        
if (!(id in conn.vote)) {
return await conn.sendButton(m.chat, `ππ€ π¨π ππ ππ§ππππ€π§ π«π€π©ππππ€Μπ£ ππ‘ ππ¨π©π ππ§πͺπ₯π€`, `*Si quieres crear una nueva votaciΓ³n usa el comando ${usedPrefix}crearvoto*\n${wm}`, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£ βοΈ', '/menu']], fkontak, m)}

let [reason, upvote, devote] = conn.vote[id]
let caption = `*${htjava} πππ¨π©ππ¨ ππ π«π€π©π€π¨ ${htjava}*

*ππ¨πͺππ§ππ€(A)*
π @${conn.getName(m.sender)}

*ππ€π©ππ«π€π¨ β«* ${reason}

*${htjava} ππ€π©π€π§ π πππ«π€π§ ${htjava}*
*Total: ${upvote.length}*

${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} ππ€π©π€π¨ ππ‘ ππ€π£π©π§π ${htjava}*
*Total: ${devote.length}*

${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}`.trim()

await conn.sendButton(m.chat, caption, wm, null, [
['β ππππΌπ πΌ ππΌπππ ', `${usedPrefix}upvote`],
['β ππππΌπ ππ πΎπππππΌ ', `${usedPrefix}devote`],
['π§Ύ ππππΌππππΌπ ππππΌπΎπππ ', `${usedPrefix}delvoto`]], m, { mentions: conn.parseMention(caption) })}

handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote|vervotos|vervoto|vervotaciones|votaciones|votacion|vervotacion$/i
handler.group = true
handler.register = true
handler.botAdmin = true

export default handler
