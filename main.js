
//stock

let MP = [500, 150, 240, 100];

function checkStock() {
    document.getElementById("mp1").innerText = MP[0];
    document.getElementById("mp2").innerText = MP[1];
    document.getElementById("mp3").innerText = MP[2];
    document.getElementById("mp4").innerText = MP[3]; 
};


//recipes

function generateProduct(product) {
    let cant = prompt("Cuantas mezclas desea elaborar?");
    switch (product) {
        case 1:
            for (i=0;i<cant;i++) {
                MP[1] -= 10;
                MP[2] -= 15;
                MP[0] -= 23;
            };
            break;
        case 2:
            for (i=0;i<cant;i++) {
                MP[2] -= 20;
                MP[0] -= 10;
            };
            break;
        case 3:
            for (i=0;i<cant;i++) {
                MP[1] -= 18;
                MP[2] -= 13;
                MP[3] -= 5;
                MP[0] -= 37;
            };
            break;
    }
    enoughStock();
};

function enoughStock () {
    let enough = true;
    enough = MP.map(function(num) {
        if (num<0) {
            alert("No posee la cantidad suficiente para realizar el producto");
            return false;
        };
    });
    if (enough == true) alert("Su producto se ha generado correctamente");

}

localStorage.setItem("MP", MP);