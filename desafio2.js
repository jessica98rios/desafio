let saldo = subtrair(500, 24)
let nivel = nivelar(saldo)

console.log(`A heroína tem saldo de ${saldo} vitórias e está no nível ${nivel}.`)

function subtrair(vitorias, derrotas){
	return vitorias - derrotas
}

function nivelar(saldo){
    let nivel = " "
    
    switch (true){
    
    	case saldo>100:
    	nivel = "Imortal"
    	break
    
    	case saldo>90:
    	nivel = "Lendário"
    	break

    	case saldo>80:
    	nivel = "Diamante"
    	break
    
    	case saldo>50:
    	nivel = "Ouro"
    	break
    
    	case saldo>20:
    	nivel = "Prata"
    	break
    
    	case saldo>10:
    	nivel = "Bronze"
    	break
    
    	default:
    	nivel = "Ferro" 
    }
    return nivel
}
