const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA61VSY7bRhS9S20lWxybpIAGwlEj1ZqoKQiCEqtIlTiqWNRkaOdsvQgQwAF8gcCLZJlFLpO+QK4QsNWNNmDH6QDhqlCsev/9/99/9QakGSlwD59A8w3IKdlDhqslO+UYNIFRBgGmoA4QZBA0AdfjcU93g1VoDUI7XdmIqmhUYwNPbg0Sb3zYHyWZa8uWHd2CSx3k5Tom/lcAdc9IbSjc7eLG8tx3d7sga3caDidmZ99DrmWS4Ga6WLQPnH4LLhUiJJSkoZ1vcIIpjHv4NISEvoz+vEPPHUUbKMK8NoHprhjbwyF0ndiikuVNxnm07ck96wi95cvon8Np1vX1/bhXLqe+kTpEENtovJ7GMbJ0fpNvIz+U7MOdF13pFyRMMeognDLCTi+u+41OkpmTsOVcPNvdHb+cBbM5nqzLtcUvT1tOr0GSeEsfiaOXEW8ojmJjvzhr/RWWTdGD9kxc7xo9lTtspZpRtE5BP1709MPoU+JD+qSV6L/U3TXF7bFLtTzQOn2jOwmR2WC5gVh7x2vq0p82BisLGX1zHr6MvrEtjoZD8Yiq+70o7nidl+YZXEgCn0jrIisXA2HFD9fFrPNMH7KSfo1lJkvlFE20o7U57pU47LeGujZ1Vytf2Cq1shyoXvdgzU+Kx7VJEN6NyAENdhAeyDQj/djxD4etqXQnd40Zkridp8Y9czO6fcgowqcOAk3+UgcUh6RgFDKSpQ97ilgHEO0n2KeYPZQXFPs9ljLPdmedWjQPTyuBUTR36ZLvDD1+x/je/HwymROdOregDnKa+bgoMGqTgmX05OKigCEuQPPbh05VSVOcZAx3CQJNIMiSIquSJPI8/03x+rCBrIB5/jrFDNRBQLPExaDJaInr4OGCrIqaJRuOo6uCLimm5SiKKNuiY6iKKhtWlWJyDTolCS4YTPIqM0nWZE0T1Uv9/+FhaApvCrxj2JKtC7qkOSoniZzjGLqt2JbydR4Sd/muDlJ8ZFcdV9UX5ToICC2Yl5Z5nEH0JPKnn9D3szJlk1Pqm9UCU9Dkn7cxYyQNiyqzMoXU35A9Nqs8QDOAcYEvdYDwnvi4wgP+igRyMVRGESRYY9IiH6Tfj6oObrL0emTtK7yMePkVp6nwlaT6wSu41pRXmoiFNa+JshaooCrH1UKqO/+oaC/HtYFrs4ZqtvgZGR9PnfnBPJtazj2o8ipFTDF6qvIa+lGZT7MIp1/B7Q2PtdoqWR8WnsprW9FIjtzAJjfrpfoJ7lXioPnm2bbNDFV4mroQeWXsgqpbVZzP1NAUbz4XRAqr0+D+/Q9/vvv1/v0ff/3+7v7tj8+LD7/cv/3t/sPH+7c/3f/8sSLy2KUqBMIMkrgATWAOb+LMVU37jopHV2+19FGom6EOnrv65BbXaWyd7OWmXLmwnaT0bjS2GpO22ueWo0BEm7nUkSY0yoXBdBi5t18AAU3A27VA6A/mZEEaC4JMu4BTO1WFruP2A4Xsi9FNZzKvITiQvF5trdlBqzvJco3jewhre0MZCmqq+n5nHuVF2GqX4+RshrdVtKu6Pg3mY2NnrqyNtuQau4WX5VERZ/JwfL5rBBONt/n2xm6stuV0OO6mY7E0xsphlWE1PgZkbOwEPKRbU1yORmHktxvR9hierScfe/DR+PH9Io8Oc9ViQPDDc/DYpX/t5vNYcJf6JxiPD8w/Of+42LQ662Ta2sj5zTmyRw1u0zC1lt3WxOWsNO/sndxDW+8sW+BSzXseQxZkNAFNAFNEM4JAHcSwYPrzZH/BLASlDpKTnucTBtmTIQC9+vreHlz+Bv0B1i47CQAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "254758443111",     
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',    
    URL: process.env.URL || "https://i.ibb.co/tMZ8f8cG/file-1127.jpg",                         
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'yes',     
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || '★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫ WATCHING 👀☠️',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',  
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://chat.whatsapp.com/FGEB0mW8DVfBMoEndfI1qD",
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || '👻T̥ͦO̥ͦX̥ͦI̥ͦC̥ͦ M͎D͎ 👻',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;
