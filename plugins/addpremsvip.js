const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah,dan masukkan nomor untuk di verivikasi !'
  if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Done berhasil added User✅*\n\n*Nomor : wa.me/${response}("@s.whatsapp.net")[0]}\n*Expired:* Unlimited\n\nNOTE:Nikmati Premiumnya*Thanks For Added Premium !*`)
   } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprems vip<nomor>']
handler.tags = ['owner']
handler.command = /^addpremsvip$/i
handler.rowner = true

module.exports = handler