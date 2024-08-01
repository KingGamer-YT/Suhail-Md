const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url hre,
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_19_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICA2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzksXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIMzNTUG5UMEZpNDVZTE0zM3dlaVBhdmtFcGFELytlbENwY1Jhbi9BS1lZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5Njc5NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY5NTEzMEExMjBDNEU3QjZERUYzRDg0REYxNTNERTFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQxNzU2NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfOEt3TXZBUlNrS01xNEo2ZXZXNW53XCIsXG4gIFwicGhvbmVJZFwiOiBcImFmOGI2MWEwLTlmZjMtNGM5ZC1hMDM2LWQzNjM2OTI2YTc4ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDE0NSxcbiAgICAgIDQ2LFxuICAgICAgNTcsXG4gICAgICAxNDMsXG4gICAgICAzNSxcbiAgICAgIDIxNixcbiAgICAgIDEwMixcbiAgICAgIDI0MCxcbiAgICAgIDg5LFxuICAgICAgMTI4LFxuICAgICAgODIsXG4gICAgICAxOTMsXG4gICAgICA3NCxcbiAgICAgIDU2LFxuICAgICAgNDgsXG4gICAgICAxOTcsXG4gICAgICAyMzksXG4gICAgICAyMzYsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDE2MSxcbiAgICAgIDIxMSxcbiAgICAgIDIwOCxcbiAgICAgIDEwLFxuICAgICAgOTIsXG4gICAgICA0LFxuICAgICAgMjAxLFxuICAgICAgMTEyLFxuICAgICAgMjExLFxuICAgICAgNDIsXG4gICAgICAzMyxcbiAgICAgIDI0MixcbiAgICAgIDU3LFxuICAgICAgMTYsXG4gICAgICAxNzIsXG4gICAgICAzOSxcbiAgICAgIDQsXG4gICAgICAxNjAsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3U244NENFSmFEcUxVR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzc0WHNZRmJ6ZDM4dndNaXRsTVQxOWdNZzR4ek94aE1FT0JFbTNaWWhpQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxaHR0Y2dtdmxxbTNRajloVzg0RlJmZlZvMWlXemg3TGgvOTdpVE1JY1JhZXlONk9WTkZNOEhRNlJPb0Fjc1BQa002TzZjdFdmOWhUOFZsakdrUVpCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVYVRrUjQ0MERvYmZhY3pwNTJySE1KcXVHRXc0UjRWM3YvY0VsQmxrK05UWkdML3hobEhxeVZzTWhRdHpOK0VVTzkvWWExYVFTWTlGb1Q2cEs4bjVDUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjU5Njc5NjQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM1MzgxNjIyNjI4NTM0OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU1VOSfCfpbfwn4++LlnjgZfCsEtSTcKwXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI1OTY3OTY0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQxNzU2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpTdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlN0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiV2tpb1crTXUrT3FERThsU25uNzdNdklxWWkzQmdRK05nMmxOV1QvVm5wcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDA5NjcyMjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzQ4Nzc4NjU3MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpTdS5qc29uIjogIntcImtleURhdGFcIjpcIlkzVmE2VWtzN3o0U3hZTmczcXJtS0hkbS9RYjB2N2tmY3lBRWQzcHBvU1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzAwOTY3MjI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKU3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKOXlaLzNBWk84d1JNU3E5bjNFdk5ObVJodlc2aUtEM1Qva3FUcEs5dTJVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwMDk2NzIzMCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjQ2OTQzNjMzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBVUFBSlN2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwielEvS290L1BVd2tiZUQyazdzekhsUTJjc0VVRXlaYmVmRTVzNFh4TjR2TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDA5NjcyMzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY0NjI1MDU0M1wifSIKfQ=="  // PUT your SESSION_ID 


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
