import { Composer, Keyboard } from 'grammy';
import { Context } from '../context';
import { States } from '../constants';
import { menu } from '../keyboards/menu';

export const start = new Composer<Context>();

start.command('start', async (ctx) => {
    let strtMsg : string | undefined;
    if (ctx.message && ctx.session.state === States.START) {
        strtMsg = [
            `Hi ${ctx.message.from}!`,
            ``,
            `I'm a bot that will help you generate <b>QR codes</b> to share with your friends!`,
            `To get started, pick tell me the <i>type</i> of QR code you would like to create!`
        ].join('\n');
    } else if (ctx.message && (ctx.session.state !== States.START && ctx.session.state !== States.DONE)) {
        strtMsg = [
            `Okay! Let's start over...`,
            ``,
            `What type of QR code would you like to make?`
        ].join('\n');
    } else if (ctx.message && (ctx.session.state !== States.DONE)) {
        strtMsg = `Welcome back ${ctx.message.from}! Would you like to make another QR code?`
    }
    
    strtMsg && await ctx.reply(strtMsg, { parse_mode: 'HTML', reply_markup: menu.oneTime() });
    ctx.session.state = States.MAIN_MENU;
});