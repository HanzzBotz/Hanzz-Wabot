let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Teksnya Mana Udin!!'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `https://hanzz-web.herokuapp.com/api/nulis?text=${response}&apikey=HanzzGanz`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nihh Pemalas`, m, false)
}
handler.help = ['nulis3'].map(v => v + ' <teks>')
handler.tags = ['nulis']
handler.command = /^(nulis3)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
