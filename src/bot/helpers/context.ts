import { SessionData } from './session';
import { Context as BaseContext, SessionFlavor } from 'grammy';

export type Context = 
    & BaseContext
    & SessionFlavor<SessionData>