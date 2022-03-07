const crypto = require("crypto");

class Security {
  generateKeyPair() {
    return crypto.generateKeyPairSync("rsa", {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
    });
  }

  getCipherTextByPublicKey(publicKey, plainText) {
    return crypto
      .publicEncrypt(
        { key: publicKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING },
        Buffer.from(plainText)
      )
      .toString("base64");
  }

  getPlainTextByPrivateKey(privateKey, cipherText) {
    return crypto
      .privateDecrypt(
        { key: privateKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING },
        Buffer.from(cipherText, "base64")
      )
      .toString("utf8");
  }

  getCipherTextByPrivateKey(privateKey, plainText) {
    return crypto
      .privateEncrypt(
        { key: privateKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING },
        Buffer.from(plainText, "utf8")
      )
      .toString("base64");
  }

  getPlainTextByPublicKey(publicKey, cipherText) {
    return crypto
      .publicDecrypt(
        { key: publicKey, padding: crypto.constants.RSA_PKCS1_OAEP_PADDING },
        Buffer.from(cipherText, "base64")
      )
      .toString("utf8");
  }
}

module.exports = Security;
