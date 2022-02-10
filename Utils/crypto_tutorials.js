const { sha256 } = require("ethereum-cryptography/sha256");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { ripemd160 } = require("ethereum-cryptography/ripemd160");
const { utf8ToBytes, bytesToHex } = require("ethereum-cryptography/utils");

// 단방향 암호화
console.log("===================단방향===================\n");
const message = utf8ToBytes("Hello world");
const sha = sha256(message);
const keccak = keccak256(message);
const ripemd = ripemd160(message);
console.log("sha256:", bytesToHex(sha));
console.log("======================================\n");

console.log("keccak256:", bytesToHex(keccak));
console.log("======================================\n");

console.log("ripemd160:", bytesToHex(ripemd));
console.log("======================================\n");

// 양방향 암호화 - 대칭키 암호화 - AES
console.log("===================AES===================\n");
const CryptoJS = require("crypto-js");
const AES = require("crypto-js/aes");
const encryptMsg = AES.encrypt("my message", "secret key 123").toString();
const decryptoMsg = AES.decrypt(encryptMsg, "secret key 123").toString(
  CryptoJS.enc.Utf8
);
console.log("aesEncryptMsg:", encryptMsg);
console.log("======================================\n");

console.log("aesDecryptoMsg:", decryptoMsg);
console.log("======================================\n");

// 양방향 암호화 - 비대칭키 암호화 - RSA
console.log("=====================RSA=================\n");
const NodeRSA = require("node-rsa");
const rsaKey = new NodeRSA({ b: 512 });
console.log("private rsaKey:", rsaKey.exportKey("pkcs8-private-pem"));
console.log("======================================\n");

console.log("public rsaKey:", rsaKey.exportKey("pkcs8-public-pem"));
console.log("======================================\n");

const text = "Hello RSA!";
const encrypted = rsaKey.encrypt(text, "base64");

console.log("rsaEncrypted: ", encrypted);
console.log("======================================\n");

const decrypted = rsaKey.decrypt(encrypted, "utf8");
console.log("rsaDecrypted: ", decrypted);
console.log("======================================\n");

// 양방향 암호화 - 비대칭키 암호화 - ECC
console.log("=====================ECC=================\n");
const secp = require("ethereum-cryptography/secp256k1");
const eccPrivateKey =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
const messageHash = utf8ToBytes("Hello world");
console.log("eccPrivateKey:", eccPrivateKey);
console.log("======================================\n");

const eccPublicKey = secp.getPublicKey(eccPrivateKey);
console.log("eccPublicKey:", bytesToHex(eccPublicKey));
console.log("======================================\n");

const signature = secp.signSync(messageHash, eccPrivateKey);
console.log("eccSignature", bytesToHex(signature));
console.log("======================================\n");

const isSigned = secp.verify(signature, messageHash, eccPublicKey);
console.log("eccVerfity", isSigned);
console.log("======================================\n");
