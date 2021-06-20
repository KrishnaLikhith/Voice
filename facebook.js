var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox1").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content != "") {
        window.open("https://www.facebook.com/search/top?q=" + Content, "_blank");
        speak();

    }
    document.getElementById("textbox1").innerHTML = Content;

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking you to Facebook";


}

function back() {
    window.location = "index.html";
}

function signin() {
    window.open("https://en-gb.facebook.com/");
}
//https: //en-gb.facebook.com/
//window.open("https://www.google.com/search?q=Schools+near " + address + "&tbm=lcl&sxsrf=ALeKk00V3MrKzV990uV3kKJpCt-GLgV07A%3A1621923731482&ei=k5esYKTZHPWomgfN-rz4CA&oq=Schools+near " + address);