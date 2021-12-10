const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

//scryptSync -> Recebe parâmetros e retorna um hash com salt
//randomBytes -> Cria valores pseudo aleatórios
//timingSafeEqual -> Altera o tempo de processamento para não permitir inferência por tempo evitando "timing attacks"

//Criando salt
function signup(email, password) {
    const salt = randomBytes(16).toString('hex');   //Gerando SALT
    const hashedPassword = scryptSync(password, salt, 64);

    const user = { email, password: `${salt}:${hashedPassword}` }
}

function login(email, password) {
    const user = users.find(v => v.email === email);

    const [salt, key] = user.password.split(':');

    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');  //*buffer é o segmento da memória utilizado

    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'login success!';
    } else {
        return 'login fail!';
    }
}