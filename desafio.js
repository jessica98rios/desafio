let heroina = "Jéssica"
let xp = 123
let nivel = ""

switch (true){
  
    case xp>10000:
    nivel = "Radiante"
    break
    
    case xp>9000:
    nivel = "Imortal"
    break
    
    case xp>8000:
    nivel = "Ascendente"
    break

	case xp>7000:
    nivel = "Platina"
    break
    
    case xp>5000:
    nivel = "Ouro"
    break
    
    case xp>2000:
    nivel = "Prata"
    break
    
    case xp>1000:
    nivel = "Bronze"
    break
    
	default:
    nivel = "Ferro" 
    
console.log("A heroína de nome " + heroina + " está no nível de " + nivel)