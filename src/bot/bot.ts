import { Bot, session } from 'grammy';
import { Context } from './helpers/context';
import { initial } from './helpers/session';
import { commandHandler } from './commands/commandHandler';

const bot = new Bot<Context>('');

bot.use(session({ initial }));

bot.use(commandHandler)




