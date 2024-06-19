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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917718606171";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_52_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDc3LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICAyMixcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU3LFxuICAgICAgICA3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk1LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRDK3NHOEFTUkdxSUlNK0NMc2s1NUNlSFI1eEFObmJ1ODBpazJJbUNObXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxYSnh2SE41U0xHbDE4dFZjbVUtRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWU5YTRlZmQtM2ZmYy00MDQ4LWFiNjktYjU1NDMzNDE4MThkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDM0LFxuICAgICAgMjE3LFxuICAgICAgMTM1LFxuICAgICAgMjQwLFxuICAgICAgMTQ1LFxuICAgICAgMjEyLFxuICAgICAgMjM4LFxuICAgICAgMTQ0LFxuICAgICAgMTUzLFxuICAgICAgMTI1LFxuICAgICAgMjM0LFxuICAgICAgMjYsXG4gICAgICAxODMsXG4gICAgICAyMTgsXG4gICAgICA1OSxcbiAgICAgIDYwLFxuICAgICAgMTYsXG4gICAgICAyNDQsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMTYsXG4gICAgICAxMjcsXG4gICAgICAxNDIsXG4gICAgICAyNSxcbiAgICAgIDE4MixcbiAgICAgIDExOSxcbiAgICAgIDIzNSxcbiAgICAgIDE0MCxcbiAgICAgIDIyOCxcbiAgICAgIDE3MSxcbiAgICAgIDYxLFxuICAgICAgNTAsXG4gICAgICAxNDcsXG4gICAgICAxMzIsXG4gICAgICA1MCxcbiAgICAgIDMyLFxuICAgICAgMTI4LFxuICAgICAgMjI0LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc2VExNMktBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc3MTg2MDYxNzE6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkwMTMwMzA4MTgyMTg5Ojk2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t1SytxVUJFTnZSekxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRXpESmlDSE9HWW11OFgrMFNKa0JZYmVOSm1RTWxKbUwxU2tQQzJXTTFoVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzTjUzOGJ4T1lEZWtxaWhaSFFUTEVqMVZBaEhSOVBseFkvblU3cXlWNzRIcmN6eW5iSjNVc09KVzJVRmNxZ3haV3F5WnZHZ1ViR2FEUDh3QktydXNBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRMTd5ZmZiZUlld3ZRdDMrODNlR1ZPOUN3YVJFZ3NXZ3hyOVNNM3B2UUhZRDNqWlVhVFFlV2UwcDc1bi9EWk1lZERCckJkejRNaE5rSm1teGxZbXpqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc3MTg2MDYxNzE6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODIzMTM0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTy80XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPLzQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
