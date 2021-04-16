const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = [ '',];
const greetings2 = [ '',
];

const weather = ['Lorem ipsum'];

const Lena = [''];
const Lena2 = [''];
const Clash = [''];
const Essen = [''];
const Schön = [''];
const Cool = [''];
const Weg = [''];
const Oma = [''];
const Cat = [''];





const SpeechRecognition = 
window.SpeechRecognition ||  window.webkitSpeechRecognition;
const recognition = new SpeechRecognition ();

recognition.onstart = function() {
    console.log('voice is activated, you can to mic');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};



btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();


    speech.text = 'Können sie das wiederholen?';



    if(message.includes('Hey Susi wer bin ich')){
        const finalText = 
        greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    
    if(message.includes('Susi Wer ist meine Mutter')){
        const finalText = 
        greetings2[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('Susi wie ist das Wetter heute')){
        const finalText = 
        weather[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('Hey Susi wie findest du Lena')){
        const finalText = 
        Lena[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('Hey Susi ich liebe Lena')){
        const finalText = 
        Lena2[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('Hey Susi gewinnen wir heute das Turnier')){
        const finalText = 
        Clash[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    if(message.includes('Hey Susi was gibt es heute zu essen')){
        const finalText = 
        Essen[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('Hey Susi bin ich schön')){
        const finalText = 
        Schön[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    
    if(message.includes('Hey Susi bin ich cool')){
        const finalText = 
        Cool[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('Ich lege Dich jetzt weg')){
        const finalText = 
        Weg[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('gute Nacht Susi')){
        const finalText = 
        GuteNacht[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    if(message.includes('Spiel mir ein cooles Lied')){
        const finalText = 
        Lied[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('was gab es heute zu Essen')){
        const finalText = 
        Essen[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    if(message.includes('Wer ist meine Oma')){
        const finalText = 
        Oma[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('Wie heißt meine Katze')){
        const finalText = 
        Cat[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    
    
    
    
    
    
    
    








   
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);









    myDate = new Date();
setInterval(function(){
myDate = new Date();
$('.time').html(myDate.getHours() + ":" + myDate.getMinutes() + "<b>" + myDate.getSeconds()+"</b>");
}, 1000);

    

}
