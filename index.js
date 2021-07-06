var CryptoJS = require("crypto-js");
const K = "4951882490015028";
module.exports = {
    encrypt: (T) => {
        if (T) {
            var eT = CryptoJS.AES.encrypt(
                CryptoJS.enc.Utf8.parse(T),
                CryptoJS.enc.Utf8.parse(K), {
                    keySize: 128 / 8,
                    iv: CryptoJS.enc.Utf8.parse(K),
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                }
            ).toString();

            return eT;
        }

        return T;
    },
    decrypt: (C) => {
        if (C) {
            let pT = CryptoJS.AES.decrypt(C, CryptoJS.enc.Utf8.parse(K), {
                keySize: 128 / 8,
                iv: CryptoJS.enc.Utf8.parse(K),
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
            }).toString(CryptoJS.enc.Utf8);

            return pT;
        }

        return "";
    },
};