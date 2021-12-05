const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'this data must be signed';

const signer = createSign('rsa-sha256')

signer.update(message);

const signature = signer.sign(privateKey, 'hex');

//Verificador
const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');    

console.log('Está verificado? ' + isVerified)