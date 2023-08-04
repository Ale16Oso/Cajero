const logIn = document.getElementById('inicioSesion')

var saldoI = 0;
var userVerify 
//const passwordVerify = "Julio2023"

logIn.addEventListener("submit", function(event){
    event.preventDefault();
    nuevaVentana1 = window.open('cajero.html')

    const usuario = document.getElementById("usuario").value;
    nuevaVentana1.inputText2=usuario;

    const password = document.getElementById("password").value;

    var userVerify = usuario;
    var passwordVerify = "";
    

    switch(usuario){
        case "Moli":{
            var passwordVerify = "Julio2023";
            var saldoI = 200;
            console.log(passwordVerify + " " + saldoI);
            break;
        }
        case "Gera":{
            var passwordVerify = "jul2023";
            var saldoI = 290;
            break;
        }
        case "Maui":{
            var passwordVerify = "2023Jul";
            var saldoI = 67;
            break;
        }
        default: {
            var passwordVerify = "";
            var saldoI = 0;
            console.log("Usuario no existe")
            break;
        }
    }

    console.log( usuario + " " + password + "/" + passwordVerify + " " + userVerify )

if(usuario === userVerify && password === passwordVerify){
    window.location.href = "cajero.html"
    // alert("Bienvenido!")
}else{
    alert("Usuario o contraseña incorrecta " )
}

})

console.log(userVerify + " " + saldoI )
