canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="Car 1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="Car 2.jpg";
car2_x=10;
car2_y=100;
background_image="https://postimg.cc/p9D2dqqZ";

function add(){
    
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;

car1_imgTag=new Image();
car1_imgTag.onload=uploadCar1;
car1_imgTag.src=car1_image;  

car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height)
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height)
}
window.addEventListener("keydown",mykeyDown);
function mykeyDown(e){
    keyPressed=e.keyCode;
    if (keyPressed=='38') {
        car1_up()
        console.log("Up arrow key");
    }
    if (keyPressed=='40') {
        car1_down()
        console.log("Down arrow key");
    }
    if (keyPressed=='37') {
        car1_left()
        console.log("Left arrow key");
    }
    if (keyPressed=='39') {
        car1_right()
        console.log("Right arrow key");
    }
    if (keyPressed=='87') {
        car2_up()
        console.log("W key");
    }
    if (keyPressed=='65') {
        car2_down()
        console.log("A key");
    }
    if (keyPressed=='83') {
        car2_left()
        console.log("S key");
    }
    if (keyPressed=='68') {
        car2_right()
        console.log("D key");
    }
}
function mykey_down{
    if(car1_x>700){
        console.log("Car 1 won");
        document.getElementById('game_status').innerHTML="CAR 1 WON!!"
    }
}