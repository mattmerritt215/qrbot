import { Composer } from 'grammy';
import { Context } from '../helpers/context';
import { start } from './start';
import { help } from './help';
import { text } from './text';
import { vcard } from './vcard';
import { event } from './event';
import { wifi } from './wifi';
import { bitcoin } from './bitcoin';

export const commandHandler = new Composer<Context>();

commandHandler
    .use(start)
    .use(help)
    .use(text)
    .use(vcard)
    .use(event)
    .use(wifi)
    .use(bitcoin)