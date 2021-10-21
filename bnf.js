

class BNF{
    constructor(input=""){
        this.infix=document.getElementById("entrada").value.replace(/\s+/g, '');
        this.currentIndex=0
        this.input=this.infix.charAt(0)
        this.operandsStack=[]
        this.operatorStack=[]
        this.precedenceOperators={
            '^':3,
            '*':2,
            '/':2,
            '*':2,
            '+':1,
            '-':1
        }
        this.prefix=''
        this.error=""
        this.error2=""
    }

    E(){
        console.log(this.infix)
        this.NUM()
        this.P()

        //sacamos todo lo queda
        this.pop()
    }
    P(){
        if( 
            this.input=='0' || this.input=='1' || this.input=='2' || this.input=='3' ||
            this.input=='4' || this.input=='5' || this.input=='6' || this.input=='7' ||
            this.input=='8' || this.input=='9'
        ){
            this.NUM()
            this.OP()
            this.E()
        }else{
            this.OP()
            this.NUM()
            this.R()
        }
    }

    R(){
        if(this.input!='$'){ //Si no es Fin de cadena, seguimos Iterando
            this.P()
        }else return ""
    }

    NUM(){
            let num =  this.DIG() + this.CONTNUM();
            this.operandsStack.push(num)
    }
    CONTNUM(){
        if( 
            this.input=='0' || this.input=='1' || this.input=='2' || this.input=='3' ||
            this.input=='4' || this.input=='5' || this.input=='6' || this.input=='7' ||
            this.input=='8' || this.input=='9'
        ){
            return this.DIG() + this.CONTNUM();
        }else return ''
    }

    DIG(){
        let input=this.input
        if(this.input=='0') this.match('0')
        else if(this.input=='1') this.match('1')
        else if(this.input=='2') this.match('2')
        else if(this.input=='3') this.match('3')
        else if(this.input=='4') this.match('4')
        else if(this.input=='5') this.match('5')
        else if(this.input=='6') this.match('6')
        else if(this.input=='7') this.match('7')
        else if(this.input=='8') this.match('8')
        else this.match('9') 
        return input
    }

    OP(){
        let input=this.input
        if(this.input=='^')this.match('^')
        else if(this.input=='*')this.match('*')
        else if(this.input=='/')this.match('/')
        else if(this.input=='-')this.match('-')
        else this.match('+')
        this.popAndPush(input)
    }
    popAndPush(op){
    /*Armamos la expresion si es que el ultimo operador es menor en presedencia que el tope
        de la pila
    */
        let lastOperator=this.operatorStack[this.operatorStack.length-1]
        while(this.precedenceOperators[op]<this.precedenceOperators[lastOperator]){
            let operand2=this.operandsStack.pop()
            let operand1=this.operandsStack.pop()
            let operator=this.operatorStack.pop()
            this.operandsStack.push(operator+operand1+operand2)
            lastOperator=this.operatorStack[this.operatorStack.length-1]
        }
        this.operatorStack.push(op)
    }
    pop(){
        /*Sacamos todas la expresiones del tope de la Pila */
        while(this.operatorStack.length>0){
            let operand2=this.operandsStack.pop()
            let operand1=this.operandsStack.pop()
            let operator=this.operatorStack.pop()
            this.
            operandsStack.push(operator+operand1+operand2)
        }
        this.prefix=this.operandsStack.pop()
    }
    match(input){
        if(this.input=="$") { //cadena incompleta porque ya procese todo y siguo llamando a la funcion
            this.error2="Cadena Incompleta"
            //throw new Error('Error');
        }
        else if(this.input==input){ //entrada igual a carater esperado
            this.currentIndex+=1
            if(this.currentIndex<this.infix.length){
                this.input=this.infix.charAt(this.currentIndex)
            }else{
                this.input='$'
            }
        }else{ //error, se recibe una cadena que no se espera
             this.error="La cadena no pertenece al lenguaje";
             //throw new Error('Error');
        }
    }
  }

