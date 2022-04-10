
//stock

let MP = [500, 150, 240, 100];

function checkStock() {
    document.getElementById("mp1").innerText = mp1.cantidad;
    document.getElementById("mp2").innerText = mp2.cantidad;
    document.getElementById("mp3").innerText = mp3.cantidad;
    document.getElementById("mp4").innerText = mp4.cantidad; 
};

//objetos

function MateriaPrima(nombre, proveedor, cantidad) {
    this.nombre = nombre;
    this.proveedor = proveedor;
    this.cantidad = cantidad;
}

let mp1 = new MateriaPrima("Materia Prima 1", "Proveedor 1", MP[0])
let mp2 = new MateriaPrima("Materia Prima 2", "Proveedor 2", MP[1])
let mp3 = new MateriaPrima("Materia Prima 3", "Proveedor 3", MP[2])
let mp4 = new MateriaPrima("Materia Prima 4", "Proveedor 1", MP[3])


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
    //enoughStock();
};
/*
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
*/
localStorage.setItem("MP", MP);