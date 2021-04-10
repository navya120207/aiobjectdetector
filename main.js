status="";

function preload(){

}
function setup(){
    canvas=createCanvas(480,340);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,480,320);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',model_loaded);
    document.getElementById("status").innerHTML="status: Detecing objects";
    object=document.getElementById("input").value;
    console.log(object)
}
function model_loaded(){
    console.log("model is loaded");
    status=true;

}