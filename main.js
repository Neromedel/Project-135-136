status = "";


function preload() {
    
    
}

function setup() {
canvas = createCanvas(400,380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(400,300);
}

function draw() {
    image(video,0,0,480,380);
}

function start(){
    objectdetector = ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById('Status').innerHTML = "Status : Detecting Object";
    object_name = document.getElementById("Input").value;
}

function ModelLoaded() {
    console.log("Model Loaded!");
    status = true;
    
}