let num = [5,8,2,9,3]
num[5] = 4
num.push(5)
let c= num.length
num.sort()

console.log (`Nosso vetor é o ${num}`)
console.log (`Seu array possui ${c} elemnetos`)
console.log(`O primeiro elemento é ${num[0]}`)

//for(let pos = 0; pos<num.length; pos++){
   // console.log(`A posição ${pos} tem valor ${num[pos]}`)
//}
//for(let pos in num ){
   // console.log(num[pos])
//}
let pos = num.indexOf(10)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{console.log(`O valor está na posição ${pos} `)
}
