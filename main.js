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
    MPs = JSON.parse(localStorage.getItem("listaMPs"));
    let id = MPs.length;
    if (cant>0&&cant<=10&&id!=0){  
        let check = true;
        switch (product) {
            case 1:
                for (j=0;j<id;j++) {
                    if (MPs[j].nombre == 'Estearato de Magnesio') {
                        check = enoughStock(j, 10*cant);
                        if (check) MPs[j].cantidad -=(10*cant);
                    }
                    if (MPs[j].nombre == 'Fosfato Tricalcico') {
                        check = enoughStock(j, 30*cant);
                        if (check) MPs[j].cantidad -=(30*cant);
                    }
                    if (MPs[j].nombre == 'Croscarmelosa sodica') {
                        check = enoughStock(j, 15*cant);
                        if (check) MPs[j].cantidad -=(15*cant);
                    }
                    if (j+1==id) {
                        var pt = true;
                    }
                    confirmation(check,pt);
                    if(!check) break;
                }
                break;
            case 2:
                    for (j=0;j<id;j++) {
                        if (MPs[j].nombre == 'Estearato de Magnesio') {
                            let check = enoughStock(j, 50*cant);
                            if (check) MPs[j].cantidad -=(50*cant);
                        }
                        if (MPs[j].nombre == 'Fosfato Tricalcico') {
                            let check = enoughStock(j, 10*cant);
                            if (check) MPs[j].cantidad -=(10*cant);
                        }
                        if (MPs[j].nombre == 'Proteina de Soja') {
                            let check = enoughStock(j, 45*cant);
                            if (check) MPs[j].cantidad -=(45*cant);
                        }
                        if (j+1==id) {
                            var pt = true;
                        }
                    confirmation(check,pt);
                    if(!check) break;
                }
                break;
            case 3:
                    for (j=0;j<id;j++) {
                        if (MPs[j].nombre == 'Estearato de Magnesio') {
                            let check = enoughStock(j, 16*cant);
                            if (check) MPs[j].cantidad -=(16*cant);
                        }
                        if (MPs[j].nombre == 'Dioxido de silicio') {
                            let check = enoughStock(j, 21*cant);
                            if (check) MPs[j].cantidad -=(21*cant);
                        }
                        if (MPs[j].nombre == 'Croscarmelosa sodica') {
                            let check = enoughStock(j, 55*cant);
                            if (check) MPs[j].cantidad -=(55*cant);
                        }
                        if (MPs[j].nombre == 'Proteina de Soja') {
                            let check = enoughStock(j, 32*cant);
                            if (check) MPs[j].cantidad -=(32*cant);
                        }
                        if (j+1==id) {
                            var pt = true;
                        }
                    confirmation(check,pt);
                    if(!check) break;
                }
                break;
        } 
        guardarLocal("listaMPs", JSON.stringify(MPs));

    }else if(id==0) {
        alert("No posee la cantidad suficiente para realizar el producto");
    }else{
        alert('Ingrese un numero valido');
    }
};

function enoughStock (j, cant) {
    let checkMPs = JSON.parse(localStorage.getItem("listaMPs"));
    if(checkMPs[j].cantidad>=cant) {
        return true;
    }else{
        return false;
    }
};

function confirmation (c,f) {
    if (c&&f) {
        alert ('Producto generado con exito');
    }else if(!c){
        alert("No posee la cantidad suficiente para realizar el producto");
    }
}

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
