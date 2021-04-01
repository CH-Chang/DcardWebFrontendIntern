import crypto from "crypto";

const HMACSHA1Hash = (str, key) => {
    try{
        let hmacsha1 = crypto.createHmac("sha1", key);
        return hmacsha1.update(str).digest("base64");
    } catch(err) {
        return null;
    }

    return null;
}

export { HMACSHA1Hash };