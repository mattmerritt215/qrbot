import { States, Types } from "./constants"

export interface SessionData {
    state: States,
    qrType: Types | undefined,
    text: string | undefined,
    vCardName: string | undefined,
    vCardEmail: string | undefined,
    vCardPhone: string | undefined
    eventName: string | undefined,
    eventDate: string | undefined,
    eventTime: string | undefined,
    wifiSsid: string | undefined,
    wifiSecurity: string | undefined,
    wifiPassword: string | undefined,
    bitcoinAddress: string | undefined,
    bitcoinAmount: string | undefined
}

export function initial(): SessionData {
    return {
        state: States.START,
        qrType: undefined,
        text: undefined,
        vCardName: undefined,
        vCardEmail: undefined,
        vCardPhone: undefined,
        eventName: undefined,
        eventDate: undefined,
        eventTime: undefined,
        wifiSsid: undefined,
        wifiSecurity: undefined,
        wifiPassword: undefined,
        bitcoinAddress: undefined,
        bitcoinAmount: undefined
    }
}