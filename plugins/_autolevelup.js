import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 
	
let user = global.db.data.users[m.sender]
 if (!user.autolevelup) //throw `${ag}ðð ðžðððððððð ððððž ðŋðððžðūððððžðŋð ððð *#on autonivel* ððžððž ðžðūððððžð`
  return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
	  
m.reply(`
*âââââ· ððððð*
âĒ  ðððĄððððĐððððĪðĢððĻ ðĻðŠððð§ðĐð ðð ðĢððŦððĄ ð 
âĒ  ððððŠðĖ ððĻðĖ ðĨģðĪ
âĒ ðððŦððĄ ððĢðĐðð§ððĪð§: *${before}*
âĒ ðððŦððĄ ðððĐðŠððĄ: *${user.level}*
âââââââââââââââ
*ðūðŠðĖðĢðĐðĪðĻ ðĒðĖðĻ ððĢðĐðð§ðððĐðŠĖððĻ ððĪðĢ ððð ððĪðĄðððĪðĐ-ððŋ, ðĒððŪðĪð§ ðĻðð§ðĖ ðĐðŠ ðĢððŦððĄ!!!*
`.trim())
    }
}		
//export const disabled = false 
