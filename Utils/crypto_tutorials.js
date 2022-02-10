// import
const keccak256 = require("keccak256");
const AES = require("crypto-js/aes");
const sha256 = require("crypto-js/sha256");
const CryptoJS = require("crypto-js");
var EC = require("elliptic").ec;

// SHA256
const hash = sha256("Message").toString();
console.log("hash:", hash);
console.log("======================================\n");
// Keccak256
const keccakHash = keccak256("Message").toString("hex");
console.log("keccakHash", keccakHash);
console.log("======================================\n");

// AES
const encryptMsg = AES.encrypt("my message", "secret key 123").toString();
const decryptoMsg = AES.decrypt(encryptMsg, "secret key 123").toString(
  CryptoJS.enc.Utf8
);
console.log("encryptMsg:", encryptMsg);
console.log("decryptoMsg:", decryptoMsg);
console.log("======================================\n");

// RSA
const NodeRSA = require("node-rsa");
const rsaKey = new NodeRSA({ b: 512 });
console.log("private rsaKey:", rsaKey.exportKey("pkcs8-private-pem"));
console.log("======================================\n");

console.log("public rsaKey:", rsaKey.exportKey("pkcs8-public-pem"));
console.log("======================================\n");

const text = "Hello RSA!";
const encrypted = rsaKey.encrypt(text, "base64");

console.log("encrypted: ", encrypted);
console.log("======================================\n");

const decrypted = rsaKey.decrypt(encrypted, "utf8");
console.log("decrypted: ", decrypted);
console.log("======================================\n");

// ECC
var ec = new EC("secp256k1");
var eccKey = ec.genKeyPair();
const eccPrivateKey = eccKey.getPrivate("hex");
const eccPublicKey = eccKey.getPublic("hex");
console.log("eccPrivateKey", eccPrivateKey);
console.log("======================================\n");

console.log("eccPublicKey", eccPublicKey);
console.log("======================================\n");

const eccPublicPoint = eccKey.getPublic();
const x = eccPublicPoint.getX();
const y = eccPublicPoint.getY();
console.log("x좌표:", x.toString("hex"));
console.log("======================================\n");

console.log("y좌표:", y.toString("hex"));
console.log("======================================\n");
