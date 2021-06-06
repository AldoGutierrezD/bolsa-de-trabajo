(function(){
    //VARIABLES
    var lista = document.getElementById("lista"),
        comentarioInput = document.getElementById("comentarioInput"),
        btnNuevoComentario = document.getElementById("btn-agregar");

    //FUNCIONES
    var agregarComentario = function(){
        var comentario = comentarioInput.value,
            nuevoComentario = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode("Usuario_20: "+comentario);

        if(comentario===""){
            comentarioInput.setAttribute("placeholder","Agrega un comentario valida");
            comentarioInput.className = "error";
            return false;
        }
        
        enlace.appendChild(contenido); //Agregar el contenido al enlace
        enlace.setAttribute("href","#"); //Agregar href al enlace
        nuevoComentario.appendChild(enlace); //Agregar el enlace al li
        lista.appendChild(nuevoComentario); //Agregar la nuevo comentario a la lista
        
        comentarioInput.value=""; //Limpiar el input

        //Volver a comprobar la cantidad de elementos de la lista
        for(var i=0; i<=lista.children.length-1; i++){ 
            lista.children[i].addEventListener("click",function(){
                this.parentNode.removeChild(this); //Trabajar directamente en el objeto que fue clickeado
            });
        }
    };

    var comprobarInput = function(){
        comentarioInput.className = "";
        comentarioInput.setAttribute("placeholder","Agrega tu comentario");
    };

    var eliminarComentario = function(){
        this.parentNode.removeChild(this);
    };

    //EVENTOS
    //Agregar comentario
    btnNuevoComentario.addEventListener("click",agregarComentario);

    //Comprobar input
    comentarioInput.addEventListener("click",comprobarInput); 

   //Borrar comentarios de la lista
   //Obtener la cantidad de elementos li (children=hijos de ul)
   for(var i=0; i<=lista.children.length-1; i++){ 
        lista.children[i].addEventListener("click",eliminarComentario);
   }
}());