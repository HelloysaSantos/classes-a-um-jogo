class heroi {

    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar () {

        let ataque;

        if (this.tipo == "Mago") {
            ataque = "magia";
        } else if (this.tipo == "Guerreiro") {
            ataque = "espada";
        } else if (this.tipo == "Monge") {
            ataque = "artes marciais";
        } else if (this.tipo == "Ninja") {
            ataque = "shuriken";
        } else {
            ataque = "mãos"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroiJulio = new heroi("Julio", 28,"Ninja");
heroiJulio.atacar();