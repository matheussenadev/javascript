//class
class Pessoa{
    constructor(pnome){
        this.nome= pnome
    }
}
const p1 = new Pessoa("matheus")
const p2 = new Pessoa("Sena")

console.log(p1.nome)
console.log(p2.nome)

// = 
const person ={}

person.name = 'Olavo'
person.age = 23
console.log(person)

//[]
 const car = {
    rodas : 4,
    portas: 4

 }

 car['cor'] = 'vermelho'
 console.log(car)