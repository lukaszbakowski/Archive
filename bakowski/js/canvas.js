/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var canvas = document.getElementById("hello");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var cnt = canvas.getContext("2d");

var map = {};

var direction = {
    x : 1,
    y : 1
};

var c = {  //create an object to draw
  x:0,  //x value
  y:0,  //y value
  r:22 //radius
};
var redraw = function(){  // this function redraws the c object every frame (FPS)
  
      
  
  cnt.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas
  cnt.beginPath();  //start the path
  cnt.moveTo(55,555);
  cnt.arc(c.x, c.y, c.r, 0, Math.PI*2); //draw the circle
  cnt.closePath(); //close the circle path
  cnt.fill(); //fill the circle
 
  requestAnimationFrame(redraw);//schedule this function to be run on the next frame

};

map.move = ()=> {
    if(c.x >= canvas.width) {
        direction.x = -1;
    } else if (c.x <=0) {
        direction.x=1;
    }
    if(c.y >= canvas.height) {
        direction.y = -1;
    } else if (c.y <=0) {
        direction.y=1;
    }
    c.x+=33*direction.x;

  c.y+=22*direction.y;

  requestAnimationFrame(map.move);
};
map.move();
redraw();