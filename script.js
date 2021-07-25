var box=document.getElementById("box");

var viewWidth=window.innerWidth;
var viewHeight=window.innerHeight;

window.addEventListener("resize",function(event){
   viewWidth=window.innerWidth;
   viewHeight=window.innerHeight;
});

function getNewPosition(boxWidth,boxHeight){
   var newX=Math.floor((Math.random()*viewWidth)+1-boxWidth);
   var newY=Math.floor((Math.random()*viewHeight)+1-boxHeight);

   if(newX < 0){
      newX=0;
   }

   if(newY < 0){
      newY=0;
   }

   return {x:newX,y:newY};
}

box.addEventListener("mouseover",function(event){
   var boxAttr=box.getBoundingClientRect();
   console.log(boxAttr.width,boxAttr.height);
   var pos=getNewPosition(boxAttr.width,boxAttr.height);

   box.style.top=pos.y+"px";
   box.style.left=pos.x+"px";
});

