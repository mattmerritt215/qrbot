import { Composer } from 'grammy';
import { Context } from '../context';
import { States } from '../helpers/constants';

export const help = new Composer<Context>();

help.hears(/^❓ Help$/, async (ctx) => {
    const hlpMsg = [ 
        `<b>Available Commands :</b>`,
        `\t<i>/start</i> - Start the bot`,
        `\t<i>/help</i> - Show this help message`, 
        `\t<i>/text</i> - Create a QR code from plain text`,
        `\t<i>/event</i> - Create a QR code to share an event`,
        `\t<i>/vcard</i> - Create a QR code to share a contact card`,
        `\t<i>/wifi</i> - Create a QR code to connect to wifi`,
        `\t<i>/bitcoin</i> - Create a QR code to get paid in bitcoin`,
        ``,
        `Additionally: you can use '<b>/help</b> <i>\<command\><\i> for more detailed instructions.`
    ].join('\n');
})

help.hears(/^\/help( (text|event|vcard|wifi|bitcoin))?/, async (ctx) => {
    let hlpMsg : string|undefined;
    let inMsg : string[]|undefined;
    let def = false;
    
    if (ctx.message && ctx.message.text) {
        inMsg = ctx.message?.text?.split(' ');
    }

    if (inMsg) {
        switch(inMsg[1].toLowerCase()) {
            case 'text':
                hlpMsg = [
                    `<b>/text usage:</b>`,
                    ``,
                    `<b>/text</b> "<i>Some text to encode</i>"`
                ].join('\n');
                break;
            case 'event':
                hlpMsg = [
                    `<b>/event usage:</b>`,
                    ``,
                    `<b>/event</b> "<i>Event name</i>" "<i>Event date [YYYY-MM-DD]</i>" "<i>\<Event time [HH:mm (AM|PM)]\></i>"`,
                    ``,
                    `An event <b>must</b> include a <b>name</b> and <b>date</b> and can optionally include a <b>time</b>`
                ].join('\n');
                break;
            case 'vcard':
                hlpMsg = [
                    `<b>/vcard usage:</b>`,
                    ``,
                    `<b>/vcard</b> "<i>First name</i>" "<i>Last name</i>" "<i>\<Email\></i>" "<i>\<Phone\></i>" "<i>\<t.me link\></i>"`,
                    ``,
                    `A vCard <b>must</b> include a <b>first name</b> and <b>last name</b> and atleast one of <b>email</b>, <b>phone</b>, or <b>t.me link</b>`
                ].join('\n');
                break;
            case 'wifi':
                hlpMsg = [
                    `<b>/wifi usage:</b>`,
                    ``,
                    `<b>/wifi</b> "<i>SSID</i>" "<i>(WEP|WPA|WPA2)</i>" "<i>Password</i>"`,
                    ``,
                    `A WiFi code <b>must</b> include an <b>SSID</b>, a <b>security type</b>, and a <b>password</b>`
                ].join('\n');
                break;
            case 'bitcoin':
                hlpMsg = [
                    `<b>/bitcoin usage:</b>`,
                    ``,
                    `<b>/bitcoin</b> "<i>Wallet address</i>" "<i>\<Amount\><\i>"`,
                    ``,
                    `A bitcoin payment <b>must</b> include a <b>wallet address</b> and can optionally include a <b>payment amount</b>`
                ].join('\n');
                break;
            default:
                def = true;
                hlpMsg = [
                    `I'm sorry... I don't know anything about ${inMsg[1]}.`,
                    ``,
                    ``
                ].join('\n');
                break;
        }

        if (!def) {
            const alrtMsg = [
                ``,
                `Note: when passing arguments to any of my commands, you have to wrap the arguments in double-quotes!`,
                `For example: <i>/text <b>"</b>I'm making a QR code!<b>"</b></i>`
            ].join('\n');

            hlpMsg += alrtMsg;
        }
    }

    hlpMsg && await ctx.reply(hlpMsg, { parse_mode: "HTML" });
    ctx.session.state = States.HELP;
});