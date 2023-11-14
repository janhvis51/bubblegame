var rn;
var c=0;;
var time = 60;
function makebubble(){
var boxes = "";
for(var i = 0; i < 207 ; i++)
{
    boxes +=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
}
document.querySelector("#ptmbottom").innerHTML = boxes;
}
function hit()
{
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent =rn;
}
setInterval(function run(){
    if(time>0)
    {
     time--;
    document.querySelector("#itr").textContent =time;
    }
    else
    {
        document.querySelector("#ptmbottom").textContent ="game over";
    }
},1000);

function incscore()
{
    c+=10;
   document.querySelector("#plus").textContent =c;
}
document.querySelector("#ptmbottom").addEventListener("click",function(dets)
{
 if(Number(dets.target.textContent) == rn)
 {
   incscore();
  hit();
  makebubble();
}
}) 
makebubble();
hit();
run();
incscore();
