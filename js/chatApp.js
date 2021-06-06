function Ocultar_Mostrar(){
    var conversacion=document.getElementById("conversacionId"),
        escribir=document.getElementById("escribirId");

    if(conversacion.style.display == "none" && escribir.style.display == "none"){
        conversacion.style.display = "block";
        escribir.style.display = "block";
        document.getElementById("btnId").style.marginTop = "0";
    }else{
        conversacion.style.display = "none";
        escribir.style.display = "none";
        document.getElementById("btnId").style.marginTop = "270px";
    }
}