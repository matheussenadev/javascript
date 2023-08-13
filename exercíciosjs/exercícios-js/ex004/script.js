function gerar(){

const num = document.querySelector("#txt-number")

const select = document.querySelector("#select")

 
if(num.value.length == 0){
    alert("Digite um número.")
}
else{
    const n = Number(num.value)
    let op = 1
    select.innerHTML = ''
    while(op<=10){
        const item = document.createElement("option")
        item.text = `${n} x ${op} = ${n*op}`
        item.value = `select${op}`
        select.appendChild(item)
        op++
    }
}
}
