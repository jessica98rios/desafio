let nome = "Jéssica"
let idade = 26
let XP = 45
nivel = " "
console.log(`A jogadora ${nome} tem ${idade} anos.`)

class heroiAtaque{
	constructor(tipo, ataque){
    	this.tipo = tipo
        this.ataque = ataque
    }
    escrever(){
    	console.log(`Seu personagem ${this.tipo} atacou usando ${this.ataque}.`)
    }
}

switch (true){
    
   	case XP>100:
   	nivel = new heroiAtaque("Monge", "Artes Marciais")
    break
    
 	case XP>50:
   	nivel = new heroiAtaque("Guerreiro", "Espada")
   	break
            
	default:
   	nivel = new heroiAtaque("Mago", "Magia")
}

nivel.escrever()
