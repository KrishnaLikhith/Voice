var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function voice() {
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    //alert(Content);
    if (Content == "Google") {
        window.location = "google.html";


    } else if (Content == "Yahoo") {
        window.location = "yahoo.html";

    } else if (Content == "Bing") {
        window.location = "bing.html";
    } else if (Content == "Yandex") {
        window.location = "yandex.html";
    } else if (Content == "Youtube") {
        window.location = "youtube.html";
    } else if (Content == "Facebook") {
        window.location = "facebook.html";
    } else if (Content == "Twitter") {
        window.location = "twitter.html";
    } else if (Content == "Instagram") {
        window.location = "insta.html";
    }
}