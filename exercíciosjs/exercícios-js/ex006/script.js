function gerar(){
    const num = document.querySelector(".numtxt")
    const s = document.querySelector("#s")

    if(num.value.length == 0){
        alert("[ERRO] Digite um número!")
    }
    else{
        const n = Number(num.value)
        s.innerHTML = ""
        for(let c = 1; c <= 10; c++){
            const option = document.createElement("option")
            option.text =(`${n} x ${c} = ${n*c}`)
            option.value = `select${c}`
            s.appendChild(option)
        }
    }
}