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
}

let MPs = JSON.parse(localStorage.getItem("listaMPs"));
if (MPs==null) MPs = [];
let guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaMPs", JSON.stringify(MPs));

//recipes

function generateProduct(product) {
    let cant = parseInt(prompt('Cuantas mezclas desea realizar? (1 mezcla = 125.000 comprimidos) Maximo 10 mezclas'));
    
    if (cant>0&&cant<=10){    
        MPs = JSON.parse(localStorage.getItem("listaMPs"));
        let id = MPs.length;
        switch (product) {
            case 1:
                for (i=0;i<cant;i++) {
                    for (j=0;j<id;j++) {
                        let check = false;
                        if (MPs[j].nombre == 'Estearato de Magnesio') {
                            let check = enoughStock(j, 10);
                            if (check) MPs[j].cantidad -=10;
                        }
                        if (!check) break;
                        if (MPs[j].nombre == 'Fosfato Tricalcico') {
                            let check = enoughStock(j, 30);
                            if (check) MPs[j].cantidad -=30;
                        }
                        if (!check) break;
                        if (MPs[j].nombre == 'Croscarmelosa sodica') {
                            let check = enoughStock(j, 15);
                            if (check) MPs[j].cantidad -=15;
                        }
                        if (!check) break;
                    }
                };
                alert ('Producto generado con exito');
                break;
            case 2:
                for (i=0;i<cant;i++) {
                    for (j=0;j<id;j++) {
                        let check = false;
                        if (MPs[j].nombre == 'Estearato de Magnesio') {
                            let check = enoughStock(j, 50);
                            if (check) MPs[j].cantidad -=50;
                        }
                        if (!check) break;
                        if (MPs[j].nombre == 'Fosfato Tricalcico') {
                            let check = enoughStock(j, 10);
                            if (check) MPs[j].cantidad -=10;
                        }
                        if (!check) break;
                        if (MPs[j].nombre == 'Proteina de Soja') {
                            let check = enoughStock(j, 45);
                            if (check) MPs[j].cantidad -=45;
                        }
                        if (!check) break;
                    }
                };
                alert ('Producto generado con exito');
                break;
            case 3:
                for (i=0;i<cant;i++) {
                    for (j=0;j<id;j++) {
                        let check = false;
                        if (MPs[j].nombre == 'Estearato de Magnesio') {
                            let check = enoughStock(j, 16);
                            if (check) MPs[j].cantidad -=16;
                        }
                        if (!check) break;
                        if (MPs[j].nombre == 'Dioxido de silicio') {
                            let check = enoughStock(j, 21);
                            if (check) MPs[j].cantidad -=21;
                        }
                        if (!check) break;
                        if (MPs[j].nombre == 'Croscarmelosa sodica') {
                            let check = enoughStock(j, 55);
                            if (check) MPs[j].cantidad -=55;
                        }
                        if (!check) break;
                        if (MPs[j].nombre == 'Proteina de Soja') {
                            let check = enoughStock(j, 32);
                            if (check) MPs[j].cantidad -=32;
                        }
                        if (!check) break;
                    }
                };
                alert ('Producto generado con exito');
                break;
        }

        guardarLocal("listaMPs", JSON.stringify(MPs));
    }else{
        alert('Ingrese un numero valido');
    }
};

function enoughStock (j, cant) {
    MPs = JSON.parse(localStorage.getItem("listaMPs"));
    if(MPs[j].cantidad>=cant) {
        return true;
    }else{
        alert("No posee la cantidad suficiente para realizar el producto");
        return false;
    }
};

// recipes
/*let prod1 = {
    'Estearato de Magnesio': 10,
    'Croscarmelosa sodica': 15,
    'Fosfato Tricalcico': 30
}

let prod2 = {
    'Estearato de Magnesio': 20,
    'Croscarmelosa sodica': 1,
    'Fosfato Tricalcico': 14
}

let prod3 = {
    'Estearato de Magnesio': 12,
    'Croscarmelosa sodica': 21,
    'Fosfato Tricalcico': 11
}

let prod4 = {
    'Estearato de Magnesio': 24,
    'Croscarmelosa sodica': 8,
    'Fosfato Tricalcico': 17
}

console.log(prod1[1]);*/
