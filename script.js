function mostrarOtro(){
    var select = document.getElementById("motivacion");
    var otro = document.getElementById("otro");
    if(select.value == "otro"){
        otro.style.display = "block";
    }else{
        otro.style.display = "none";
    }
}

function anadirActividad(iDdia){
    var dia = document.getElementById(iDdia);
    dia.innerHTML += "<p>" + prompt("Nombre de la actividad") + "</p>";
}