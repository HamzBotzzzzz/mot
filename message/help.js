/*
CREDIT BY : AULIA RAHMAN
NOTE : JGN DI HPS CREDITNYA YA AJG!!
EDIT MENU NYA DISINI YAK!

NOTE : JANGAN DI HAPUS TQ YA AJG!
MINIMAL ADA PEMBUATNYA LAH KAK

Thanks To :
• Allah Swt
• Nabi Muhammad
• Aulia Rahman
• Lexxy Official
• NazeDev
• Zeroyt7
• Kayla
• Dan Pengguna Bot
*/
require('../options/config')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')


exports.menu = (prefix, pushname, isPremium,  ucapanWaktu, hariini, barat, tengah, timur) => {
return `Hy Kak ${pushname}
*${ucapanWaktu}*
┌─❖ ⌜ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 ⌟
├ *Nama* : ${pushname}
├ *Premium* : ${isPremium ? '✅' : `❌`}
├ *Limit* : ${isPremium ? 'UNLIMITED' : `〽️${db.data.users[m.sender].limit}`}
├ *Mode* : ${liaacans.public ? 'Public' : `Self`}
├ *Prefix* :「 MULTI-PREFIX 」
└─❖

┌─❖ ⌜ 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 ⌟
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
└─❖

❖ [ List All Menu ] ❖

┌─❖ ⌜ Group Menu ⌟
├│${prefix}kick
├│${prefix}add
├│${prefix}promote
├│${prefix}demote
├│${prefix}delete
├│${prefix}delete2
├│${prefix}setname
├│${prefix}setdesc
├│${prefix}listonline
├│${prefix}setppgrup
├│${prefix}revoke
├│${prefix}tagall
├│${prefix}tagme
├│${prefix}vote
├│${prefix}hidetag
├│${prefix}afk
├│${prefix}ephemeral
├│${prefix}upvote
├│${prefix}devote
├│${prefix}cekvote
├│${prefix}delvote
├│${prefix}group
├│${prefix}editinfo
├│${prefix}opentime
├│${prefix}closetime
├│${prefix}mute
├│${prefix}antilink
├│${prefix}antivirtex
├│${prefix}antilinkig
├│${prefix}antiwame
├│${prefix}antibadword
├│${prefix}autosticker
├│${prefix}autostickerpc
├│${prefix}antiviewonce
└─❖
┌─❖ ⌜ Fun Menu ⌟
├│${prefix}jadian
├│${prefix}jodohku
├│${prefix}apakah
├│${prefix}bisakah
├│${prefix}readmore
├│${prefix}kapankah
├│${prefix}gbtku
├│${prefix}menfess
├│${prefix}tictactoe
├│${prefix}delttt
├│${prefix}family100
├│${prefix}tebak
├│${prefix}math
├│${prefix}suitpvp
└─❖
┌─❖ ⌜ Converter Menu ⌟
├│${prefix}sticker
├│${prefix}smeme
├│${prefix}tourl
├│${prefix}toimage
├│${prefix}tovideo
├│${prefix}tomp3
├│${prefix}stickerwm
├│${prefix}emojimix
├│${prefix}emojimix2
└─❖
┌─❖ ⌜ Random Menu ⌟
├│${prefix}pinterest
├│${prefix}wallpaper
├│${prefix}couple
├│${prefix}motivasi
├│${prefix}nomorhoki
├│${prefix}artimimpi
├│${prefix}ramalanjodoh
├│${prefix}ramalanjodohbali
├│${prefix}suamiistri
├│${prefix}ramalancinta
├│${prefix}artinama
├│${prefix}kecocokannama
├│${prefix}kecocokanpasangan
├│${prefix}jadianpernikahan
├│${prefix}sifatusaha
├│${prefix}rezeki
├│${prefix}pekerjaan
├│${prefix}ramalannasib
├│${prefix}potensipenyakit
├│${prefix}artitarot
├│${prefix}fengshui
├│${prefix}haribaik
├│${prefix}harisangar
├│${prefix}harinaas
├│${prefix}nagahari
├│${prefix}arahrejeki
├│${prefix}peruntungan
├│${prefix}wetonjawa
├│${prefix}karakter
├│${prefix}keberuntungan
├│${prefix}memancing
├│${prefix}masasubur
├│${prefix}zodiak
├│${prefix}quotesanime
├│${prefix}google
├│${prefix}wikimedia
├│${prefix}ai
└─❖
┌─❖ ⌜ Primbon Menu ⌟
├│${prefix}patrick
├│${prefix}doge
├│${prefix}slove
├│${prefix}gura
├│${prefix}paimon
├│${prefix}sanime
├│${prefix}mukelu
└─❖
┌─❖ ⌜ Download Menu ⌟
├│${prefix}play
├│${prefix}yts
├│${prefix}ytmp3
├│${prefix}ytmp4
├│${prefix}mediafire
├│${prefix}tiktokmp3
├│${prefix}igdl
├│${prefix}joox
├│${prefix}soundcloud
├│${prefix}twitter
├│${prefix}twittermp3
├│${prefix}fbdl
├│${prefix}pindl
├│${prefix}umma
└─❖
┌─❖ ⌜ Charger Menu ⌟
├│${prefix}bass
├│${prefix}blown
├│${prefix}deep
├│${prefix}earrape
├│${prefix}fast
├│${prefix}fat
├│${prefix}nightcore
├│${prefix}reverse
├│${prefix}robot
├│${prefix}slow
├│${prefix}tupai
└─❖
┌─❖ ⌜ Islamic Menu ⌟
├│${prefix}iqra
├│${prefix}hadist
├│${prefix}alquran
├│${prefix}juzamma
├│${prefix}tafsirquran
└─❖
┌─❖ ⌜ Database Menu ⌟
├│${prefix}setcmd
├│${prefix}listcmd
├│${prefix}delcmd
├│${prefix}lockcmd
├│${prefix}addmsg
├│${prefix}listmsg
├│${prefix}getmsg
├│${prefix}delmsg
└─❖
┌─❖ ⌜ Anonymous Menu ⌟
├│${prefix}anonymous
├│${prefix}start
├│${prefix}next
├│${prefix}keluar
└─❖
┌─❖ ⌜ Maker Menu ⌟
├│${prefix}crossfire
├│${prefix}ffcover
├│${prefix}beach
├│${prefix}igcertificate
├│${prefix}ytcertificate
├│${prefix}blackpink
├│${prefix}glass
├│${prefix}galaxy
├│${prefix}neon
└─❖
┌─❖ ⌜ Bug Menu (khusus owner) ⌟
├│${prefix}inibug
├│${prefix}poll
├│${prefix}troli2
├│${prefix}santetdia
├│${prefix}santetgc
├│${prefix}docu
├│${prefix}duc
├│${prefix}bug1
├│${prefix}bug2
├│${prefix}bug3
├│${prefix}bug4
├│${prefix}bug5
├│${prefix}bug6
├│${prefix}bug7
├│${prefix}lokas
├│${prefix}buglokas
├│${prefix}buginvite
├│${prefix}troli
├│${prefix}catalog
├│${prefix}cataloggc
├│${prefix}ampas1
├│${prefix}ampas2
├│${prefix}bugstik
├│${prefix}bugie
├│${prefix}bugtag
└─❖
┌─❖ ⌜ SOUND MENU [KHUSUS PREM] ⌟
├│${prefix}sound1
├│${prefix}sound2
├│${prefix}sound3
├│${prefix}sound4
├│${prefix}sound5
├│${prefix}sound6
├│${prefix}sound7
├│${prefix}sound8
├│${prefix}sound9
├│${prefix}sound10
├│${prefix}sound11
├│${prefix}sound12
├│${prefix}sound13
├│${prefix}sound14
├│${prefix}sound15
├│${prefix}sound16
├│${prefix}sound17
├│${prefix}sound18
├│${prefix}sound19
├│${prefix}sound20
├│${prefix}sound21
├│${prefix}sound22
├│${prefix}sound23
├│${prefix}sound24
├│${prefix}sound25
├│${prefix}sound26
├│${prefix}sound27
├│${prefix}sound28
├│${prefix}sound29
├│${prefix}sound30
├│${prefix}sound31
├│${prefix}sound32
├│${prefix}sound33
├│${prefix}sound34
├│${prefix}sound35

NOTE : FITUR SOUND MENU NYA 74 YA, TAPI OWNERNYA MLES NGETIK:V
└─❖
┌─❖ ⌜ Owner Menu ⌟
├│${prefix}ping
├│${prefix}owner
├│${prefix}setppbot
├│${prefix}addprem
├│${prefix}delprem
├│${prefix}listpc
├│${prefix}listgc
├│${prefix}creategc (fix aj)
├│${prefix}sc
├│${prefix}join
├│${prefix}leave
├│${prefix}block
├│${prefix}unblock
├│${prefix}bc
├│${prefix}bcgc
├│${prefix}self
├│${prefix}public
└─❖
┌─❖ ⌜ Panel Menu ⌟
├│${prefix}addsrv
├│${prefix}delsrv
├│${prefix}listsrv
├│${prefix}detsrv
├│${prefix}addusr
├│${prefix}delusr
├│${prefix}listusr
├│${prefix}detusr
└─❖
┌─❖ ⌜ Main Menu ⌟
├│${prefix}listprem
├│${prefix}myip
├│${prefix}linkpoi
├│${prefix}carbon
├│${prefix}shortlink
├│${prefix}tinyurl
├│${prefix}sewabot
├│${prefix}spamcall
├│${prefix}tts
├│${prefix}ssweb-pc
├│${prefix}infogempa
├│${prefix}tts
├│${prefix}rules
├│${prefix}item
├│${prefix}additem
├│${prefix}delitem
├│${prefix}changeitem
└─❖`
}

exports.funMenu = (prefix) => {
return `┌─❖ ⌜ FUN MENU ⌟
├│${prefix}jadian
├│${prefix}jodohku
├│${prefix}apakah
├│${prefix}bisakah
├│${prefix}readmore
├│${prefix}kapankah
├│${prefix}gbtku
├│${prefix}menfess
├│${prefix}tictactoe
├│${prefix}delttt
├│${prefix}family100
├│${prefix}tebak
├│${prefix}math
├│${prefix}suitpvp
└─❖`
}

exports.gcMenu = (prefix) => {
return `┌─❖ ⌜ GROUP MENU ⌟
├│${prefix}kick
├│${prefix}add
├│${prefix}promote
├│${prefix}demote
├│${prefix}listonline
├│${prefix}delete
├│${prefix}delete2
├│${prefix}setname
├│${prefix}setdesc
├│${prefix}setppgrup
├│${prefix}revoke
├│${prefix}tagall
├│${prefix}tagme
├│${prefix}vote
├│${prefix}hidetag
├│${prefix}afk
├│${prefix}ephemeral
├│${prefix}upvote
├│${prefix}devote
├│${prefix}cekvote
├│${prefix}delvote
├│${prefix}group
├│${prefix}editinfo
├│${prefix}opentime
├│${prefix}closetime
├│${prefix}mute
└─❖`
}

exports.convertMenu = (prefix) => {
return `┌─❖ ⌜ Converter Menu ⌟
├│${prefix}sticker
├│${prefix}smeme
├│${prefix}tourl
├│${prefix}toimage
├│${prefix}tovideo
├│${prefix}tomp3
├│${prefix}stickerwm
├│${prefix}emojimix
├│${prefix}emojimix2
└─❖`
}

exports.randomMenu = (prefix) => {
return `┌─❖ ⌜ Random Menu ⌟
├│${prefix}pinterest
├│${prefix}wallpaper
├│${prefix}couple
├│${prefix}motivasi
├│${prefix}nomorhoki
├│${prefix}artimimpi
├│${prefix}ramalanjodoh
├│${prefix}ramalanjodohbali
├│${prefix}suamiistri
├│${prefix}ramalancinta
├│${prefix}artinama
├│${prefix}kecocokannama
├│${prefix}kecocokanpasangan
├│${prefix}jadianpernikahan
├│${prefix}sifatusaha
├│${prefix}rezeki
├│${prefix}pekerjaan
├│${prefix}ramalannasib
├│${prefix}potensipenyakit
├│${prefix}artitarot
├│${prefix}fengshui
├│${prefix}haribaik
├│${prefix}harisangar
├│${prefix}harinaas
├│${prefix}nagahari
├│${prefix}arahrejeki
├│${prefix}peruntungan
├│${prefix}wetonjawa
├│${prefix}karakter
├│${prefix}keberuntungan
├│${prefix}memancing
├│${prefix}masasubur
├│${prefix}zodiak
├│${prefix}quotesanime
├│${prefix}google
├│${prefix}wikimedia
├│${prefix}ai
└─❖`
}

exports.downloadMenu = (prefix) => {
return `┌─❖ ⌜ Download Menu ⌟
├│${prefix}play
├│${prefix}yts
├│${prefix}ytmp3
├│${prefix}ytmp4
├│${prefix}mediafire
├│${prefix}tiktokmp3
├│${prefix}igdl
├│${prefix}joox
├│${prefix}soundcloud
├│${prefix}twitter
├│${prefix}twittermp3
├│${prefix}fbdl
├│${prefix}pindl
├│${prefix}umma
└─❖`
}

exports.ownerMenu = (prefix) => {
return `┌─❖ ⌜ Owner Menu ⌟
├│${prefix}createcp
├│${prefix}listcp
├│${prefix}terminate
├│${prefix}ping
├│${prefix}owner
├│${prefix}sc
├│${prefix}join
├│${prefix}setppbot
├│${prefix}addprem
├│${prefix}delprem
├│${prefix}listgc
├│${prefix}listpc
├│${prefix}creategc
├│${prefix}leave
├│${prefix}block
├│${prefix}unblock
├│${prefix}bc
├│${prefix}bcgc
├│${prefix}self
├│${prefix}public
└─❖`
}

exports.anonymousMenu = (prefix) => {
return `┌─❖ ⌜ Anonymous Menu ⌟
├│${prefix}anonymous
├│${prefix}start
├│${prefix}next
├│${prefix}keluar
└─❖`
}

exports.databaseMenu = (prefix) => {
return `┌─❖ ⌜ Database Menu ⌟
├│${prefix}setcmd
├│${prefix}listcmd
├│${prefix}delcmd
├│${prefix}lockcmd
├│${prefix}addmsg
├│${prefix}listmsg
├│${prefix}getmsg
├│${prefix}delmsg
└─❖`
}

exports.islamicMenu = (prefix) => {
return `┌─❖ ⌜ Islamic Menu ⌟
├│${prefix}iqra
├│${prefix}hadist
├│${prefix}alquran
├│${prefix}juzamma
├│${prefix}tafsirquran
└─❖`
}

exports.chargerMenu = (prefix) => {
return `┌─❖ ⌜ Charger Menu ⌟
├│${prefix}bass
├│${prefix}blown
├│${prefix}deep
├│${prefix}earrape
├│${prefix}fast
├│${prefix}fat
├│${prefix}nightcore
├│${prefix}reverse
├│${prefix}robot
├│${prefix}slow
├│${prefix}tupai
└─❖`
}

exports.makerMenu = (prefix) => {
return `┌─❖ ⌜ Maker Menu ⌟
├│${prefix}crossfire
├│${prefix}ffcover
├│${prefix}beach
├│${prefix}igcertificate
├│${prefix}ytcertificate
├│${prefix}blackpink
├│${prefix}glass
├│${prefix}galaxy
├│${prefix}neon
└─❖`
}

exports.bugMenu = (prefix) => {
return `┌─❖ ⌜ Bug Menu (khusus owner) ⌟
├│${prefix}inibug
├│${prefix}poll
├│${prefix}troli2
├│${prefix}santetdia
├│${prefix}santetgc
├│${prefix}docu
├│${prefix}duc
├│${prefix}bug1
├│${prefix}bug2
├│${prefix}bug3
├│${prefix}bug4
├│${prefix}bug5
├│${prefix}bug6
├│${prefix}bug7
├│${prefix}lokas
├│${prefix}buglokas
├│${prefix}buginvite
├│${prefix}troli
├│${prefix}catalog
├│${prefix}cataloggc
├│${prefix}ampas1
├│${prefix}ampas2
├│${prefix}bugstik
├│${prefix}bugie
├│${prefix}bugtag
└─❖`
}

exports.soundMenu = (prefix) => {
return `┌─❖ ⌜ SOUND MENU [KHUSUS PREM] ⌟
├│${prefix}sound1
├│${prefix}sound2
├│${prefix}sound3
├│${prefix}sound4
├│${prefix}sound5
├│${prefix}sound6
├│${prefix}sound7
├│${prefix}sound8
├│${prefix}sound9
├│${prefix}sound10
├│${prefix}sound11
├│${prefix}sound12
├│${prefix}sound13
├│${prefix}sound14
├│${prefix}sound15
├│${prefix}sound16
├│${prefix}sound17
├│${prefix}sound18
├│${prefix}sound19
├│${prefix}sound20
├│${prefix}sound21
├│${prefix}sound22
├│${prefix}sound23
├│${prefix}sound24
├│${prefix}sound25
├│${prefix}sound26
├│${prefix}sound27
├│${prefix}sound28
├│${prefix}sound29
├│${prefix}sound30
├│${prefix}sound31
├│${prefix}sound32
├│${prefix}sound33
├│${prefix}sound34
├│${prefix}sound35

NOTE : FITUR SOUND MENU NYA 74 YA, TAPI OWNERNYA MLES NGETIK:V
└─❖`
}

exports.donasiMenu = () => {
return `*「 🐰DONASI BY LIAACANS🐰 」*

• Payment : Ovo/Dana/Gopay/Pulsa
• DANA  : ${global.dana}
• GOPAY : ${global.gopay}
• OVO    : ${global.ovo}
• PULSA  : ${global.pulsa}

Donasi Ya Kak!! Biar Bot On Terus!`
}

exports.mainMenu = (prefix) => {
return `┌─❖ ⌜ Main Menu ⌟
├│${prefix}listprem
├│${prefix}myip
├│${prefix}linkpoi
├│${prefix}carbon
├│${prefix}shortlink
├│${prefix}tinyurl
├│${prefix}sewabot
├│${prefix}tts
├│${prefix}spamcall
├│${prefix}ssweb-pc
├│${prefix}ssweb-hp
├│${prefix}infogempa
├│${prefix}tts
├│${prefix}rules
├│${prefix}item
├│${prefix}additem
├│${prefix}delitem
├│${prefix}changeitem
├│${prefix}runtime
└─❖`
}

exports.sistemMenu = (prefix) => {
return `*┌─❖ ⌜  SISTEM MENU  ｣*
├│${prefix}antilink
├│${prefix}antilinkig
├│${prefix}antiwame
├│${prefix}antivirtex
├│${prefix}antibadword
├│${prefix}autosticker
├│${prefix}autostickerpc
├│${prefix}antiviewonce
└─❖`
}

exports.panelMenu = (prefix) => {
return `*˗ˏˋ┌─❖「 PANEL MENU 」*
˗ˏˋ🧺 ៵ ࣪  *${prefix}addsrv*
˗ˏˋ🧺 ៵ ࣪  *${prefix}delsrv*
˗ˏˋ🧺 ៵ ࣪  *${prefix}listsrv*
˗ˏˋ🧺 ៵ ࣪  *${prefix}detsrv*
˗ˏˋ🧺 ៵ ࣪  *${prefix}addusr*
˗ˏˋ🧺 ៵ ࣪  *${prefix}delusr*
˗ˏˋ🧺 ៵ ࣪  *${prefix}listusr*
˗ˏˋ🧺 ៵ ࣪  *${prefix}detusr*
˗ˏˋ└─❖`
}

exports.textPro = (prefix) => {
return `┌──⭓ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
└───────⭓`
}

////////////////// BATAS NGEUPDATE /////////////////////
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*
NOTE : JANGAN DI HAPUS TQ YA AJG!
MINIMAL ADA PEMBUATNYA LAH KAK

Thanks To :
• Allah Swt
• Nabi Muhammad
• Aulia Rahman
• Lexxy Official
• NazeDev
• Zeroyt7
• Kayla
• Dan Pengguna Bot
*/
