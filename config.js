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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918617340627";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_27_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAzNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk2LFxuICAgICAgICA4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICA1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICA4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsdWUyejYrUW5DRTAzVmpWZDB5b01JWUk4V2NkaVRJZjNJRURrTWpmYSt3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwZDZUOFZBSFNyYUVYZm14UC1iVHR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYyMGYwYmRhLTZkMDktNDUzZS04YjEwLTY0MDcxMzc5MjIyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDQ0LFxuICAgICAgMTU3LFxuICAgICAgMTcwLFxuICAgICAgMjE1LFxuICAgICAgNzMsXG4gICAgICAyNTUsXG4gICAgICAxNDQsXG4gICAgICAyMTYsXG4gICAgICAyMzEsXG4gICAgICAxNjgsXG4gICAgICA1OSxcbiAgICAgIDE0MSxcbiAgICAgIDIyMixcbiAgICAgIDMyLFxuICAgICAgMTk5LFxuICAgICAgMTg0LFxuICAgICAgMTAzLFxuICAgICAgMjE5LFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNixcbiAgICAgIDE4NSxcbiAgICAgIDQ0LFxuICAgICAgOTcsXG4gICAgICAxOTYsXG4gICAgICAxMDMsXG4gICAgICAxMjAsXG4gICAgICAxODgsXG4gICAgICA5OSxcbiAgICAgIDE2LFxuICAgICAgNjQsXG4gICAgICAyMzUsXG4gICAgICAxOTAsXG4gICAgICA3OCxcbiAgICAgIDIwMixcbiAgICAgIDY5LFxuICAgICAgMSxcbiAgICAgIDE3MSxcbiAgICAgIDY2LFxuICAgICAgMjQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFTUEg0WFZDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg2MTczNDA2Mjc6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMjgxMzM5NjkzNDcwNjo4NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR1Y3cG9HRUkrSHg3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhxUDBDMmVEUnk0RUY4L2dRZnVMcHdabXBMMmJDWDhBdGZJbXdzUzdTWGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibENyRWh2NDBmdnRNREliSDErYXJYTFlPM0N0M29zYmVhOXBwMnQ3a0s0RUpYKzdneXI0d3VnTlFzWW95UFFSSTNJNExLZlh6bnlBODVNMG5HaHRQQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK3orckhoNi9pV2RZK2t4dndNUGowVG5kbXVMRG1Rc1RWbUdQTFFrRnVzaG1EVFByRFdzQ3NRZldZc3BEWllGbHV4RjUzbFNJQ0NGQlB2WWRLMFY4RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NjE3MzQwNjI3Ojg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NzMxNjY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnpXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGelcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmQmUvNFllbHBIK1FsTEdEWGFtZmRaYzhQeG9hVTJuNE8yVWtBbkN4M05NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NjY5NDM2NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc2MDMwOTQxNDhcIn0iCn0="  // PUT your SESSION_ID 


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
