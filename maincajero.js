const div = document.getElementById("micunenta")
const buttonS = document.getElementById('btsaldo')
var saldoI = 200

buttonS.addEventListener("click", function(){

   alert("Su saldo es de: " + saldoI)

})

const buttonSal = document.getElementById('btsal')
buttonSal.addEventListener("click", function(){

      window.location.href = "index.html"
})
