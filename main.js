/*
NOTE : JGN HPS DIBAWAH INI!!
AUTHOR : RAHMXBOT X RAHMAN GNTENG:V
WHATSAPP OWN : 085821676621
NOMOR BOT : 085821369324
NOTE : JGN HPS AUTHORNYA!!!

DONASI LAH BANG BIAR 
ADMINNYA UPDATE LAGI

Kalau Mau Donasi Silahkan Pilih Yah
Payment : Ovo/Gopay/Dana
Number Payment : Chat Owner Wa nya Di Atas
Pulsa : 081528965381

*/

require('./options/config')
const { default: liaacansConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./session/qrmd.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const qrcode = require('qrcode')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./message/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./message/myfunc')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.db = JSON.parse(fs.readFileSync('./json/database.json'))
global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})
}

async function startliaacans() {
const liaacans = liaacansConnect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['Liaa Cans Multi Device','Safari','1.0.0'],
auth: state
})

store.bind(liaacans.ev)
    
// anticall auto block
liaacans.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
let pa7rick = await liaacans.sendContact(callerId, global.owner)
liaacans.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
await sleep(8000)
await liaacans.updateBlockStatus(callerId, "block")
}
})

liaacans.ev.on('messages.upsert', async chatUpdate => {
//console.log(JSON.stringify(chatUpdate, undefined, 2))
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!liaacans.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(liaacans, mek, store)
require("./command/liaacans")(liaacans, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

// Group Update
liaacans.ev.on('groups.update', async pea => {
//console.log(pea)
// Get Profile Picture Group
try {
ppgc = await liaacans.profilePictureUrl(pea[0].id, 'image')
} catch {
ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let wm_fatih = { url : ppgc }
if (pea[0].announce == true) {
liaacans.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
} else if(pea[0].announce == true) {
liaacans.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message`, wm_fatih, [])
} else if (pea[0].restrict == true) {
liaacans.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
} else if (pea[0].restrict == true) {
liaacans.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message`, wm_fatih, [])
} else {
liaacans.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, `Group Settings Change Message`, wm_fatih, [])
}
})

liaacans.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await liaacans.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await liaacans.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

// Get Profile Picture Group
try {
ppgroup = await liaacans.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

if (anu.action == 'add') {
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
welcome = `𝙷𝚊𝚕𝚘 𝙺𝚊𝚔 @${num.split("@")[0]}
Silahkan Intro Terlebih Dahulu Ya!
┌─❖        *「 ᴋᴀʀᴛᴜ ɪɴᴛʀᴏ 」*
║➸ ɴᴀᴍᴀ       :
║➸ ᴜᴍᴜʀ       :
║➸ ᴋᴇʟᴀꜱ       :
║➸ ᴀꜱᴀʟ        :
║➸ ɢᴇɴᴅᴇʀ      :
║➸ ᴀɢᴀᴍᴀ       :
║➸ ʜᴏʙʙʏ       :
║➸ ꜱᴛᴀᴛᴜꜱ      :
╚══════════════════╝`
const buttonMessage = {
text: welcome,
footer: 'Note : Jangan Lupa Baca Desk Terlebih Dahulu\n© Created By Auliahost-BOT',
mentionedJid: [num],
buttons: [
{ buttonId: 'welcome cug', buttonText: {displayText: 'Semoga Betah Di Group Ini Ya️'}, type: 1}
],
headerType: 1
}
liaacans.sendMessage(anu.id, buttonMessage, {quoted:kafloc})
} else if (anu.action == 'remove') {
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
let pushname = m.pushname
left = `┌─❖「 𝙶𝙾𝙾𝙳 𝙱𝚈𝙴 @${num.split("@")[0]}  」
│✑ 𝙱𝙴𝙱𝙰𝙽 𝙶𝚁𝙾𝚄𝙿 𝙺𝙴𝙻𝚄𝙰𝚁
│✑ 𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝙱𝙰𝚆𝙰 𝙶𝙾𝚁𝙴𝙽𝙶𝙰𝙽 𝚈𝙰 𝙺𝙰𝙺! 
   └───────────────┈ ⳹`
const buttonMessage = {
text: left,
footer: '© Created By Auliahost-BOT',
mentionedJid: [num],
buttons: [
{ buttonId: 'left cug', buttonText: {displayText: 'Sayonaraa👋...️'}, type: 1}
],
headerType: 1
}
liaacans.sendMessage(anu.id, buttonMessage, {quoted:kafloc})
}
}
} catch (err) {
console.log(err)
}
})
	
// Setting
liaacans.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
    
liaacans.ev.on('contacts.update', update => {
for (let contact of update) {
let id = liaacans.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

liaacans.getName = (jid, withoutContact  = false) => {
id = liaacans.decodeJid(jid)
withoutContact = liaacans.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = liaacans.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === liaacans.decodeJid(liaacans.user.id) ?
liaacans.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}
    
liaacans.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await liaacans.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await liaacans.getName(i + '@s.whatsapp.net')}\nFN:${await liaacans.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:okeae2410@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/cak_haho\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
liaacans.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
    
liaacans.setStatus = (status) => {
liaacans.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}
	
liaacans.public = true

liaacans.serializeM = (m) => smsg(liaacans, m, store)

liaacans.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	    
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); liaacans.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startliaacans(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startliaacans(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); liaacans.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); liaacans.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startliaacans(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startliaacans(); }
else liaacans.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
console.log('Connected...', update)
})

liaacans.ev.on('creds.update', saveState)

// Add Other
/** Send List Messaage
  *
  *@param {*} jid
  *@param {*} text
  *@param {*} footer
  *@param {*} title
  *@param {*} butText
  *@param [*] sections
  *@param {*} quoted
  */
liaacans.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
title: title,
buttonText: butText,
sections
}
liaacans.sendMessage(jid, listMes, { quoted: quoted })
}

/** Send Button 5 Message
 * 
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} button
 * @returns 
 */
liaacans.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
let templateButtons = but
var templateMessage = {
text: text,
footer: footer,
templateButtons: templateButtons
}
liaacans.sendMessage(jid, templateMessage)
}

/** Send Button 5 Image
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} image
 * @param [*] button
 * @param {*} options
 * @returns
 */
liaacans.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
liaacans.sendMessage(jid, { image: img, caption: text, footer: footer, templateButtons: but, ...options })
}

  /** Send Button 5 Location
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} location
   * @param [*] button
   * @param {*} options
   */
  liaacans.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
  let bb = await liaacans.reSize(lok, 300, 150)
  liaacans.sendMessage(jid, { location: { jpegThumbnail: bb }, caption: text, footer: footer, templateButtons: but, ...options })
  }

/** Send Button 5 Video
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} Video
 * @param [*] button
 * @param {*} options
 * @returns
 */
liaacans.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
let lol = await liaacans.reSize(buf, 300, 150)
liaacans.sendMessage(jid, { video: vid, jpegThumbnail: lol, caption: text, footer: footer, templateButtons: but, ...options })
}

/** Send Button 5 Gif
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} Gif
 * @param [*] button
 * @param {*} options
 * @returns
 */
liaacans.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
let ahh = await liaacans.reSize(buf, 300, 150)
let a = [1,2]
let b = a[Math.floor(Math.random() * a.length)]
liaacans.sendMessage(jid, { video: gif, gifPlayback: true, gifAttribution: b, caption: text, footer: footer, jpegThumbnail: ahh, templateButtons: but, ...options })
}

/**
* 
* @param {*} jid 
* @param {*} buttons 
* @param {*} caption 
* @param {*} footer 
* @param {*} quoted 
* @param {*} options 
*/
liaacans.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
/*liaacans.sendMessage(jid, buttonMessage, { quoted, ...options })*/
liaacans.sendMessage(jid, {text: text}, {
         quoted,
         ...options
   })
}

/**
* 
* @param {*} jid 
* @param {*} text 
* @param {*} quoted 
* @param {*} options 
* @returns 
*/
liaacans.sendText = (jid, text, quoted = '', options) => liaacans.sendMessage(jid, { text: text, ...options }, { quoted })

/**
* 
* @param {*} jid 
* @param {*} path 
* @param {*} caption 
* @param {*} quoted 
* @param {*} options 
* @returns 
*/
liaacans.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await liaacans.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

/**
* 
* @param {*} jid 
* @param {*} path 
* @param {*} caption 
* @param {*} quoted 
* @param {*} options 
* @returns 
*/
liaacans.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await liaacans.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

/**
* 
* @param {*} jid 
* @param {*} path 
* @param {*} quoted 
* @param {*} mime 
* @param {*} options 
* @returns 
*/
liaacans.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await liaacans.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

/**
* 
* @param {*} jid 
* @param {*} text 
* @param {*} quoted 
* @param {*} options 
* @returns 
*/
liaacans.sendTextWithMentions = async (jid, text, quoted, options = {}) => liaacans.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

/**
* 
* @param {*} jid 
* @param {*} path 
* @param {*} quoted 
* @param {*} options 
* @returns 
*/
liaacans.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await liaacans.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

/**
* 
* @param {*} jid 
* @param {*} path 
* @param {*} quoted 
* @param {*} options 
* @returns 
*/
liaacans.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
        
await liaacans.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
	
/**
* 
* @param {*} message 
* @param {*} filename 
* @param {*} attachExtension 
* @returns 
*/
liaacans.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

liaacans.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
        
return buffer
} 
    
/**
* 
* @param {*} jid 
* @param {*} path 
* @param {*} filename
* @param {*} caption
* @param {*} quoted 
* @param {*} options 
* @returns 
*/
liaacans.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await liaacans.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./message/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await liaacans.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

/**
* 
* @param {*} jid 
* @param {*} message 
* @param {*} forceForward 
* @param {*} options 
* @returns 
*/
liaacans.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}

diablo.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
listMessage :{
title: title,
description: text,
buttonText: buttext,
footerText: footer,
listType: "  SELECT  ",
sections: but,
listType: 1
}
}), options)
diablo.relayMessage(jid, template.message, { messageId: template.key.id })
}

liaacans.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
liaacans.relayMessage(jid, template.message, { messageId: template.key.id })
}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await liaacans.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

liaacans.cMod = (jid, copy, text = '', sender = liaacans.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === liaacans.user.id

return proto.WebMessageInfo.fromObject(copy)
}


/**
* 
* @param {*} path 
* @returns 
*/
liaacans.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data
}

}

return liaacans
}

startliaacans()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})