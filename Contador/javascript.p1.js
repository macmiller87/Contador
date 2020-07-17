 // comentar no javascript // /* tambem serve para comentar em javascript */
 function contar() {
    var inicio = document.getElementById("txtnum1")
    var passo = document.getElementById("txtnum2")
    var fim = document.getElementById("txtnum3")
    var res = document.getElementById("res")

    if(inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = `Impossível Contar!`
        alert("ERRO FALTAM DADOS!")
    } else {
        res.innerHTML = `CONTANDO: <br>`
        var ini = Number(inicio.value)
        var pas = Number(passo.value)
        var fm = Number(fim.value)
        if(pas <= 0){
            alert("PASSO INVÁLIDO CONSIDERANDO PASSO 1")
            pas = 1
        }
        if(ini < fm) {
          for(var m = ini; m <= fm; m += pas) {
            res.innerHTML += `${m} \u{1F449}`
          }
        } else {
           for(var m = ini; m >= fm; m -= pas)
           res.innerHTML += `${m} \u{1F449}`
          }
       res.innerHTML += `\u{1F3C1}`	
     }
}
