let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let ext = `
┏━━⬣ _*RANDOM MENU*_
┃
┃⬡ *.bacot*
┃⬡ *.bucin*
┃⬡ *.ceritahorror*
┃⬡ *.cerpen (Limit)*
┃⬡ *.cry*
┃⬡ *.faktaunik*
┃⬡ *.gombal*
┃⬡ *.hug*
┃⬡ *.katailham*
┃⬡ *.kiss*
┃⬡ *.murothal*
┃⬡ *.pantun*
┃⬡ *.puisi*
┃⬡ *.syair*
┃⬡ *.quotes*
┃⬡ *.katabijak*
┃⬡ *.quran*
┃⬡ *.renungan*
┃⬡ *.sholawat*
┃⬡ *.tahlil*
┃⬡ *.sindiran*
┃⬡ *.slap*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┃⬡ *Nurotomo (author)*
┃⬡ *Ibnu NR (pengembang)*
┃⬡ *RC047 (pengembang)*
┃⬡ *Caliph (pengembang)*
┃⬡ *Raku Gans (pengembang)*
┃⬡ *Hanzz-kun (pengembang)*
┃⬡ *All Mastah*
┗⬣
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Random+Menu`)).buffer(), ext.trim(), 'Hanzz Botz By Hanzz-kun', 'Rules', '.rules', 'Back', '.menu',m)
    
  }
handler.help = ['animemenu']
handler.tags = ['nande']
handler.command = /^randommenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

