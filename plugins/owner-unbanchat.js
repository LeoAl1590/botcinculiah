/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true

m.reply(`${eg}ππππ πΎππΌπ πππ π½πΌπππΌπΏπ π€\nππ ππππΌππ πΏπππππππ½ππ ππΌπππΌ πππ πππΌ πΏπππ½πΌπππΌπΏπΌ.\n\nππππ πΎππΌπ ππΌπ π½πΌππππΏ π»\nπ ππππ πππ π½π πΌππΌπππΌπ½ππ πππππ ππ ππ πππ½πΌππππΏ`)
}
handler.help = ['banchat1']
handler.tags = ['owner']
handler.command = /^ban1|banear1|banchat1$/i
handler.exp = 500
handler.rowner = true

export default handler*/

//PARA GRUPOS

let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no estΓ‘ registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no estΓ‘ baneado!!*')
  chat.isBanned = false
  m.reply(`π¬πππ ππππ πππ πππππππππππ₯³\nπ¨ππππ πππππ ππππππππππ..`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
