import { Bot, session } from 'grammy';
import { Context } from './helpers/context';
import { initial } from './helpers/session';
import { commandHandler } from './commands/commandHandler';

const bot = new Bot<Context>(process.env.TELEGRAM_TOKEN || '');

bot.use(session({ initial }));

bot.use(commandHandler);

bot.start();




