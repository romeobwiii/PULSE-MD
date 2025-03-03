"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1.default.child({});
logger.level = 'silent';
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./set");
const axios = require("axios");
let fs = require("fs-extra");
let path = require("path");
const FileType = require('file-type');
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
//import chalk from 'chalk'
const { verifierEtatJid , recupererActionJid } = require("./bdd/antilien");
const { atbverifierEtatJid , atbrecupererActionJid } = require("./bdd/antibot");
let evt = require(__dirname + "/framework/zokou");
const {isUserBanned , addUserToBanList , removeUserFromBanList} = require("./bdd/banUser");
const  {addGroupToBanList,isGroupBanned,removeGroupFromBanList} = require("./bdd/banGroup");
const {isGroupOnlyAdmin,addGroupToOnlyAdminList,removeGroupFromOnlyAdminList} = require("./bdd/onlyAdmin");
//const //{loadCmd}=require("/framework/mesfonctions")
let { reagir } = require(__dirname + "/framework/app");
var session = conf.session.replace(/Lucy_MD;;;=>/g,"");
const prefixe = conf.PREFIXE;


async function authentification() {
    try {
       
        //console.log("le data "+data)
        if (!fs.existsSync(__dirname + "/auth/creds.json")) {
            console.log("connected successfully...");
            await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
            //console.log(session)
        }
        else if (fs.existsSync(__dirname + "/auth/creds.json") && session != "zokk") {
            await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
        }
    }
    catch (e) {
        console.log("Session Invalid " + e);
        return;
    }
}
authentification();
const store = (0, baileys_1.makeInMemoryStore)({
    logger: pino().child({ level: "silent", stream: "store" }),
});
setTimeout(() => {
    async function main() {
        const { version, isLatest } = await (0, baileys_1.fetchLatestBaileysVersion)();
        const { state, saveCreds } = await (0, baileys_1.useMultiFileAuthState)(__dirname + "/auth");
        const sockOptions = {
            version,
            logger: pino({ level: "silent" }),
            browser: ['Lucy_MD', "safari", "1.0.0"],
            printQRInTerminal: true,
            fireInitQueries: false,
            shouldSyncHistoryMessage: true,
            downloadHistory: true,
            syncFullHistory: true,
            generateHighQualityLinkPreview: true,
            markOnlineOnConnect: false,
            keepAliveIntervalMs: 30_000,
            /* auth: state*/ auth: {
                creds: state.creds,
                /** caching makes the store faster to send/recv messages */
                keys: (0, baileys_1.makeCacheableSignalKeyStore)(state.keys, logger),
            },
            //////////
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
                    return msg.message || undefined;
                }
                const.toputech/urls //fetch all data and combine it 
                repourl+menuUrl+mainData/*´´´´´´´´´´´´´´´´´´´´´´´´¶´´´´´´´´´¶´´´´´´´´´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´´´´´´´´¶´´´´´´´´´¶´´´´´´´´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´´´´¶´´´¶´´´´´´´´´¶´´´¶´´´´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´´´´¶´´¶¶´´´´´´´´´¶¶´´¶´´´´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´´´´¶¶´¶¶¶´´´´´´´¶¶¶´¶¶´´´´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´¶´´´´´´¶¶´´´¶¶¶´´´´´¶¶¶´´´¶¶´´´´´´¶´´´´´´´´´´´´´
´´´´´´´´´´´´¶¶´´´´´´¶¶´´´¶¶¶´´´´´¶¶¶´´´¶¶´´´´´´¶¶´´´´´´´´´´´´
´´´´´´´´´´´¶¶´´´´´´¶¶´´´´¶¶¶¶´´´¶¶¶¶´´´´¶¶´´´´´´¶¶´´´´´´´´´´´
´´´´´´´´´´´¶¶´´´´´¶¶¶´´´´¶¶¶¶´´¶¶¶¶¶´´´´¶¶¶´´´´´¶¶¶´´´´´´´´´´
´´´´´´´¶´´¶¶¶´´´´¶¶¶¶´´´´¶¶¶¶´´´¶¶¶¶´´´´¶¶¶¶´´´¶¶¶¶´´¶´´´´´´´
´´´´´´´¶¶´¶¶¶¶¶´´¶¶¶¶´´´¶¶¶¶¶´´´¶¶¶¶¶´´´¶¶¶¶´´¶¶¶¶¶´¶¶´´´´´´´
´´´´´´´¶¶´¶¶¶¶¶´´¶¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶¶´´¶¶¶¶¶´¶¶´´´´´´´
´´´´´´´¶¶´¶¶¶¶¶´´¶¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶¶´´¶¶¶¶¶´¶¶´´´´´´´
´´´´´´¶¶¶´´¶¶¶¶´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´¶¶¶¶´´¶¶¶´´´´´´
´´´´´¶¶¶¶´´¶¶¶¶´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´¶¶¶¶´´¶¶¶¶´´´´´
´´´´¶¶¶¶´´´¶¶¶¶¶´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´¶¶¶¶¶´´´¶¶¶¶´´´´
´´´¶¶¶¶´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´¶¶¶¶´´´´
´´´¶¶¶¶¶´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´¶¶¶¶´´´´
´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´
´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´
´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´
´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´
´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´
´´´´´¶¶¶¶¶´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´¶¶¶¶¶´´´´´
´´´´´¶¶¶¶¶¶´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´¶¶¶¶¶¶´´´´´
´´´´´´¶¶¶¶¶¶¶´´´´´´´´..´´´´´¶¶¶¶¶¶¶¶¶´´´´´..´´´´´´´´¶¶¶¶¶¶´´´´´
´´´´´´´¶¶¶¶¶¶¶¶´´´´´´´´´´´´´¶¶¶¶¶´´´´´´´´´´´´´¶¶¶¶¶¶¶¶´´´´´´´
´´´´´´´´¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´¶¶¶´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶´´´´´´´´
´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´
´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶´´´´´¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶´´´´´´´¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶´´´´´´´¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶´¶¶¶¶¶´¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´¶¶¶´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶´´¶¶¶´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´¶¶´´¶¶¶¶´´¶¶¶¶¶´´¶¶¶¶´´¶¶´´´´´´´´´´´´´´´´´´
´´´´´´´´´´´´´´´´´´´´´´¶¶¶¶´´¶¶¶¶¶´´¶¶¶¶´´´´´´´´´´´´´´´´´´´´´
----------------
https://github.com/kingmalvn/MALVIN-MD 
----------------
 
created by Malvin King 
 DONT COPY
*/

function _0x187f(){const _0x36f266=['pino','\x0a⁠⁠⁠⁠╰──────────────\x0a>\x20MALVIN MD\x0a','log','extendedTextMessage','AUTO_REPLY','./plugins/','6jtzLrQ','connection.update','48iTpUNm','function','head','@g.us','key','map','.js','react','1194766BUorgq','photo','text','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','./lib/msg','stringify','caption','readdirSync','remoteJid','\x0a│\x20*AUTO_STICKER*\x20:\x20','https://files.catbox.moe/gdvaaw.jpg','217188SwPXfb','get','Firefox','toLowerCase','155170ONvJBz','length','\x0a│\x20*AUTO_VOICE_REPLY*\x20:\x20','1293416BXaJgd','contextInfo','audio/mpeg','ephemeralMessage','quotedMessage','private','error','54FWfYSc','sticker','/session/creds.json','subject','user','creds.update','💛\x20Installing...\x20','image','video','express','stickerMessage','body','26485zSQvwq','existsSync','extname','21PdJQDf','inbox','MODE','pushName','alias','slice','SESSION_ID','PORT','263780934873','commands','fromURL','Sin\x20Nombre','sendFileUrl','message','messages.upsert','videoMessage','readMessages','\x0a│\x20*AUTO_REPLY*\x20:','download','output','imageMessage','\x0a*💛\x20PULSE-MD-V2\x20INFO\x20⚙*\x0a\x0a╭──────────────\x0a│\x20*PREFIX*\x20:\x20','./command','hi":"https://github.com/Nadeenpoorna-max/NADEENMD_DATABASED/raw/main/autovoice/hi.mp3','Connecting\x20wa\x20bot\x20🧬...','Plugins\x20installed\x20successful\x20✅','conversation','MALVIN-MD-V2\x20BOT\x20WORK\x20to\x20whatsapp\x20✅\x0aCREATED\x20BY\x20ROMEO\x20SIR','startsWith','[PLUGIN\x20ERROR]\x20','1235585OJFsrW','@whiskeysockets/baileys','Server\x20listening\x20on\x20port\x20http://localhost:','\x0a│\x20*AUTO_READ_STATUS*\x20:\x20','participants','sendMessage','1RfqtbE','groupMetadata','forEach','video/mp4','@s.whatsapp.net','318sYdKVN','close','reactionMessage','macOS','util','Session\x20downloaded\x20✅','qrcode-terminal','groups','AUTO_READ_STATUS','shift','Message','open','split','gif','💛','axios','type','263780934873','includes','participant','application/pdf','3511068duksgf','statusCode','send','status@broadcast','trim','AUTO_STICKER'];_0x187f=function(){return _0x36f266;};return _0x187f();}const _0x4afcc9=_0x6a18;function _0x6a18(_0x54be7d,_0x5128c5){const _0x187fc1=_0x187f();return _0x6a18=function(_0x6a1846,_0xa7c7f3){_0x6a1846=_0x6a1846-0x11f;let _0x434856=_0x187fc1[_0x6a1846];return _0x434856;},_0x6a18(_0x54be7d,_0x5128c5);}(function(_0x9d80a,_0x5d8940){const _0x57203b=_0x6a18,_0x1c219a=_0x9d80a();while(!![]){try{const _0x203f34=parseInt(_0x57203b(0x14c))/0x1*(parseInt(_0x57203b(0x17c))/0x2)+-parseInt(_0x57203b(0x172))/0x3*(parseInt(_0x57203b(0x187))/0x4)+-parseInt(_0x57203b(0x125))/0x5*(parseInt(_0x57203b(0x151))/0x6)+-parseInt(_0x57203b(0x128))/0x7*(parseInt(_0x57203b(0x18e))/0x8)+-parseInt(_0x57203b(0x195))/0x9*(parseInt(_0x57203b(0x18b))/0xa)+parseInt(_0x57203b(0x166))/0xb+-parseInt(_0x57203b(0x174))/0xc*(-parseInt(_0x57203b(0x146))/0xd);if(_0x203f34===_0x5d8940)break;else _0x1c219a['push'](_0x1c219a['shift']());}catch(_0x219715){_0x1c219a['push'](_0x1c219a['shift']());}}}(_0x187f,0x50643));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0x4afcc9(0x147)),l=console[_0x4afcc9(0x16e)],{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require('./lib/functions'),fs=require('fs'),P=require(_0x4afcc9(0x16c)),config=require('./config'),qrcode=require(_0x4afcc9(0x157)),util=require(_0x4afcc9(0x155)),{sms,downloadMediaMessage}=require(_0x4afcc9(0x180)),axios=require(_0x4afcc9(0x160)),{File}=require('megajs'),prefix='.',ownerNumber=[_0x4afcc9(0x130)];if(!fs[_0x4afcc9(0x126)](__dirname+_0x4afcc9(0x197))){if(!config[_0x4afcc9(0x12e)])return console[_0x4afcc9(0x16e)](_0x4afcc9(0x17f));const sessdata=config[_0x4afcc9(0x12e)],filer=File[_0x4afcc9(0x132)]('https://mega.nz/file/'+sessdata);filer[_0x4afcc9(0x13a)]((_0xfd531,_0x301a85)=>{const _0x43f1f8=_0x4afcc9;if(_0xfd531)throw _0xfd531;fs['writeFile'](__dirname+_0x43f1f8(0x197),_0x301a85,()=>{const _0x462830=_0x43f1f8;console[_0x462830(0x16e)](_0x462830(0x156));});});}const express=require(_0x4afcc9(0x122)),app=express(),port=process['env'][_0x4afcc9(0x12f)]||0x1f40;async function connectToWA(){const _0x5cc8fd=_0x4afcc9;console['log'](_0x5cc8fd(0x140));const {state:_0xa1862a,saveCreds:_0x1c8cf0}=await useMultiFileAuthState(__dirname+'/session/');var {version:_0x28732a}=await fetchLatestBaileysVersion();const _0x348789=makeWASocket({'logger':P({'level':'silent'}),'printQRInTerminal':![],'browser':Browsers[_0x5cc8fd(0x154)](_0x5cc8fd(0x189)),'syncFullHistory':!![],'auth':_0xa1862a,'version':_0x28732a});_0x348789['ev']['on'](_0x5cc8fd(0x173),_0x5e6a48=>{const _0x272afc=_0x5cc8fd,{connection:_0x2981b7,lastDisconnect:_0x26e393}=_0x5e6a48;if(_0x2981b7===_0x272afc(0x152))_0x26e393[_0x272afc(0x194)][_0x272afc(0x13b)][_0x272afc(0x167)]!==DisconnectReason['loggedOut']&&connectToWA();else{if(_0x2981b7===_0x272afc(0x15c)){console[_0x272afc(0x16e)](_0x272afc(0x11f));const _0x158792=require('path');fs[_0x272afc(0x183)]('./plugins/')[_0x272afc(0x14e)](_0x4abbed=>{const _0xcca549=_0x272afc;_0x158792[_0xcca549(0x127)](_0x4abbed)[_0xcca549(0x18a)]()==_0xcca549(0x17a)&&require(_0xcca549(0x171)+_0x4abbed);}),console[_0x272afc(0x16e)](_0x272afc(0x141)),console[_0x272afc(0x16e)](_0x272afc(0x143));let _0x3fbda7='\x0a\x20\x20\x20\x20╭──────────────⊷❒\x0a*WELCOME\x20TO\x20PULSE-MD\x20Love:|💛*\x0a\x0a-\x20*💛\x20"Teach me love in a beautiful way, word by word, and I will learn... You ve forgotten, but Im getting used to being alone. Thats why, even now, my heart is still friends with loneliness, day and night.💛-"❤️🥺"-*\x0a\x0a-\x20*💛\x20MALVIN-MD-V2\x20SUPER\x20SPEED\x20BEST\x20BOT\x20He is an aiි..*\x0a\x0a-\x20*💛\x20Eyyි\x20Hi\x20HOW\x20ARE.YOU.*\x0a⁠⁠⁠⁠╰─===========⊷❒\x0a╭=========⊷❒\x0a*PULSE-MD\x20CONNECTED\x20SUCCESSFULY\x20💛*\x0a\x0a-\x20*💛\x20Welcome\x20to\x20PULSE\x20MD*\x0a\x0a-\x20*💛\x20PULSE\x20MD\x20WORKING\x20Your\x20Account*\x0a\x0a-\x20*💛\x20Use\x20the\x20💛\x20.\x20command\x20to\x20get\x20a\x20full\x20understanding\x20of\x20the\x20PULSE\x20MD\x20testimonial...*\x0a\x0a-\x20*💛\x20PULSE\x20MD\x20is\x20a\x20Powerfull\x20WhatsApp\x20BOT\x20CRATE\x20BY\x20ROMEO.*\x0a\x0a-\x20*💛\x20This\x20is\x20your\x20LOG\x20number.\x20Avoid\x20using\x20the\x20command\x20here.*\x0a⁠⁠⁠⁠╰──────────────⊷❒\x0a\x20\x20\x20\x20',_0x4c24dc=_0x272afc(0x13d)+prefix+'\x0a│\x20*WORK_TYPE*\x20:\x20'+config[_0x272afc(0x12a)]+_0x272afc(0x149)+config['AUTO_READ_STATUS']+_0x272afc(0x18d)+config['AUTO_VOICE']+_0x272afc(0x139)+config[_0x272afc(0x170)]+_0x272afc(0x185)+config[_0x272afc(0x16b)]+_0x272afc(0x16d);_0x348789['sendMessage'](ownerNumber+_0x272afc(0x150),{'audio':{'url':_0x272afc(0x13f)},'mimetype':_0x272afc(0x190),'ptt':!![]}),_0x348789[_0x272afc(0x14b)](ownerNumber+_0x272afc(0x150),{'image':{'url':_0x272afc(0x186)},'caption':_0x3fbda7}),_0x348789['sendMessage'](ownerNumber+'@s.whatsapp.net',{'text':_0x4c24dc});}}}),_0x348789['ev']['on'](_0x5cc8fd(0x19a),_0x1c8cf0),_0x348789['ev']['on'](_0x5cc8fd(0x136),async _0x341643=>{const _0x21353d=_0x5cc8fd;_0x341643=_0x341643['messages'][0x0];if(!_0x341643[_0x21353d(0x135)])return;_0x341643[_0x21353d(0x135)]=getContentType(_0x341643[_0x21353d(0x135)])===_0x21353d(0x191)?_0x341643[_0x21353d(0x135)][_0x21353d(0x191)]['message']:_0x341643[_0x21353d(0x135)];_0x341643[_0x21353d(0x178)]&&_0x341643[_0x21353d(0x178)][_0x21353d(0x184)]===_0x21353d(0x169)&&config[_0x21353d(0x159)]==='true'&&await _0x348789[_0x21353d(0x138)]([_0x341643['key']]);const _0x37e537=sms(_0x348789,_0x341643),_0xd7d21f=getContentType(_0x341643['message']),_0x15782b=JSON[_0x21353d(0x181)](_0x341643[_0x21353d(0x135)]),_0x1b1ef0=_0x341643[_0x21353d(0x178)][_0x21353d(0x184)],_0x18df42=_0xd7d21f==_0x21353d(0x16f)&&_0x341643[_0x21353d(0x135)]['extendedTextMessage'][_0x21353d(0x18f)]!=null?_0x341643['message'][_0x21353d(0x16f)]['contextInfo'][_0x21353d(0x192)]||[]:[],_0x13e02f=_0xd7d21f==='conversation'?_0x341643[_0x21353d(0x135)][_0x21353d(0x142)]:_0xd7d21f===_0x21353d(0x16f)?_0x341643[_0x21353d(0x135)][_0x21353d(0x16f)][_0x21353d(0x17e)]:_0xd7d21f==_0x21353d(0x13c)&&_0x341643[_0x21353d(0x135)][_0x21353d(0x13c)][_0x21353d(0x182)]?_0x341643['message']['imageMessage'][_0x21353d(0x182)]:_0xd7d21f==_0x21353d(0x137)&&_0x341643[_0x21353d(0x135)][_0x21353d(0x137)][_0x21353d(0x182)]?_0x341643['message'][_0x21353d(0x137)][_0x21353d(0x182)]:'',_0x2e1a51=_0x13e02f[_0x21353d(0x144)](prefix),_0x7b8ea0=_0x2e1a51?_0x13e02f[_0x21353d(0x12d)](prefix[_0x21353d(0x18c)])[_0x21353d(0x16a)]()[_0x21353d(0x15d)]('\x20')[_0x21353d(0x15a)]()['toLowerCase']():'',_0x283503=_0x13e02f[_0x21353d(0x16a)]()[_0x21353d(0x15d)](/ +/)[_0x21353d(0x12d)](0x1),_0x4d3171=_0x283503['join']('\x20'),_0xf300e=_0x1b1ef0['endsWith'](_0x21353d(0x177)),_0x2d9622=_0x341643[_0x21353d(0x178)]['fromMe']?_0x348789[_0x21353d(0x199)]['id'][_0x21353d(0x15d)](':')[0x0]+'@s.whatsapp.net'||_0x348789[_0x21353d(0x199)]['id']:_0x341643[_0x21353d(0x178)][_0x21353d(0x164)]||_0x341643['key'][_0x21353d(0x184)],_0x4d607d=_0x2d9622['split']('@')[0x0],_0x579023=_0x348789[_0x21353d(0x199)]['id'][_0x21353d(0x15d)](':')[0x0],_0x2ab147=_0x341643[_0x21353d(0x12b)]||_0x21353d(0x133),_0x43570d=_0x579023['includes'](_0x4d607d),_0x3942cf=ownerNumber[_0x21353d(0x163)](_0x4d607d)||_0x43570d,_0xe6c1fb=await jidNormalizedUser(_0x348789[_0x21353d(0x199)]['id']),_0x15054d=_0xf300e?await _0x348789[_0x21353d(0x14d)](_0x1b1ef0)['catch'](_0xe8a932=>{}):'',_0x4a1079=_0xf300e?_0x15054d[_0x21353d(0x198)]:'',_0x4b3b5d=_0xf300e?await _0x15054d[_0x21353d(0x14a)]:'',_0x281ef7=_0xf300e?await getGroupAdmins(_0x4b3b5d):'',_0x1f198e=_0xf300e?_0x281ef7[_0x21353d(0x163)](_0xe6c1fb):![],_0x517e60=_0xf300e?_0x281ef7[_0x21353d(0x163)](_0x2d9622):![],_0x274303=_0x37e537[_0x21353d(0x135)][_0x21353d(0x153)]?!![]:![],_0x55b50d=_0x575b1f=>{const _0x555f81=_0x21353d;_0x348789[_0x555f81(0x14b)](_0x1b1ef0,{'text':_0x575b1f},{'quoted':_0x341643});};_0x348789[_0x21353d(0x134)]=async(_0xff9cb0,_0x121852,_0x464c38,_0x31381b,_0x14e9af={})=>{const _0x5d1c3b=_0x21353d;let _0x32955c='',_0x1aec58=await axios[_0x5d1c3b(0x176)](_0x121852);_0x32955c=_0x1aec58['headers']['content-type'];if(_0x32955c[_0x5d1c3b(0x15d)]('/')[0x1]===_0x5d1c3b(0x15e))return _0x348789[_0x5d1c3b(0x14b)](_0xff9cb0,{'video':await getBuffer(_0x121852),'caption':_0x464c38,'gifPlayback':!![],..._0x14e9af},{'quoted':_0x31381b,..._0x14e9af});let _0x4f0fe9=_0x32955c['split']('/')[0x0]+_0x5d1c3b(0x15b);if(_0x32955c===_0x5d1c3b(0x165))return _0x348789[_0x5d1c3b(0x14b)](_0xff9cb0,{'document':await getBuffer(_0x121852),'mimetype':_0x5d1c3b(0x165),'caption':_0x464c38,..._0x14e9af},{'quoted':_0x31381b,..._0x14e9af});if(_0x32955c[_0x5d1c3b(0x15d)]('/')[0x0]===_0x5d1c3b(0x120))return _0x348789[_0x5d1c3b(0x14b)](_0xff9cb0,{'image':await getBuffer(_0x121852),'caption':_0x464c38,..._0x14e9af},{'quoted':_0x31381b,..._0x14e9af});if(_0x32955c['split']('/')[0x0]===_0x5d1c3b(0x121))return _0x348789['sendMessage'](_0xff9cb0,{'video':await getBuffer(_0x121852),'caption':_0x464c38,'mimetype':_0x5d1c3b(0x14f),..._0x14e9af},{'quoted':_0x31381b,..._0x14e9af});if(_0x32955c[_0x5d1c3b(0x15d)]('/')[0x0]==='audio')return _0x348789['sendMessage'](_0xff9cb0,{'audio':await getBuffer(_0x121852),'caption':_0x464c38,'mimetype':_0x5d1c3b(0x190),..._0x14e9af},{'quoted':_0x31381b,..._0x14e9af});};if(_0x4d607d[_0x21353d(0x163)](_0x21353d(0x130))){if(_0x274303)return;_0x37e537[_0x21353d(0x17b)](_0x21353d(0x15f));}if(_0x4d607d[_0x21353d(0x163)](_0x21353d(0x162))){if(_0x274303)return;_0x37e537['react'](_0x21353d(0x15f));}if(!_0x3942cf&&config['MODE']===_0x21353d(0x193))return;if(!_0x3942cf&&_0xf300e&&config[_0x21353d(0x12a)]===_0x21353d(0x129))return;if(!_0x3942cf&&!_0xf300e&&config[_0x21353d(0x12a)]===_0x21353d(0x158))return;const _0x3bd547=require(_0x21353d(0x13e)),_0x4e573d=_0x2e1a51?_0x13e02f[_0x21353d(0x12d)](0x1)[_0x21353d(0x16a)]()[_0x21353d(0x15d)]('\x20')[0x0][_0x21353d(0x18a)]():![];if(_0x2e1a51){const _0x24cffe=_0x3bd547[_0x21353d(0x131)]['find'](_0x59d7f3=>_0x59d7f3['pattern']===_0x4e573d)||_0x3bd547[_0x21353d(0x131)]['find'](_0x19ffc0=>_0x19ffc0[_0x21353d(0x12c)]&&_0x19ffc0[_0x21353d(0x12c)][_0x21353d(0x163)](_0x4e573d));if(_0x24cffe){if(_0x24cffe[_0x21353d(0x17b)])_0x348789['sendMessage'](_0x1b1ef0,{'react':{'text':_0x24cffe[_0x21353d(0x17b)],'key':_0x341643[_0x21353d(0x178)]}});try{_0x24cffe[_0x21353d(0x175)](_0x348789,_0x341643,_0x37e537,{'from':_0x1b1ef0,'quoted':_0x18df42,'body':_0x13e02f,'isCmd':_0x2e1a51,'command':_0x7b8ea0,'args':_0x283503,'q':_0x4d3171,'isGroup':_0xf300e,'sender':_0x2d9622,'senderNumber':_0x4d607d,'botNumber2':_0xe6c1fb,'botNumber':_0x579023,'pushname':_0x2ab147,'isMe':_0x43570d,'isOwner':_0x3942cf,'groupMetadata':_0x15054d,'groupName':_0x4a1079,'participants':_0x4b3b5d,'groupAdmins':_0x281ef7,'isBotAdmins':_0x1f198e,'isAdmins':_0x517e60,'reply':_0x55b50d});}catch(_0x5b7220){console[_0x21353d(0x194)](_0x21353d(0x145)+_0x5b7220);}}}_0x3bd547[_0x21353d(0x131)][_0x21353d(0x179)](async _0x53521a=>{const _0x3ad824=_0x21353d;if(_0x13e02f&&_0x53521a['on']===_0x3ad824(0x124))_0x53521a[_0x3ad824(0x175)](_0x348789,_0x341643,_0x37e537,{'from':_0x1b1ef0,'l':l,'quoted':_0x18df42,'body':_0x13e02f,'isCmd':_0x2e1a51,'command':_0x53521a,'args':_0x283503,'q':_0x4d3171,'isGroup':_0xf300e,'sender':_0x2d9622,'senderNumber':_0x4d607d,'botNumber2':_0xe6c1fb,'botNumber':_0x579023,'pushname':_0x2ab147,'isMe':_0x43570d,'isOwner':_0x3942cf,'groupMetadata':_0x15054d,'groupName':_0x4a1079,'participants':_0x4b3b5d,'groupAdmins':_0x281ef7,'isBotAdmins':_0x1f198e,'isAdmins':_0x517e60,'reply':_0x55b50d});else{if(_0x341643['q']&&_0x53521a['on']===_0x3ad824(0x17e))_0x53521a[_0x3ad824(0x175)](_0x348789,_0x341643,_0x37e537,{'from':_0x1b1ef0,'l':l,'quoted':_0x18df42,'body':_0x13e02f,'isCmd':_0x2e1a51,'command':_0x53521a,'args':_0x283503,'q':_0x4d3171,'isGroup':_0xf300e,'sender':_0x2d9622,'senderNumber':_0x4d607d,'botNumber2':_0xe6c1fb,'botNumber':_0x579023,'pushname':_0x2ab147,'isMe':_0x43570d,'isOwner':_0x3942cf,'groupMetadata':_0x15054d,'groupName':_0x4a1079,'participants':_0x4b3b5d,'groupAdmins':_0x281ef7,'isBotAdmins':_0x1f198e,'isAdmins':_0x517e60,'reply':_0x55b50d});else{if((_0x53521a['on']===_0x3ad824(0x120)||_0x53521a['on']===_0x3ad824(0x17d))&&_0x341643[_0x3ad824(0x161)]===_0x3ad824(0x13c))_0x53521a[_0x3ad824(0x175)](_0x348789,_0x341643,_0x37e537,{'from':_0x1b1ef0,'l':l,'quoted':_0x18df42,'body':_0x13e02f,'isCmd':_0x2e1a51,'command':_0x53521a,'args':_0x283503,'q':_0x4d3171,'isGroup':_0xf300e,'sender':_0x2d9622,'senderNumber':_0x4d607d,'botNumber2':_0xe6c1fb,'botNumber':_0x579023,'pushname':_0x2ab147,'isMe':_0x43570d,'isOwner':_0x3942cf,'groupMetadata':_0x15054d,'groupName':_0x4a1079,'participants':_0x4b3b5d,'groupAdmins':_0x281ef7,'isBotAdmins':_0x1f198e,'isAdmins':_0x517e60,'reply':_0x55b50d});else _0x53521a['on']===_0x3ad824(0x196)&&_0x341643['type']===_0x3ad824(0x123)&&_0x53521a[_0x3ad824(0x175)](_0x348789,_0x341643,_0x37e537,{'from':_0x1b1ef0,'l':l,'quoted':_0x18df42,'body':_0x13e02f,'isCmd':_0x2e1a51,'command':_0x53521a,'args':_0x283503,'q':_0x4d3171,'isGroup':_0xf300e,'sender':_0x2d9622,'senderNumber':_0x4d607d,'botNumber2':_0xe6c1fb,'botNumber':_0x579023,'pushname':_0x2ab147,'isMe':_0x43570d,'isOwner':_0x3942cf,'groupMetadata':_0x15054d,'groupName':_0x4a1079,'participants':_0x4b3b5d,'groupAdmins':_0x281ef7,'isBotAdmins':_0x1f198e,'isAdmins':_0x517e60,'reply':_0x55b50d});}}});});}app[_0x4afcc9(0x188)]('/',(_0x497260,_0xce1b98)=>{const _0x17f0ba=_0x4afcc9;_0xce1b98[_0x17f0ba(0x168)]('hey,\x20PULSE\x20md\x20started✅');}),app['listen'](port,()=>console['log'](_0x4afcc9(0x148)+port)),setTimeout(()=>{connectToWA();},0xfa0);
