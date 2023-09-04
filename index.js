const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.TELEGRAM_API_KEY)

bot.start((ctx) => {
    ctx.reply('Welcome');
    console.log(ctx.from);
    console.log(ctx.chat);
})

bot.telegram.sendMessage("914419568", "hey")

bot.launch()