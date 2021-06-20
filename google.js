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
        window.open("https://www.google.com/search?q=" + Content, "_blank");
        console.log("Taking you to Google");
        speak();

    }
    document.getElementById("textbox1").innerHTML = Content;

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking you to Google";


}

function back() {
    window.location = "index.html";
}