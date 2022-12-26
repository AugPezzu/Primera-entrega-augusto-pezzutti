/* funciones */
function sumar(valor1, valor2){
    let resultado = valor1 + valor2
    return resultado
}

function restar(valor1, valor2){
    let resultado = valor1 - valor2
    return resultado
}

function dividir(valor1, valor2){
    let resultado = valor1 / valor2
    return resultado
}

function multiplicar(valor1, valor2){
    let resultado = valor1 * valor2
    return resultado
}
/* Variables */
let inicioPrograma = prompt("Menu princpial\n\n1-Sumar\n2-Restar\n3-Dividr\n4-Multipliar\n5-Salir")
inicioPrograma = parseInt(inicioPrograma)


if (inicioPrograma  == 1){
        let resultado
        let valorUsuario1 = prompt("Escriba su primer valor")
        let valorUsuario2 = prompt("Escriba su Segundo valor")
        valorUsuario1 = parseFloat(valorUsuario1)
        valorUsuario2 = parseFloat(valorUsuario2)
        resultado = sumar(valorUsuario1,valorUsuario2)
        alert("el resultado de la suma es: " + resultado)
}else if (inicioPrograma == 2){
            let resultado
            let valorUsuario1 = prompt("Escriba su primer valor")
            let valorUsuario2 = prompt("Escriba su Segundo valor")
            valorUsuario1 = parseFloat(valorUsuario1)
            valorUsuario2 = parseFloat(valorUsuario2)
            resultado = restar(valorUsuario1,valorUsuario2)
            alert("el resultado es de la resta es: " + resultado)
}else if (inicioPrograma == 3){
            let resultado
            let valorUsuario1 = prompt("Escriba su primer valor")
            let valorUsuario2 = prompt("Escriba su Segundo valor")
            valorUsuario1 = parseFloat(valorUsuario1)
            valorUsuario2 = parseFloat(valorUsuario2)
            resultado = dividir(valorUsuario1,valorUsuario2)
            alert("el resultado es de la division es: " + resultado)

}else if (inicioPrograma == 4){
            let resultado
            let valorUsuario1 = prompt("Escriba su primer valor")
            let valorUsuario2 = prompt("Escriba su Segundo valor")
            valorUsuario1 = parseFloat(valorUsuario1)
            valorUsuario2 = parseFloat(valorUsuario2)
            resultado = multiplicar(valorUsuario1,valorUsuario2)
            alert("el resultado es de la division es: " + resultado)
}else if (inicioPrograma == 5){
    alert("Saliendo de la calculadora")
} else {
    alert("opcion invalida")
}
