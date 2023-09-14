const CryptoJS = require("crypto-js");
require('dotenv').config()

const encryption = (password)=>{
    if(!process.env.CRYPTO_SECRET){
        throw new Error("CRYPTO_SECRET is required please pass a private key to env file");       
    }
    return CryptoJS.AES.encrypt(password,process.env.CRYPTO_SECRET).toString();
}

const decryption = (password)=>{
    if(!process.env.CRYPTO_SECRET){
        throw new Error("CRYPTO_SECRET is required please pass a private key to env file");       
    }
    return CryptoJS.AES.decrypt(password,process.env.CRYPTO_SECRET).toString(CryptoJS.enc.Utf8)
}

module.exports = {encryption,decryption}