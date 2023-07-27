var idade = 44
if (idade < 16){
    console.log('Nâo vota')
} else if( idade >= 16 &&  idade < 18 || idade >= 67){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}