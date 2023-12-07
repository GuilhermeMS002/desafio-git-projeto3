class personagem {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        console.log(`o ${this.tipo} atacou usado ${ataque}`)
    }
}

let magician = new personagem("Richard", 19, "mago")
let warior = new personagem("Eliza", 22, "guerreiro")
let monk = new personagem("Ping", 82, "monge")
let ninja = new personagem("Konan", 35, "ninja")

let ataque

switch (monk.tipo) {
    case "mago":
        ataque = "magia";
        break;
    case "guerreiro":
        ataque = "espada"
        break;
    case "monge":
        ataque = "artes marciais";
        break;
    case "ninja":
        ataque = "shuriken";
        break;
    default:
        ataque = "indefinido"
}

monk.atacar()