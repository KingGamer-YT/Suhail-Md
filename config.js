const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_41_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTY4LFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICA1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2TWx5dXhPTG05a2tGMEFKYmJpbE1pZm42Wi9YUkpYTTBLNGRtSGJRTnh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjc3MjU5ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkwQTA5Q0JDMTE1QTU5RkY3Q0RDQzM5QzhENzlCNDg1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjMzNjA3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjc3MjU5ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNENDVBODAzMzE1QkNCNjc2MjVCNjUyOUY4Njk2MzMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjMzNjA3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjc3MjU5ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQwMEMzQzZDNzY3QTM4MUYyRkVGODU4Mzc2Mzc1QzBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjMzNjA4MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDR3RxbHZValF4NmR0dTBpbUFYVTZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImNmNDg5ODZhLThkNDAtNGZiNi05NWIxLThiYzRiNzM2YjA3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICAyMTIsXG4gICAgICAxNTcsXG4gICAgICAyLFxuICAgICAgMTksXG4gICAgICA3MCxcbiAgICAgIDI0NCxcbiAgICAgIDYwLFxuICAgICAgNzYsXG4gICAgICA1NSxcbiAgICAgIDI0NSxcbiAgICAgIDY2LFxuICAgICAgMTkyLFxuICAgICAgMTgwLFxuICAgICAgMjA2LFxuICAgICAgNDAsXG4gICAgICAyMTksXG4gICAgICAzNixcbiAgICAgIDIwMixcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxODAsXG4gICAgICAyMDUsXG4gICAgICAyMDIsXG4gICAgICAxMDksXG4gICAgICAxOTQsXG4gICAgICA1NSxcbiAgICAgIDExOSxcbiAgICAgIDUyLFxuICAgICAgNzEsXG4gICAgICAxNjcsXG4gICAgICAxMjAsXG4gICAgICAyMjAsXG4gICAgICAxNzcsXG4gICAgICAxMCxcbiAgICAgIDU3LFxuICAgICAgNjIsXG4gICAgICAxMzEsXG4gICAgICA0MSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0luZDA0RUZFTVNHbzdVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiblJPbzlWQi84Nkt0WUtCMThOMTR1Y0NzU2VBbWEzeG95SmhjTkoweCtIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNRmtIZTJKSW1GVmk3M3AyaklhUlpQdDdKOXh1VFpoQ0EwM2NqaDlnRU1aMkREY3pDY04vR3hSeFpXMFc3bVhaUy92RlRlZkFWeWEycnBmRG5QK3BEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNTW0yVkVxOUxtdmdPRzFzaVVsdHdmck1zOGwvdjhhUjh3aUFPbWd1U0tLN3JJV2lLdGFBTGRoNEIrU0xEVjEvcmlDdWhLa1NHM29RRFAySkpvek9pQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjc3MjU5ODc6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjczMzY5ODM4NTEwMjA6OEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJEQF9Kb2tlclwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2NzcyNTk4Nzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjMzNjA3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVKS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUpLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGk1K0NuVmxYeU1BOHBmMzEzRHFackpRUHdZek41UHdIOHhIWkpEZEdDdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzQ1NjQ2MjE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE2MzM2NzM4MDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
