function gerar(){
        const number = document.querySelector("#txt-number")
        const barra = document.querySelector("#barra")

        if(number.value.length == 0){
            alert("Digite um número!")
        }
        else{
            const n = Number(number.value)
            let i = 1
            barra.innerHTML = ""
            
            while(i<= 10){
                const opcoes = document.createElement("option")
                opcoes.text = (`${n} x ${i} = ${n*i}`)
                opcoes.value = `select${i}`
                barra.appendChild(opcoes)
                i++
            }
        }


}