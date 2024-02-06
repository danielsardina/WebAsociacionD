function mostrarOtro(){
    var select = document.getElementById("motivacion");
    var otro = document.getElementById("otro");
    if(select.value == "otro"){
        otro.style.display = "block";
    }else{
        otro.style.display = "none";
    }
}