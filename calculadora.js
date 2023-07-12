const txtop1 = document.getElementById("operador1")
const ope = document.getElementById("operador")
const txtop2 = document.getElementById("operador2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)


function calcular(){
    const operacion = ope.value
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2) ){
        let resultadoOp;
        switch (operacion){
            case "+":
                resultadoOp = op1 + op2
                break;
            case "-":
                resultadoOp = op1 - op2
                break;
            case "*":
                resultadoOp = op1 * op2
                break;
            case "/":
                resultadoOp = op1 / op2
                break
        }
        pResultado.style="color: black;"
        pResultado.innerText = "= " + resultadoOp
    }else{
        pResultado.style="color: red;"
        pResultado.innerText = "Calculo imposible"
    }
}