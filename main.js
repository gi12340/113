function preload(){

}

function setup(){
canvas=createCanvas(680,450)
canvas.position(110,250)
video= createCapture(VIDEO)
video.hide()
tintColor=""
}

function draw(){
    image(video,0,0,680,450)
    tint(tintColor)
}

