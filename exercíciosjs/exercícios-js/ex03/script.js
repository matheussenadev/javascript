function contar(){
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        alert("ERRO")
    }else{
        res.innerHTML = "Contando..."
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f ; c += p){
            res.innerHTML += `${c}- `
        }
    }

}