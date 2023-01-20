//Aqui mostraremos el resultado obtenido
const $resultado = document.getElementById("resultado");
const $resultadoAnterior = document.getElementById("resultado-anterior")

//Los valores con los que realizaremos las acciones
const $input1 = document.getElementById("input1");
const $input2 = document.getElementById("input2");

let resultado;
let resultadoAnterior;

const $botones = document.querySelectorAll(".button")
$botones.forEach($boton =>{
  $boton.addEventListener("click",()=>{

    if($boton.textContent == "Sumar") resultado = Number($input1.value) + Number($input2.value);
    else if($boton.textContent == "Restar") resultado = Number($input1.value) - Number($input2.value);
    else if($boton.textContent == "Multiplicar") resultado = Number($input1.value) * Number($input2.value);
    else resultado = (Number($input1.value) / Number($input2.value)).toFixed(2);

    if($resultado.textContent === "" && $resultadoAnterior.textContent === ""){
      $resultado.innerText = resultado
      resultadoAnterior = resultado
    }
    else{
      $resultado.innerText = resultado
      $resultadoAnterior.innerText = resultadoAnterior
      resultadoAnterior = resultado
    }

    $input1.value = ""
    $input2.value = ""
  })
})

