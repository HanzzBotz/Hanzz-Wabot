let { getBuffer } = require('../lib/functions')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap masukan query', m)

 await m.reply('Searching...')
let str = `
*Hasil Pencarian :*

${text}
`.trim()

  let hasil = await getBuffer('https://hanzz-web.herokuapp.com/api/pinterest?query=' + text)
let cita = arr[Math.floor(Math.random() * arr.length)]
     conn.sendFile(m.chat, cita, 'foto.jpg', str, m)
}
handler.help = ['pinterest <query>']
handler.tags = ['image']
handler.command = /^(pinterest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
