import { Composer } from 'grammy';
import { Context } from '../helpers/context';
import { States, Types } from '../helpers/constants';
import { qrEncode } from '../helpers/qrencode';

export const text = new Composer<Context>();

text.hears(/^🔠 Text$/, async (ctx) => {
    ctx.session.qrType = Types.TEXT;
    await ctx.reply(`Tell me what you'd like to encode!`);
    ctx.session.text = ctx.message?.text;
    qrEncode(ctx);
})

text.hears(/^\/text /, async (ctx) => {
    ctx.session.qrType = Types.TEXT;
    
    if (ctx.message && ctx.message.text) {
        let openQuote = ctx.message.text.indexOf('"');
        let closeQuote = ctx.message.text.lastIndexOf('"');
        let text = ctx.message.text.substring(openQuote+1).substring(-1);
        qrEncode(ctx);
    }
})