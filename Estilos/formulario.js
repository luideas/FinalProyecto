function validarDatos(){
let nombre=document.getElementById('nombre').value;
let apellido=document.getElementById('apellido').value;
let email=document.getElementById('email').value;
let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let telefono=document.getElementById('telefono').value;
let regex2 = /^([0-9]{9})+$/;
let termino=document.getElementById('termino').checked;

let mensaje= document.getElementById('mensaje');
mensaje.innerText = "";
if(nombre == ''){
    
    mensaje.innerText = "El nombre es obligatorio"

}
else{

    if(apellido == ''){
        mensaje.innerText = "El apellido es obligatorio";

        }
    else{
        if(!(regex.test(email))){
            mensaje.innerText = "Correo no es valido";
        }

    else{
        if(!(regex2.test(telefono))){
            mensaje.innerText = "El telefono no es valido";
        }

    else{
        if(!(termino)){
        mensaje.innerText = "Debe aceptar termino y condiciones";
        }
        else{
            window.location = "index2.html";
        }
    } 
    }
    }
    }
}
