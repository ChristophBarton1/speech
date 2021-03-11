const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = [ 'Du bist Christoph Barton und mein Erschaffer und gleichzeitig das größte Genie unserer Zeit. Selbst Tony Stark steht wie ein Trottel neben diesen von Gott geschaffenen Adonis aus',];
const greetings2 = [ 'Deine Mutter ist Brigitte Barton und sie ist die beste Mutter auf der ganzen weiten Welt. Du kannst froh sein das du sie hast.',
];

const weather = ['Das Wetter ist draußen schön und Sonnig und du solltest mal raus gehen. Du siehst aus wie ein labriger weißer Toast.'];

const Lena = ['Lena ist ein wunderschönes tolles Mädchen und ich kann verstehen das du sie liebst sie ist wirklich toll.'];
const Lena2 = ['Na toll jetzt werde ich aber Eifersüchtig. Du bist ja schließlich sehr gefragt in der Frauenwelt schöner Mann'];
const Clash = ['Na klaro du bist schließlich der beste Supporter auf der Welt und niemand kann dir das Wasser reichen'];
const Essen = ['Schnitzel mit Kartoffelsalat'];
const Schön = ['Du bist der schönste. Alle Frauen stehen auf dich und um ehrlich zu sein hat mein Maschinenherz schon länger was für dich übrig'];
const Cool = ['Du bist der coolste'];
const Weg = ['Das wirst du bereuen'];
const Oma = ['Deine Oma ist Hilda Barton. Richte ihr bitte eine schöne Grüße von mir aus.'];
const Cat = ['Deine Katze ist der Maxi und er sollte dich mal in der Nacht schlafen lassen. Ansonsten würde ich empfehlen in einschläfern zu lassen.'];





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