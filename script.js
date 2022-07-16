let nombre,genero, peso, altura, calculoImc, mensaje
do {
    nombre = prompt("Ingrese su nombre: ")
    genero = prompt("Ingrese su género (H o M): ").toLowerCase()
    peso = parseFloat(prompt("Ingrese su peso en kilogramos: "))
    altura = parseInt(prompt("Ingrese su altura en centímetros: "))

    if(isNaN(peso) || peso<=0){
        mensaje = "Por favor ingrese un número válido en el peso \n"
    }
    else{mensaje = ""}

    if(isNaN(altura) || altura<=0){
        mensaje += "Por favor ingrese un número válido en la altura \n"
    }
    else{mensaje += ""}

    if(genero != "h" && genero != "m"){
        mensaje += "Por favor ingrese H o M en el género"
    }
    else{mensaje += ""}
    
    if(mensaje!=""){
        console.log(mensaje)
    }

} while (isNaN(peso) || peso<=0 || isNaN(altura) || altura<=0 || (genero!="h" && genero != "m"));

switch(genero) {
    case "h":
        calculoImc = (peso / Math.pow(altura/100, 2))
        if(calculoImc<=20){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Bajo peso`)
        }
        else if(20<calculoImc && calculoImc<=25){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Peso normal`)
        }
        else if(25<calculoImc && calculoImc<=30){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad leve`)
        }
        else if(30<calculoImc && calculoImc<=40){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad severa`)
        }
        else if(40<calculoImc){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad muy severa`)
        }
        break
    case "m":
        calculoImc = (peso / Math.pow(altura/100, 2))
        if(calculoImc<=20){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Bajo peso`)
        }
        else if(20<calculoImc && calculoImc<=24){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Peso normal`)
        }
        else if(24<calculoImc && calculoImc<=29){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad leve`)
        }
        else if(29<calculoImc && calculoImc<=37){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad severa`)
        }
        else if(37<calculoImc){
            console.log(`Hola ${nombre}! Tu IMC es: ${calculoImc.toFixed(2)} - Interpretación: Obesidad muy severa`)
        }
        break
}

