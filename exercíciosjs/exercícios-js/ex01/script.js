function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 
    msg.innerHTML = (`Agora são ${hora} horas`)
    if( hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if( hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else{
        //Boa noite
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#515154'
    }
}
