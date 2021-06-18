document.addEventListener('DOMContentLoaded', function(event){
    $("#boton").addEventListener("click", function(){
        let msj = document.getElementById('comentario').value;
        var parrafo = comentar(msj);


        $(".container").appendChild(parrafo);
        console.log (parrafo);
        document.getElementById("comentario").value = "";
        agregarlistener();
    });
});

function $(selector){
    return document.querySelector(selector);
}

function comentar(mensaje){
    var parrafo = document.createElement("p");
    parrafo.setAttribute ("class" , "comentario");
    parrafo.innerText = mensaje;
    return parrafo;
}

document.addEventListener('DOMContentLoaded', function(event){
    $("#boton2").addEventListener("click", function(){
        let msj = document.getElementById('comentario2').value;
        var parrafo = comentar(msj);


        $(".container2").appendChild(parrafo);
        console.log (parrafo);
        document.getElementById("comentario2").value = "";

    });
});

function $(selector){
    return document.querySelector(selector);
}

function comentar(mensaje){
    var parrafo = document.createElement("p");
    parrafo.setAttribute ("class" , "burbuja");
    parrafo.innerText = mensaje;
    if(mensaje != ""){

    var close = document.createElement("span");
    close.style.float = "right";
    close.style.color = "red";
    close.style.cursor = "pointer";
    close.innerHTML = "X";
    close.setAttribute ("class", "close");
    parrafo.appendChild(close);
    

    return parrafo;
    }
}

function agregarlistener(){
    var elements = document.querySelectorAll(".close");
    for (let indice = elements.length - 1; indice >= 0 ; indice -- ){
        var element = elements [indice];
        element.addEventListener("click", function(){
            this.parentNode.style.display = "none";
            console.log("Di Click aqui!");
        });
    }
}