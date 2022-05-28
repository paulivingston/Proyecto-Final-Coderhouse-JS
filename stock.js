/*
FALTA:
- Validar Formulario
- Distintos proveedores
- Botones modal
*/


MPs = JSON.parse(localStorage.getItem("listaMPs"));
let id = MPs.length;
checkStock();

let saveModal = document.getElementById('save-modal');
let newInsumo = saveModal.addEventListener("click", function(){
    let name = document.getElementById("name").value;
    let supplier = document.getElementById("supplier").value;
    let amount = parseInt(document.getElementById("amount").value);
    let a = true;

    if((name!='Seleccione una opcion')&&(supplier!='')&&(amount>0)){
        id++;
        for (j=0;j<id-1;j++) {
            if (MPs[j].nombre == name) {
                let sumar = amount;
                let actual = parseInt(MPs[j].cantidad) 
                actual += sumar;
                MPs[j].cantidad = actual;
                a = false;
                break;
            }
        }
        if (a) {
            let newMP = new MateriaPrima(id, name, supplier, amount);
            MPs.push(newMP);
        }
        guardarLocal("listaMPs", JSON.stringify(MPs));
        checkStock();
        Swal.fire({
            template: '#insumo-agregado'
        });
        document.getElementById("name").value = "";
        document.getElementById("supplier").value = "";
        document.getElementById("amount").value = "";        
    }else{
        Swal.fire({
            template: '#validar-formulario'
        });
    }
});





function checkStock() {
    let tablaStock = document.getElementById("tabla-stock");
    tablaStock.innerHTML = "";
    for (let i=0; i<id; i++) {
        let mpi = MPs[i]; 
        let tr = document.createElement("tr");
        for (prop in mpi) {
            let cell = document.createElement("td");        
            cell.innerHTML = mpi[prop];
            tr.append(cell);
        }
        tablaStock.appendChild(tr);
    };
    
};