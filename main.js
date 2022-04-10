
//stock
let MP = [500, 150, 240, 100];


//function checkStock() {
    document.getElementById("mp1").innerText = MP[0];
    document.getElementById("mp2").innerText = MP[1];
    document.getElementById("mp3").innerText = MP[2];
    document.getElementById("mp4").innerText = MP[3]; 
//};


//recipes

function product1() {
    let cant = prompt("Cuantas mezclas desea elaborar?");
    for (i=0;i<cant;i++) {
        MP[1] -= 10;
        MP[2] -= 15;
        MP[0] -= 23;
    }
    alert("Su producto se ha generado correctamente");
};

function product2() {
    let cant = prompt("Cuantas mezclas desea elaborar?");
    for (i=0;i<cant;i++) {
        MP[2] -= 20;
        MP[0] -= 10;
    }
    alert("Su producto se ha generado correctamente");
};

function product3() {
    let cant = prompt("Cuantas mezclas desea elaborar?");
    for (i=0;i<cant;i++) {
        MP[1] -= 18;
        MP[2] -= 13;
        MP[3] -= 5;
        MP[0] -= 37;
    }
    alert("Su producto se ha generado correctamente");
};