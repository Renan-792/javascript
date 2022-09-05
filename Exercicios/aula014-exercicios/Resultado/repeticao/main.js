function contar() {
    let inicio = document.getElementById('caixa-inicio')
    let fim = document.getElementById('caixa-fim')
    let passo = document.getElementById('caixa-passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 ||passo.value.length == 0) {
    } else { 
        resultado.innerHTML = 'CONTANDO:'
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let pas = Number(passo.value)
        if (pas <= 0) {
            window.alert('Passo Inválido!')
            pas = 1 
        }
        if (ini < f) {
        // Contagem crescente 
            for(let contagem = ini; contagem <= f; contagem += pas ) {
                resultado.innerHTML += ` ${contagem} \u{1F449}` 

        }
        }
    }
}