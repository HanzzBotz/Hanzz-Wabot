let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    if (args[0] == '090613' || args[0] == '661528' || args[0] == '878588' || args[0] == '775636' || args[0] == '098786' || args[0] == '975485' || args[0] == '13450') {

    if (new Date - global.DATABASE.data.users[m.sender].lastcodereg > 889000000000) {
    if (new Date - global.DATABASE.data.users[m.sender].lastcodereg < 889000000000) throw `Anda sudah mengambill code register, Code register anda sudah kadaluarsa..`

    global.DATABASE.data.users[m.sender].exp += 100000
    global.DATABASE.data.users[m.sender].money += 50000
    global.DATABASE.data.users[m.sender].limit += 5
    global.DATABASE.data.users[m.sender].pet += 5
    global.DATABASE.data.users[m.sender].legendary += 3
    global.DATABASE.data.users[m.sender].diamond += 5
    global.DATABASE.data.users[m.sender].anggur += 5
    global.DATABASE.data.users[m.sender].jeruk += 5
    global.DATABASE.data.users[m.sender].apel += 5
    global.DATABASE.data.users[m.sender].pisang += 5
    global.DATABASE.data.users[m.sender].mangga += 5
    global.DATABASE.data.users[m.sender].potion += 5
    global.DATABASE.data.users[m.sender].lastcodereg = new Date * 1
    chatnye =`Selamat kamu mendapatkan :\n+100000 Exp\n+50000 Money \n+5 Limit\n+5 Pet Crate\n+3 Legendary\n+5 Diamond\n+5 Anggur\n+5 Jeruk\n+5 Apel\n+5 Mangga \n+5 Pisang\n+5 Potion`
   conn.reply(m.chat, chatnye, m)
} else conn.reply(m.chat, 'Kode anda sudah kadaluarsa, harap transaksi kembali..', m)
   } else {
        conn.reply(m.chat, `*KODE TIDAK VALID*`, m)
    }
}

handler.command = /^(codereg)$/i
handler.register = true
handler.limit = false

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}