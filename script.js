let elemento1 = document.getElementById("txtv1");
let elemento2 = document.getElementById("txtv2");

//arrow function
let validarDados = (event)=>{
    return ((event.charCode >= 48
         && event.charCode <= 57 )
        || event.charCode == 46 ) ? true : event.preventDefault();

}

elemento1.addEventListener("keypress", validarDados)
elemento2.addEventListener("keypress", validarDados)

document.getElementById("btn")
        .addEventListener("click", function(){
            let v1 = Number (elemento1.value);
            let v2 = Number (elemento2.value);
            document.getElementById("res").value=(v1+v2)
        });

