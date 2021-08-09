var bg1,bg2,bg3,empsky,sky1;
var appState=0;
var butiss;
var iss,issImage;
var dataInfoA,dataInfoB,dataInfo;

function preload(){
sky1=loadImage("background/sky3.jpg");
issImg=loadImage("background/iss.jpg");
}

function setup(){
    createCanvas(displayWidth,displayHeight-150);
    butiss=createButton('ISS LIVE')
    butiss.position(displayWidth/2-215,displayHeight/2-60)
    butiss.style('background','lightgreen')
    butiss.size(350,50);
}

function draw(){
if(appState===0){
background(sky1);

textSize(60);
fill("orange");
stroke("black")
strokeWeight(8)
text("LIVE ISS DATA",displayWidth/2-240,displayHeight/2-220)

textSize(60);
fill("red");
stroke("black")
strokeWeight(8)
text("LET'S CHECK THE LIVE POSITIONS OF THE ISS",displayWidth/2-690,displayHeight/2-110)
}
butiss.mousePressed(()=>{
    appState=1;
})
if(appState===1){    

    getIss();
    background(sky1);
    iss=createSprite(displayWidth/2-450,displayHeight/2-100,500,500);
    iss.addImage(issImg);
    iss.scale=0.8;
    drawSprites();
    butiss.hide();
    textSize(60);
    fill("red");
    text("ISS LIVE",displayWidth/2+340,displayHeight/2-400);
    textSize(50);
    fill("yellow");
    text("LONGITUDE :",displayWidth/2+110,displayHeight/2-200);
    text("LATITUDE :",displayWidth/2+110,displayHeight/2-120);
    text("HEMISPHERE (E/W) :",displayWidth/2+110,displayHeight/2-40);
    text("HEMISPHERE (N/S) :",displayWidth/2+110,displayHeight/2+40);
    text("CONTINENT :",displayWidth/2+110,displayHeight/2+120);

    textSize(50);
    fill("red");
    text(dataInfoA,displayWidth/2+470,displayHeight/2-200);
    text(dataInfoB,displayWidth/2+420,displayHeight/2-120);

    // if(hello1==="-"){
    //     text("WESTERN",displayWidth/2+650,displayHeight/2-30);
    // }else{
    //     text("EASTERN",displayWidth/2+650,displayHeight/2-40);
    // }
    // if(hello2==="-"){
    //     text("SOUTHERN",displayWidth/2+620,displayHeight/2+40);
    // }else{
    //     text("NORTHERN",displayWidth/2+620,displayHeight/2+40);
    // }

    if(dataInfoA>60 && dataInfoA<120 && dataInfoB>10 && dataInfoB<80){
        text("ASIA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }
    if(dataInfoA>40 && dataInfoA<60 && dataInfoB>10 && dataInfoB<40){
        text("ASIA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }
    if(dataInfoA>120 && dataInfoA<180 && dataInfoB>60 && dataInfoB<70){
        text("ASIA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }
    
    if(dataInfoA>-15 && dataInfoA<50 && dataInfoB>-35 && dataInfoB<35){
        text("AFRICA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }


    if(dataInfoA>113 && dataInfoA<153 && dataInfoB<-10 && dataInfoB>-43){
        text("AUSTRALIA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }


    if(dataInfoA>-10 && dataInfoA<40 && dataInfoB>-40 && dataInfoB<70){
        text("EUROPE",displayWidth/2+450,displayHeight/2+120);
    }else{
    }

    if(dataInfoA>-160 && dataInfoA<-30 && dataInfoB<70 && dataInfoB>15){
        text("NORTH AMERICA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }

    if(dataInfoA>-80 && dataInfoA<-35 && dataInfoB<10 && dataInfoB>-55){
        text("SOUTH AMERICA",displayWidth/2+450,displayHeight/2+120);
    }else{
    }

}
}
async function getIss(){
    var response=await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    var responseJSON=response.json();
    var dataInfoA=responseJSON.longitude;
    var dataInfoB=responseJSON.latitude;
}