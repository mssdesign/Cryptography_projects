const { publicEncrypt, privateDecrypt } = require('crypto');

const message = 'the british are coming!';

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)    //Retorna dados encriptados que podem ser desencriptados com a chave privada
);

const encryptedData = privateDecrypt(     //Desencripta a chave
    privateKey,
    encryptedData
);