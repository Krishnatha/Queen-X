
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['916201114061'] //ur owner number
global.ownername = "Suraj^_^))" //ur owner name
global.ytname = "Suraj^_^))" //ur yt chanel name
global.socialm = "Suraj^_^))" //ur github or insta name
global.location = "indai, Jharkhand balumath •s᭄•ᴜ•ɽ•ᴀ•ᴊ᭄✧s᭄•ᴀ•ɴ•ᴊ•ᴜ᭄•^_^))" //ur location

//bot bomdy 
global.ownernomer = "916201114061" //ur number
global.premium = ['916201114061'] //ur premium number
global.botname = 'Suraj^_^))' //ur bot name
global.linkz = "https://chat.whatsapp.com/Fd5MPEBn7NQ1aviL4V5fa7" //your theme url which will be displayed on whatsapp
global.websitex = "Suraj" //ur website to be displayed
global.botscript = 'https://Suraj^_^))' //script link
global.themeemoji = "🛸"//ur theme emoji
global.packname = "   Suraj^_^))" //ur sticker watermark packname
global.author = "   Suraj^_^))\n\n\nA whatsapp bot developed by\nCYBORG ROBOT" //ur sticker watermark author
global.wm = "Suraj^_^))." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: '*👸🏻💭Suraj Here you go!*',
    admin: '*👸🏻💭Suraj This feature could be used by admins only!*',
    botAdmin: '*👸🏻💭Suraj Bot Must Be Admin First!*',
    premime: '*👸🏻💭Suraj Premium Special Features If You Want to Register Type Rent*',
    owner: '*👸🏻💭Suraj This feature could be used by owner only*',
    group: '*👸🏻💭Suraj Features Used Only For Groups!*',
    private: '*👸🏻💭SurajFeatures Used Only For Private Chat!*',
    bot: '*👸🏻💭SurajThis feature could be used by bot only*',
    wait: '*👸🏻💭Suraj Please wait...*',
    linkm: '*👸🏻💭Suraj Where is the link?*',
    endLimit: '*👸🏻💭Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours*',
    nsfw: '*👸🏻💭The nsfw feature has not been activated, please contact the admin to activate*',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
