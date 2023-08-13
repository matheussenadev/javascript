function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('ERRO! Verifique seus dados novmente.')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let gender = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gender = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança-masc.jpg')
            }
            else if (idade >=10 && idade < 18){
                //jovem
                img.setAttribute('src', 'jovem-masc.jpg')
            } else if (idade >= 18 && idade < 50){
                img.setAttribute('src', 'adulto-masc.jpg')
                //adulto

            } else {
                // idoso
                img.setAttribute('src', 'idoso-masc.jpg')
            }
        } else if(fsex[1].checked){
            gender = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança-fem.jpg')
            }
            else if (idade >=10 && idade < 18){
                //jovem
                img.setAttribute('src', 'jovem-fem.jpg')
            } else if (idade >= 18 && idade < 50){
                img.setAttribute('src', 'adulto-fem.jpg')
                //adulto

            } else {
                // idoso
                img.setAttribute('src', 'idoso-fem.jpg')
            }
           
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gender} de idade ${idade} anos.`
        res.appendChild(img)
    }
}