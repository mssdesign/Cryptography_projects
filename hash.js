const { createHash } = require('crypto');   //{} as chaves pegam apenas essa determinada função do módulo crypto

//Criando o hash de uma string
function hash(input) {
    return createHash('sha256').update(input).digest('hex'); //binary, hex, base64
}

console.log(hash('123quaresma'))