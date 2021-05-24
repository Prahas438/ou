var canvas=new fabric.Canvas('my_canvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var playerobject="";
var blockobject="";
function player_update(){
    fabric.Image.fromURL("player.jpeg",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:player_y,left:player_x
        });
        canvas.add(playerobject);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(block_width);
        blockobject.scaleToHeight(block_height);
        blockobject.set({
            top:player_y,left:player_x
        });
        canvas.add(blockobject);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("p and shift pressed together");
        block_width=block_width+10
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("m and shift pressed together");
        block_width=block_width-10
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(keypressed=='38'){
        up();
        console.log("up");
       }
       if(keypressed=='37'){
           left();
           console.log("left");
          }
          if(keypressed=='39'){
           right();
           console.log("right");
          }
          if(keypressed=='40'){
           down();
           console.log("down");
          }
          if(keypressed=='82'){
           new_image("Screenshot 2021-05-21 at 7.47.27 PM.png");
           console.log("r");
          }
          if(keypressed=='72'){
           new_image("Screenshot 2021-05-21 at 7.49.54 PM.png");
           console.log("h");
          }
          if(keypressed=='70'){
           new_image("Screenshot 2021-05-21 at 7.52.39 PM.png");
           console.log("f");
          }
          if(keypressed=='67'){
           new_image("Screenshot 2021-05-21 at 7.54.04 PM.png");
           console.log("c");
          }
          if(keypressed=='76'){
           new_image("Screenshot 2021-05-21 at 7.58.53 PM.png");
           console.log("l");
          }
          function up(){
            if (player_y>=0){
                player_y=player_y-block_height;
                console.log("block image height="+block_height);
                console.log("when up key is pressed,x="+player_x+" y="+player_y);
                canvas.remove(playerobject);
                player_update();
            }
        }
        function down(){
            if (player_y<=500){
                player_y=player_y+block_height;
                console.log("block image height="+block_height);
                console.log("when down key is pressed,x="+player_x+" y="+player_y);
                canvas.remove(playerobject);
                player_update();
            }
        }function left(){
            if (player_x>=0){
                player_x=player_x-block_width;
                console.log("block image width="+block_width);
                console.log("when left key is pressed,x="+player_x+" y="+player_y);
                canvas.remove(playerobject);
                player_update();
            }
        }function right(){
            if (player_x<=850){
                player_x=player_x+block_width;
                console.log("block image width="+block_width);
                console.log("when right key is pressed,x="+player_x+" y="+player_y);
                canvas.remove(playerobject);
                player_update();
            }
        }
}