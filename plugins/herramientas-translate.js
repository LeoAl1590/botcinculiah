import translate from 'translate-google-api'
const defaultLang = 'es'
const tld = 'cn'
let handler = async (m, { args, usedPrefix, command }) => {
let msg = `${mg}π ππ‘ π©ππ­π©π€π€ ππͺπ π¦πͺπππ§π π©π§πππͺπππ§\n ππ¨ππ§ ππ ππ¨π©π ππ€π§π’π\nππππ’π₯π‘π€\n*${usedPrefix + command} (idioma) (texto)*\n*${usedPrefix + command} es hello*\n\nπ°πππππ πππππππππ\n*https://cloud.google.com/translate/docs/languages*`
if (!args || !args[0]) return m.reply(msg)
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ') }
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {
tld,
to: lang, })
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang, })
} finally {
m.reply('*TraducciΓ³n:* ' +  result[0]) }}
handler.help = ['translate', 'traducir']
handler.tags = ['General']
handler.command = /^(tr(anslate)|traducir?)$/i
export default handler
