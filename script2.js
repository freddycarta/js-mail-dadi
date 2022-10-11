const buttonElement = document.getElementById('play')
// console.log(buttonElement)

buttonElement.addEventListener('click', function(){
    // console.log('click button')

    const dadoutente = Math.floor(Math.random() * 6) + 1
console.log (dadoutente)

const dadoPC = Math.floor(Math.random() * 6) + 1
    console.log (dadoPC)

let messaggio ='pareggio';

if (dadoutente > dadoPC) {
    messaggio = 'hai vinto utente'
} else if (dadoutente < dadoPC) {
    messaggio = 'ha vinto il pc'
}

console.log(messaggio)
})




