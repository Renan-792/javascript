var agora = new Date()
var diaSem = agora.getDay()

    diaSem = 1
/*
*/

    switch(diaSem){
        case 0:
            console.log('Domingo')
            
        case 1:
            console.log('Segunda')
            
        case 2:
            console.log('Terça')
            
        case 3:
            console.log('Quarta')
            
        case 4:
            console.log('Quinta')
            
        case 5:
            console.log('Sexta')
            
        case 6:
            console.log('Sábado')
        default:
            console.log(`[ERRO] DIA INVÁLIDO! :(`)
        
    }
