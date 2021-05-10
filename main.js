canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=100;
car1_height=90;
car2_width=100;
car2_height=90;
background_image="racing.jpg";
car1_image="car1.png";
car2_image="car2.png";
car1x=10;
car1y=10;
car2x=10;
car2y=100;

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    console.log("we are in add function");
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;

    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;

}



function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1x, car1y, car1_width, car1_height );
    
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2x, car2y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keyPressed=e.keyCode;
    
    if(keyPressed=='38') {
        car1_up();
        console.log("up arrow key");
    }

    if(keyPressed=='40') {
        car1_down();
        console.log("down arrow key");
    }

    if(keyPressed=='37') {
        car1_left();
        console.log("left arrow key");
    }

    if(keyPressed == '39') {
        car1_right();
        console.log("right arrow key");
    }

    if(keyPressed == '87') {
        car2_up();
        console.log("key w");
    }

    if(keyPressed == '65') {
        car2_down();
        console.log("key a");
    }

    if(keyPressed == '83') {
        car2_left();
        console.log("key s");

    }

    if(keyPressed == '68') {
        car2_right();
        console.log("key d");

    }

    if(car1x >700) {
        console.log("car1 won");
        document.getElementById('game_status' ).innerHTML="Car1 Won";
    }

    if(car2x > 700) {
        console.log("car2 won");
        document.getElementById('game_status').innerHTML="Car2 Won";
    }

}

   function car1_up() {
       if(car1y >=0) {
           car1y=car1y-10;
           console.log("When up arrow is pressed, x=" + car1x + "| y =" + car1y);
           uploadBackground();
           uploadcar1();
           uploadcar2();
       }
   }

   function car1_down() {
  if(car1y <=500) {
    car1y=car1y+10;
    console.log("When down arrow is pressed, x=" + car1x + "| y =" + car1y);
    uploadBackground();
    uploadcar1();
    uploadcar2();

}

   }

   function car1_left() {
       if(car1x >=0) {
           car1x =car1x - 10;
           console.log("When left arrow is pressed, x=" + car1x + "| y =" + car1x);
           uploadBackground();
           uploadcar1();
           uploadcar2();
       }
   }

   function car1_right() {
       if( car1x <=700) {
           car1x=car1x+10;
           console.log("When right arrow is pressed, x=" + car1x + "| y =" + car1x);
           uploadBackground();
           uploadcar1();
           uploadcar2();
       }
   }

function car2_up() {
    if(car2y >=0) {
        car2y=car2y-10;
        console.log("When up arrow is pressed, x=" + car2x + "| y =" + car2x)
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if(car2y<=500) {
        car2y=car2y+10;
        console.log("When down arrow is pressed, x= " + car2x + "| y =" + car2x);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left() {
    if(car2x >=0) {
        car2x=car2x-10;
        console.log("when left arrow is pressed, x=" + car2x + "| y =" + car2x);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if(car2y <=500) {
        car2y=car2y+10;
        console.log("When right arrow is pressed, x=" + car2x + "| y =" + car2x);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}