const produtos = [
    { id: 1, nome: 'detergente', valor : 2.00, categoria: 'limpeza'},
    { id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    { id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},
    { id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
    { id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento'}

];

//Map
const ids = produtos.map(produto => produto.id)
const nomes = produtos.map(produto => produto.nome)
const valores = produtos.map(produto => produto.valor)

const números = [1,2,3,4,5]
const duplicados = números.map(numeros => numeros*2)

console.log(valores)
console.log(duplicados)




//Filter
const alimento = produtos
.filter(produto => produto.categoria === 'alimento')
.map(alimento => alimento.nome)
console.log(alimento)



//Reduce
const num = [1,2,3,4]
const somar = num.reduce((acc, numero) => acc + numero)
console.log(somar)

const total = produtos.reduce((acc, produto) => acc + produto.valor, 0)
console.log(total)

//Every

const number = [12, 13, 20,130, 44]
const verificar = number.every(num => num > 10 )
console.log(verificar)

const verValor = produtos
.every(valores => valores.valor >= 3.0)
console.log(verValor)


//Some

const numero = [1,2,3,4]
const ver = numero.some(n => n>3)
console.log(ver)

//Find

const verF = produtos
.find(p => p.nome === 'leite')
console.log(verF)

//incldes

const numm = [1,2,3,4]
const includes = num.includes(9)
console.log(includes)