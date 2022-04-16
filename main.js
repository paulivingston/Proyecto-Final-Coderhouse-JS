//objetos

const total =0;

class MateriaPrima {
    constructor (id, nombre, proveedor, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.proveedor = proveedor;
        this.cantidad = cantidad;
    }
    usar(a) {
        this.cantidad -= a;
    }
    static total = total + 1;
}

let lastId = 0;
let mp1 = new MateriaPrima(1, "Materia Prima 1", "Proveedor 1", 500);
let mp2 = new MateriaPrima(2, "Materia Prima 2", "Proveedor 2", 150);
let mp3 = new MateriaPrima(3, "Materia Prima 3", "Proveedor 3", 240);
let mp4 = new MateriaPrima(4, "Materia Prima 4", "Proveedor 1", 100);

function checkStock() {
    for (var i=0; i<4; i++) { 
        let tr = document.createElement("tr");
        let cell = document.createElement("td");        
        cell.innerHTML = mp1.id;
        tr.appendChild(cell);
        cell.innerHTML = mp1.nombre;
        tr.appendChild(cell);
        cell.innerHTML = mp1.proveedor;
        tr.append(cell);
        cell.innerHTML = mp1.cantidad;
        tr.append(cell);

        document.getElementById("tabla-stock").appendChild(tr);
    };
    
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

localStorage.setItem("MP", MP);
*/