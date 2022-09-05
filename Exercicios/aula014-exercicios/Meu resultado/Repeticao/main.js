function result() {
    let inicio = document.getElementById('contar-inicio')
    let fim = document.getElementById ("contar-fim")
    let passo = document.getElementById ('contar-passo')
    let resultado = document.getElementById ('resultado')
if(inicio.value.lenght == 0 || fim.value.length == 0|| passo.value.lenght == 0){
}   else {
        resultado.innerHTML = 'contando:'
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let pas = Number(passo.value)
    if (pas <= 0) {
            window.alert('Funcionando com sucesso!')
            pas = 1
}   
    if (ini < f) {
        for (let contagem = ini; contagem <= f; contagem += pas) {
            resultado.innerHTML += `${contagem} \u{1F449}`
            }
        } 
    }
}