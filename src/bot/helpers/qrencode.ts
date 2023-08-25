import { Context } from "./context";
import { Types } from "./constants";
import { qrcode } from qrcode;

export const qrEncode = (ctx: Context) => {
    let qrType = ctx.session.qrType;

    switch (qrType) {
        case Types.TEXT:
            let text = ctx.session.text;
            break;
        case Types.EVENT:
            let eventName = ctx.session.eventName;
            let eventDate = ctx.session.eventName
            break;
        case Types.VCARD:
            break;
        case Types.WIFI:
            break;
        case Types.BITCOIN:
            break;
        default:
            break;s
    }

    let imgBase64;

    let contentUrl = $"data:image/jpeg;base64,{Convert.ToBase64String(bdata)}"
}