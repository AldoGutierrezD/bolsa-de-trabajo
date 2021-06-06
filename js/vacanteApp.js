function agregar(){
        //Obtener los campos de la tarjeta
    var puestoForm=document.getElementById("puestoNom"),
        vacanteForm=document.getElementById("vacanteNom"),
        descripcionForm=document.getElementById("descripcionNom"),
        //Obtener el valor de los input del form
        puestoInfo=puestoForm.value,
        vacanteInfo=vacanteForm.value,
        descripcionInfo=descripcionForm.value,
        //Asignar el valor de los input y asignarlos a los campos de la tarjeta
        puesto=document.getElementById("titulo1").innerHTML = puestoInfo,
        experiencia=document.getElementById("xp1").innerHTML = "Experiencia: "+vacanteInfo,
        descripcion=document.getElementById("desc1").innerHTML = descripcionInfo;

    //Limpiar los input
    puestoForm.value = "";
    vacanteForm.value = "";
    descripcionForm.value = "";

}