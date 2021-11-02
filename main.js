prediction1 = "";
prediction2 = "";

// Webcam.set({
//     height: 300,
//     width: 350,
//     image_format: "png",
//     png_quality: 100 });

Webcam.attach("#camera");

function captureImage(){
    Webcam.snap(function (image){
       document.getElementById("photoResult").innerHTML = "<img src = '"+image+"' id = 'imageTag'>"; 
    });
}

console.log("ml5 version ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VHshotXhv/model.json", function(){
    console.log("Model Loaded");
});


function speak() {
    var synth = window.speechSynthesis;
    speakData1 = "The first Prediction fetched from teachable machine is " + prediction1;
    speakData2 = "The second Prediction fetched from teachable machine is  " + prediction2;
    tellThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(tellThis);
}

//the set function needs the values stored in the off brakets. it will not work if it 
//is given in out of the bracets

function predictEmotion() {
    var img = document.getElementById("imageTag");
    classifier.classify(img, obtainedResults);
}

function obtainedResults(error, result){
    if(error) {
        console.error(error);
    }
    else{
        console.log(result);
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        //we are doing this to add the emoji for the prediction 1
    if(prediction1 == "Happy"){
        document.getElementById("predict1Emoji").innerHTML = "😊"
    }
    if(prediction1 == "Sad"){
        document.getElementById("predict1Emoji").innerHTML = "😔"
    }
    if(prediction1 == "Angry"){
        document.getElementById("predict1Emoji").innerHTML = "😤"
    }


  //we are doing this to add the emoji for the prediction 1
    if(prediction1 == "Happy"){
        document.getElementById("predict1Emoji").innerHTML = "😊"
    }
    if(prediction1 == "Sad"){
        document.getElementById("predict1Emoji").innerHTML = "😔"
    }
    if(prediction1 == "Angry"){
        document.getElementById("predict1Emoji").innerHTML = "😤"
    }
      
    //we are doing this to add the emoji for the prediction 2
      if(prediction2 == "Happy"){
        document.getElementById("predict2Emoji").innerHTML = "😊"
    }
    if(prediction2 == "Sad"){
        document.getElementById("predict2Emoji").innerHTML = "😔"
    }
    if(prediction2 == "Angry"){
        document.getElementById("predict2Emoji").innerHTML = "😤"
    }
    document.getElementById("Result1").innerHTML = prediction1;
    document.getElementById("Result2").innerHTML = prediction2;
    speak();
    }
}