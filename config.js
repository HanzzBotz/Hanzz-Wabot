/*Thanks To Allah SWT
Thanks to Nurutomo
Thanks To Nathan
Thanks To Hanzz
Thanks To Penyedia Apikey Dan Fitur"
────────────────────────────────────────────────────────────────────────────────────────                                                                                                                                                                                                                                                                */
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/CiypUhAJYSg9PCOVrVKBLQ, https://chat.whatsapp.com/KrIEwXTyhBE5FBweOsPOfZ']
global.channelYT = ['https://youtube.com/channel/UCjfQUhw550WDZv31eJQaehw'] 
global.creator = ['6281212083267']// Put your number here
global.owner = ['6281212083267','6283833155781','62882015554955','6283895683698','62857721057781']// Put your number here
global.mods = ['6281212083267','6283833155781'] // Want some help?
global.prems = ['6287886674599', '6281212083267','6285947322310','6281388218284','6281283408836','6288211419255','62882015554955','6281244706456','6283895683698','6282116171244','6283893299648','6283111943089','6285722273751','628118431209','6283821103522','6283178535639'] // Premium user has unlimited limit

global.wait = fs.readFileSync('./sticker/wait.webp')
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
global.wm = '© ʜᴀɴᴢᴢ ʙᴏᴛᴢ ʙy ʜᴀɴᴢᴢ-ᴋᴜɴ'
global.logo = 'https://telegra.ph/file/70c8f28d7bd2f2e021e16.jpg'
global.image = 'https://telegra.ph/file/f7860422fe7e9782b4c9e.jpg'
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto.xyz',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Hanzzkun: 'https://hanzz-web.herokuapp.com',
  amel: 'https://melcanz.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto.xyz': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://hanzz-web.herokuapp.com': 'HanzzKey',
  'https://melcanz.com': 'Subscribe MelcanzYT'
}
// Sticker WM
global.packname = ''
global.author = ''

global.multiplier = 300 // The higher, The harder levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})