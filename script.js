console.log('js ok')

const MailList = [
    'pippo@gmail.com',
    'edo@gmail.com',
    'albi@gmail.com',
    'elena@gmail.com',
    'raul@gmail.com',
]
// chiedo  mail
const mail = prompt('Scrivi la tua mail')

console.log(MailList, mail)

let outputMessage = 'la mail non è presente'

// controllo se la mail è presente nell'elenco

for (let i = 0; i < MailList.length; i++) {
    const RispostaMail = MailList [i]

    // console.log(RispostaMail)
    if (mail === RispostaMail) {
        
        outputMessage = 'La mail è presente'
    }
}
console.log(outputMessage)
