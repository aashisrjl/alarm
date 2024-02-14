var time = document.getElementById("clock");
var s = document.getElementById("enter");
var btn = document.getElementById("btn");
var msg = document.getElementById("msg");
var speech = document.getElementById("speech");
var select = document.getElementById("select");
var alarmTimeout; // Variable to store the alarm timeout
msg.style.display="none";

// Function to play the alarm sound
function play() {
    if(speech.value == ""){
  //var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  var audio = new Audio(select.value);
    audio.play();
    console.log(audio.play());
    msg.style.display="block";
    msg.innerHTML = "you can enter msg for your own word";
    }else{
        let utterance = new SpeechSynthesisUtterance(speech.value);
        speechSynthesis.speak(utterance);
    }
}

// Function to update the clock every second
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000);

// Function to set the alarm
function set() {
    var min = parseInt(s.value); 
    if (min >= 0) { 
        clearTimeout(alarmTimeout); 
        alarmTimeout = setTimeout(() => {
            play(); 
        }, 60000 * min); 
        msg.style.backgroundColor="green";
        msg.style.display="block";
        msg.innerHTML = "Alarm is set";
    } else {
        msg.style.display="block";
        msg.style.backgroundColor="red";
        msg.innerHTML="enter a valid positive number";
    }

    setTimeout(() => {
        msg.style.display="none";
    }, 2000);


}



