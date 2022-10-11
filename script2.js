// const buttonElement = document.getElementById('play')

// buttonElement.addEventListener('click', function() {
//     console.log('click button')

    
// })

const dadoutente = Math.floor(Math.random() * 6) + 1
console.log (dadoutente)

const dadoPC = Math.floor(Math.random() * 6) + 1
    console.log (dadoPC)

let messaggio ='pareggio';

if (dadoutente > dadoPC) {
    messaggio = 'hai vinto'
} else if (dadoutente < dadoPC) {
    messaggio = 'hai perso'
}

console.log(messaggio)