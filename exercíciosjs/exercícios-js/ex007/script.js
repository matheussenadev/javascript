const num = document.querySelector(".txtn")
const select = document.querySelector("#select")
const res = document.querySelector(".res")
const arr = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inSelect(n,s){
    if(s.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inSelect(num.value, arr)){
        arr.push(Number(num.value))
        const item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        select.appendChild(item)
        res.innerHTML = " "

    }else{
        alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ""
    num.focus()
}
function finalizar(){
    if( arr.length == 0){
        alert("Adicione algum número")
    }else{
        const total = arr.length
        res.innerHTML = " "
        res.innerHTML += `<p>Ao todo temos ${total} elementos</p>`
        
    }
}