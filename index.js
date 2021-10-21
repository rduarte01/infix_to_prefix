
$("#probar").on("click",function() {
    const bnf = new BNF();
    bnf.E();
    document.getElementById("exampleModalLabel").innerHTML = "Resultado" ;
    if( bnf.error != "" ){
        document.getElementById("resultado").innerHTML = "Error: "+bnf.error;
    }else if( bnf.error2 != "" ){
        document.getElementById("resultado").innerHTML = "Error: "+ bnf.error2;
    }
    else{
        document.getElementById("resultado").innerHTML = bnf.prefix;
    }
    });
    $("#ejemplos").on("click",function() {
    document.getElementById("exampleModalLabel").innerHTML = "Te enseño ejemplos simples :)" ;
    document.getElementById("resultado").innerHTML = "<strong>Ingrese su cadena en Formato Infijo, aca se lista algunos ejemplos: </strong><br><br> Ejemplo 1: <br> Entrada: 10+3/1^4*1 Salida: +10/3*^141 <br> Ejemplo 2:<br>Entrada: 200*3+1  Salida: +*20031 <br><strong><br> Recuerda que si ingresas una cadena incompleta o una gramática que no pertenece al lenguaje obtendras error</strong><br>" ;
});

