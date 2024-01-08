const button =  document.querySelector('button')
const paragrafo = document.querySelector('p')
const recognition = createRecognition()
let listening = false

button.addEventListener('click', e => {
    if(!recognition) return
    listening ? recognition.stop() : recognition.start()
    button.innerHTML =  listening ? 'Aperte para falar' : 'Parar de escutar'
   
})


function createRecognition () {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition =  SpeechRecognition !== undefined ? new SpeechRecognition() : null

    if (!recognition) {
        paragrafo.innerHTML = ' Funcao nao encontrado'
        return null
    }
recognition.lang = "pt_BR"
recognition.continuous = true;
recognition.onstart = () => listening = true
recognition.onend = () => listening = false
recognition.onerror = e => console.log('error',e)
recognition.onresult = e => paragrafo.innerHTML += e.results[0][0].transcript + "-"
return recognition

}



