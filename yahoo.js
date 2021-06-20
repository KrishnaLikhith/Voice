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
        window.open("https://in.search.yahoo.com/search?p=" + Content, "_blank");
        console.log("Taking you to Yahoo");
        speak();

    }
    document.getElementById("textbox1").innerHTML = Content;

}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking you to Yahoo";


}

function back() {
    window.location = "index.html";
}