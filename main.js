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

let mp1 = new MateriaPrima(1, "Materia Prima 1", "Proveedor 1", 500);
let mp2 = new MateriaPrima(2, "Materia Prima 2", "Proveedor 2", 150);
let mp3 = new MateriaPrima(3, "Materia Prima 3", "Proveedor 3", 240);
let mp4 = new MateriaPrima(4, "Materia Prima 4", "Proveedor 1", 100);

const MPs = [mp1, mp2, mp3, mp4];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
/*
for (const MP of MPs) {
    guardarLocal(MPs.id, JSON.stringify(MP));
}
*/

guardarLocal("listaMPs", JSON.stringify(MPs));

function checkStock() {
    for (var i=0; i<4; i++) {
        let mpi = MPs[i]; 
        let tr = document.createElement("tr");
        for (prop in mpi) {
            let cell = document.createElement("td");        
            cell.innerHTML = mpi[prop];
            tr.append(cell);
        }
        document.getElementById("tabla-stock").appendChild(tr);
    };
    
};

//events
let nuevo = document.getElementById("nuevoInsumo");
nuevo.addEventListener("click", function() {
    Swal.fire({
        title: 'En construccion..',
        text: 'Esta funcion todavia no esta disponible',
        icon: 'warning',
        confirmButtonText: 'Ok'
    })
});


//recipes

function generateProduct(product) {
    let cant = prompt("Cuantas mezclas desea elaborar?");
    const MPs = JSON.parse(localStorage.getItem("listaMPs"));
    switch (product) {
        case 1:
            for (i=0;i<cant;i++) {
                MPs[1].usar(10);
                MPs[2].usar(15);
                MPs[0].usar(23);
                console.log(MPs);
            };
            break;
        case 2:
            for (i=0;i<cant;i++) {
                MPs[2].cantidad -= 20;
                MPs[0].cantidad -= 10;
            };
            break;
        case 3:
            for (i=0;i<cant;i++) {
                MPs[1].cantidad -= 18;
                MPs[2].cantidad -= 13;
                MPs[3].cantidad -= 5;
                MPs[0].cantidad -= 37;
            };
            break;
    }

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarLocal("listaMPs", JSON.stringify(MPs));

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