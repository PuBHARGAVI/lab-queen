
var positionlog=[["a8","b8","c8","d8","e8","f8","g8","h8"],["a7","b7","c7","d7","e7","f7","g7","h7"],["a6","b6","c6","d6","e6","f6","g6","h6"],["a5","b5","c5","d5","e5","f5","g5","h5"],["a4","b4","c4","d4","e4","f4","g4","h4"],["a3","b3","c3","d3","e3","f3","g3","h3"],["a2","b2","c2","d2","e2","f2","g2","h2"],
["a1","b1","c1","d1","e1","f1","g1","h1"]];
var queenobject={direction:"S",position:{x:4,y:0}};
function jumpmoveforward(){
    var n1=prompt("Enter number of steps");
    n=parseInt(n1);
var x1=queenobject.position.x,y1=queenobject.position.y;
if(queenobject.direction=="N"){
    y1+=n;
}
else if(queenobject.direction=="S"){
    y1-=n;
}
else if(queenobject.direction=="E"){
    x1+=n;
}
else if(queenobject.direction=="W"){
    x1-=n;
}   
else if(queenobject.direction=="NE"){
    x1+=n;
    y1+=n;
}
else if(queenobject.direction=="NW"){
    x1-=n;
    y1+=n;
}
else if(queenobject.direction=="SE"){
    x1-=n;
    y1-=n;
}
else if(queenobject.direction=="SW"){
    x1+=n;
}
if(x1<0 || x1>7 || y1<0 || y1>7){
    console.log("Input is invalid as she moves out of field");
}
else{
    queenobject.position.x=x1;
   queenobject.position.y=y1;
console.log("Current Position of queen is("+queenobject.position.x+","+queenobject.position.y+") that is "+positionlog[queenobject.position.x][queenobject.position.y]);
}
}
function changedirection(){
var dir=prompt("Enter Direction");
if(dir=="N"){
    queenobject.direction="N";
}
else if(dir=="S"){
    queenobject.direction="S";
}
else if(dir=="E"){
    queenobject["direction"]="E";
}
else if(dir=="W"){
    queenobject.direction="W";
}
else if(dir=="NE"){
    queenobject.direction="NE";
}
else if(dir=="NW"){
    queenobject.direction="NW";
}
else if(dir=="SE"){
    queenobject.direction="SE";
}
else if(dir=="SW"){
    queenobject.direction="SW";
}
console.log("current queen direction is "+queenobject.direction);
}
function whereabouts(){
    console.log("Current Position of queen is("+queenobject.position.x+","+queenobject.position.y+") that is "+positionlog[queenobject.position.x][queenobject.position.y]);
}
function resetposition(){
    queenobject.position.x=0;
    queenobject.position.y=0;
    console.log("Current Position of queen is("+queenobject.position.x+","+queenobject.position.y+") that is "+positionlog[queenobject.position.x][queenobject.position.y]);
}
