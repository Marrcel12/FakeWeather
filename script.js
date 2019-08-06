

document.getElementById('gen').addEventListener('click',start)

function start(){
    temp=document.getElementById("temp").value;
    loc=document.getElementById("loc").value;

   
    link='index.html?loc='+ loc+'&temp='+temp;

   window.open(link);
}


