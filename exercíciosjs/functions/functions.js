// let valor = 20

// function incremento(){
//     valor = 20 + 30
// }
// incremento()
// console.log(valor)

function mostraNome(nome){
        console.log(nome)
}

mostraNome("Matheus")
mostraNome("opa")




function soma(n1,n2){
    const somaDosNúmeros = n1 + n2

    return somaDosNúmeros
}

const meusN = soma(2,8)
const meusN2 = soma(50, 40)
 
console.log(meusN)
console.log(meusN2)


function mult(n1, n2, n3){
    const resultado = n1 * n2 * n3
    return resultado
}

const screen = mult(2,3,4)

console.log(screen)

function div(n1, n2){
    const res = n1 / n2
    return res
}

const mydiv = div(10, 2)
console.log(mydiv)

function sub(n1, n2){
    const subr = n1 -n2
    //console.log(n1 - n2)
    console.log(subr)

}
sub(5,2)

n3 = 4
n4 = 5
function soma2(){
    console.log(n3+n4)
}
soma2()

//Arrow function

const multi = (num1, num2) =>{
        const multip = num1 * num2
        return multip
}
 const multipliaction = multi(3,4)
console.log(multipliaction)

const mostreNome = (nome1, nome2) =>{
    const concatenar = nome1 + nome2
    return concatenar
}

const name = mostreNome("Mateus", " Sena")
console.log(name)

function desconto(v, d){
    const des = (d/100) * v
    return des
}
 const des = desconto(200,10)
 console.log(`Seu desconto é de ${des} reais.`)


let parágrafo = document.querySelector('#screen')
 const compra = (v,d)=>{
    const valorf = v - ((d/100) * v)
    return valorf
 }
  const r = compra(100,15)
  parágrafo.innerHTML += (`Seu valor final é ${r} reais.`)