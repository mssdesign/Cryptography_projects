const { createHmac } = require('crypto');

const key = 'super-secret!';    //Se alterar a senha a saída será diferente

const message = 'Descobri a mensagem'

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac)