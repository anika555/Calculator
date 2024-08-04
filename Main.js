function anika(){
    var s=document.getElementById("display").value;
    var i=s*s;
    document.getElementById("display").value=i;

}
function pqr(){
    var p=document.getElementById("display").value;
    var q=p*p*p;
    document.getElementById("display").value=q;

}
function abc(){
    var s=document.getElementById("display").value;
    var ans=Math.sqrt(s);
    document.getElementById("display").value=ans;
}
function wer(){
    var w=document.getElementById("display").value;
    var e=Math.cbrt(w);
    document.getElementById("display").value=e;
}
function efg(){
    var e=document.getElementById("display").value;
    var f=e.substr(0,e.length-1);
    document.getElementById("display").value=f;
}
function xyz(){
    var x=document.getElementById("display").value;
    var y=(x/100*1000);
    document.getElementById("display").value=y;
}