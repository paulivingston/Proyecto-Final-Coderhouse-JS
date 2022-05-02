

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