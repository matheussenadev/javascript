// let i = 0
// while(i<=10){
//     console.log(i)
//     i++
// }
// let i = 10
// do {
//     console.log(i)
//     i++
// } while(i<=10)

// let res = ''
// do{
//     res = prompt('Você compreendeu o conteúdo?')
// } while(res.toLocaleLowerCase() != 'sim')

// for(let i =10; i>=1;i--){
//     console.log(i)
// }

// ['a','b'].forEach(function(item){
//     console.log(item)
// })
// let ul = document.querySelector('#tabuada')
// let num = prompt('Digite um número para ver a tabuada:')
// let i = 1
// while(i<=10){
//     let res = num * i
//     console.log(res)
//     let li = document.createElement('li')
//     li.innerHTML =`${num} * ${i} = ${res}`
//     ul.appendChild(li)
//     i++
// }
// let i = 1
// do{
//     let res = num * i
//     let li =document.createElement('li')
//     li.innerHTML = `${num} * ${i} = ${res}`
//     ul.appendChild(li)
//     i++
// } while(i<=10)
//  for(let i = 1; i<=10;i++){
//     let res = num * i
//     let li = document.createElement('li')
//     li.innerHTML = `${num} * ${i} = ${res}`
//     ul.appendChild(li)
//  }

// for(let i = 0; i<=100; i++){
//     let screen = document.querySelector('#teste')
//     screen.innerHTML += i + ", "
// }
// var agr = new Date().getFullYear()
// for(let i = agr; i >= 1900; i--){
//     let ano= document.querySelector('#ano')
//     ano.innerHTML += "<option value='"+i+"'>"+i+"</option>"
// }

// const carros = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chevette"]

// var tamanho =carros.length;

// for(let i= 0; i < tamanho; i++ ){
//     document.getElementById('teste').innerHTML += carros[i] + " - "
// }

const name = ['Matheus' ,'Sena', 'Sousa']
const tamanho =name.length

for(let i=0; i < tamanho; i++){
    const screen = document.querySelector('#teste')
    screen.innerHTML += name[i]
}