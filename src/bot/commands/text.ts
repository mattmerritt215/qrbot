import { Composer } from 'grammy';
import { Context } from '../helpers/context';
import { States, Types } from '../helpers/constants';

export const text = new Composer<Context>();

text.hears(/^🔠 Text$/, async (ctx) => {
    ctx.session.qrType = Types.TEXT;
    await ctx.reply(`Tell me what you'd like to encode!`);
    ctx.session.text = ctx.message?.text;
})

text.hears(/^\/text /, async (ctx) => {
    ctx.session.qrType = Types.TEXT;
    ctx.message && ctx.message.text && ctx.message.text.split() 
})