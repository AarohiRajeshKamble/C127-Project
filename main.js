img ="";
status ="";
objects =[];
function preload() {
    img = loadeImage('dog_cat.jpg');   
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").inneerHTML = "Status : Object Detecting";
}
 function draw(){
    Image(imag, 0, 0, 640, 420);
     if(status != "")
     {
        
     }
     fill('#FF0000');
     text("bedroom", 123, 134);
     nofill();
     stroke("#FF000")
     rect(30, 60, 450, 350);
 }
 function modelLoaded() {
    console.log("Mode loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
 }
 function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results); 
    objects = results;
 }
 