const { generateKeyPairSync } = require('crypto') //Gerador de par de chaves
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  //Necessário para criar as chaves publica e privada
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki', //Recomendado pela documentação em generateKeyPairSync: https://nodejs.org/api/crypto.html#cryptoscryptsyncpassword-salt-keylen-options
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem', //PEM -> PRIVACY ENHANCED MAIL
    // cipher: 'aes-256-cbc',       //mais segurança
    // passphrase: 'top secret'    //Palavra passe
  },
});

console.log(publicKey);
console.log(privateKey);

module.exports = {
    privateKey, publicKey
}

//Nota da documentação: When encoding public keys, it is recommended to use 'spki'. When encoding private keys, it is recommended to use 'pkcs8' with a strong passphrase, and to keep the passphrase confidential
