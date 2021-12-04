const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

//Encriptando
const message = 'i like turtles';
const key = randomBytes(32);
const iv = randomBytes(16); //iv -> Initialization vector (previne sequências identicas de texto) - Assim uma mesma sequencia de texto nunca irá produzir um código igual

const cipher = createCipheriv('aes256', key, iv) //Encriptador

const encryptedMessage = cipher.update(message, 'utf-8', 'hex') + cipher.final('hex');


//Descriptando
const decipher = createDecipheriv('aes256', key, iv)    //Desencriptador

const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf-8');


