const texts = document.querySelector('.text')
const textarea = document.querySelector('.textarea')
const refresh = document.querySelector('.btnrefresh')
const startbtn = document.querySelector('.btn-start')
const message = document.querySelector('.msg')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();

recognition.interimResults = true;

recognition.addEventListener('result',(e) => {

    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    textarea.innerText = text;
    texts.appendChild(textarea);

    console.log(text);
})

recognition.addEventListener('end', ()=>{
recognition.start();
})


startbtn.addEventListener('click', () => {
    message.classList.add('visible'); 
    recognition.start();
})

refresh.addEventListener('click',()=>{
    window.location.reload()
})

