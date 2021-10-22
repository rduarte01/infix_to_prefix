
# TPCOMPI

```
Escribir un TDS predictivo que recibe una cadena de numeros enteros y operadores en
forma infija basados en el siguiente el alfabeto S = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ^, +, -, /, *}
que retorna la misma cadena pero en forma prefija.
Ejemplo: 35 + 4^2 -1 retorna + 35 - ^4 2 1
```

## PASO 1. 
### Escribir el BNF que acepta la gramática de entrada. 

```
E→ NUM P
P→ NUM OP E | OP NUM P | OP NUM
NUM → DIG CONT-NUM
CONT-NUM → DIG CONT-NUM | Ɛ
OP →  + | - | * | / | ^
DIG →  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

## PASO 2. 
### Verificar la existencia de recursión por la izquierda. La gramática no presenta ninguna producción con la forma A → A ⍺ | β, por lo que no hay recursión por la izquierda.


## PASO 3. 
### Verificar la existencia de ambigüedad sintáctica. La presencia de ambigüedad sintáctica en un gramática ocurre cuando existe la presencia de ambigüedad en la selección de producciones para una entrada dada y se soluciona aplicando una estrategia similar al factor común algebraico. Las producciones para los no terminales E , NUM , CONT-NUM , OP Y DIG no presentan  problemas de ambigüedad sintáctica o de factor común. Sin embargo si es posible identificar esta situación para:

```
P→ NUM OP E | OP NUM P | OP NUM
```

### Eliminando el factor común para los lados derechos OP NUM P y OP NUM  se obtiene el siguiente sistema de producciones que reemplaza al anterior

```
P→  NUM OP  E | OP NUM R
R→  P | Ɛ
```

### Con este nuevo cambio se elimina la ambigüedad sintáctica y , la gramática resultante queda de la siguiente manera:

```
E→ NUM P
P→  NUM OP  E | OP NUM R
R→  P | Ɛ
NUM → DIG CONT-NUM
CONT-NUM → DIG CONT-NUM | Ɛ
OP →  + | - | * | / | ^
DIG →  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

## PASO 4. 
### Verificar la existencia de ambigüedad semántica. La presencia de ambigüedad semántica en un gramática ocurre cuando el conjunto generado por aplicar PRIMERO a los lados derechos de una  producción compuesta no son disjuntos.Observación: Se representa PRIMERO(X) por P(X).

```
P(E) 	= P(NUM P) = {1,2,3,4,5,6,7,8,9}
P(P) 	= P(NUM OP  E) U P( OP NUM R) = {1,2,3,4,5,6,7,8,9} U { +, - , * , / , ^ } = 
= { 1,2,3,4,5,6,7,8,9, +, - , * , / , ^ }
P(R) 	= P(P) U { Ɛ } = { 1,2,3,4,5,6,7,8,9, +, - , * , / , ^ } U  { Ɛ } = 
= { 1,2,3,4,5,6,7,8,9, +, - , * , / , ^, Ɛ }
P(NUM)  = P(DIG CONT-NUM) = {1,2,3,4,5,6,7,8,9}
P(CONT-NUM) = P(DIG CONT-NUM) | { Ɛ } = {1,2,3,4,5,6,7,8,9} U {Ɛ } = {1,2,3,4,5,6,7,8,9,Ɛ }
P(OP) =  {+} U { -}  U { *}  U  { / }  U { ^ } = { +, - , * , / , ^ }
P(DIG) =  {1} U {2} U {3} U {4} U {5} U {6} U {7} U {8} U {9} ={1,2,3,4,5,6,7,8,9}
```

### Como todos conjuntos primeros de los lados derecho de cada producción son disjuntos entre sí, se concluye que no existe ambigüedad semántica.

## Paso 5. 
### Comprobar si la gramática es predictiva, una gramática se dice que es predictiva cuando no cuenta con recursión por la izquierda, ambigüedad semántica ni ambigüedad sintáctica. Como no existe ninguno de estos tres se concluye que la gramática es Predictiva

## Paso 6. 
### Definir la utilización de reglas o acciones semánticas. Para el ejemplo, se presenta mucho más sencilla la utilización de reglas semánticas. Para eso, es necesario dividir la gramática, es decir, separar las producciones en producciones simples. Esta acción normalmente se conoce como DIVIDE Y VENCERÁS.

```
E→ NUM P
P→  NUM OP  E 
P→  OP NUM R
R→  P
R→  Ɛ
NUM → DIG CONT-NUM
CONT-NUM → DIG CONT-NUM
CONT-NUM → Ɛ
OP →  + 
OP →  -
OP →  *
OP →  / 
OP → ^
DIG → 1
DIG → 2
DIG → 3
DIG → 4
DIG → 5
DIG → 6
DIG → 7
DIG → 8
DIG → 9
```

## Paso 8. 
### Se procede a escribir el Código Fuente

```
int [] operadores=[]
int [] operandos=[]
int index=0
void E( ){
	NUM( );
	P();
	pop();
}
void P(){
	if(input=’0’){
		NUM(); OP(); E();
}else if(input=’1’){
	NUM(); OP(); E();
}else if(input=’2’){
NUM(); OP(); E();
}else if(input=’3’){
	NUM(); OP(); E();
}else if(input=’4’){
NUM(); OP(); E();
}else if(input=’5’){
NUM(); OP(); E();
}else if(input=’6’){
NUM(); OP(); E();
}else if(input=’7’){
NUM(); OP(); E();
}else if(input=’8’){
NUM(); OP(); E();
}else if(input=’9’){
NUM(); OP(); E();
}else{
	OP(); NUM(); R();
}
}

void R(){
	if(input!=’$”){
	P();
}else{
	return ‘’;
}
}
void NUM(){
	int num= DIG() + CONT-NUM() ;
	operandos.push(num);
}

void CONT-NUM(){
	if(input=’0’){
		return DIG() + CONT-NUM();
}else if(input=’1’){
	return DIG() + CONT-NUM();
}else if(input=’2’){
return DIG() + CONT-NUM();
}else if(input=’3’){
	return DIG() + CONT-NUM();
}else if(input=’4’){
return DIG() + CONT-NUM();
}else if(input=’5’){
return DIG() + CONT-NUM();
}else if(input=’6’){
return DIG() + CONT-NUM();
}else if(input=’7’){
return DIG() + CONT-NUM();
}else if(input=’8’){
return DIG() + CONT-NUM();
}else if(input=’9’){
return DIG() + CONT-NUM();
}else{
	return ‘’;
}
}
void DIG(){
if(input=’0’){
		match(‘0’);
}else if(input=’1’){
	match(‘1’);
}else if(input=’2’){
match(‘2’);
}else if(input=’3’){
	match(‘3’);
}else if(input=’4’){
match(‘4’);
}else if(input=’5’){
match(‘5’);
}else if(input=’6’){
match(‘6’);
}else if(input=’7’){
match(‘7’);
}else if(input=’8’){
match(‘8’);
}else{
match(‘9’);
}
}


void OP(){
	if(input=’^’){
	match(‘^’);
	popAndPush()
}else if(input=’*’){
	match(‘*’);
	popAndPush();
}else if(input=’/’){
	match(‘/’);
	popAndPush();
}else if(input=’-’){
	match(‘-’);
	popAndPush();
}else{
match(‘+’);
popAndPush();
}
}

void match(input){
	if(cadena[index]=’$’){
	print(‘Cadena Incompleta’);
	exit(1);
}else if(cadena[index]=input){
	index++;
}else{
	print(“Error, la cadena no pertenece al lenguaje”);
	exit(1);
}
}

void  pop(){
	while( operandos.length > 0){
	char [] ope2=operandos.pop();
	char [] ope1=operandos.pop();
	char [] opera=operadores.pop();
	operandos.push(strconcat(strconcat(opera,ope1),ope2));

}
printf(“%d”,operandos.pop());
}

void  popAndPush(op){
	int indiceUltimoOperando=operadores.length;
	while( operadores[op] < operadores[indiceUltimoOperando] ){
	char [] ope2=operandos.pop();
	char [] ope1=operandos.pop();
	char [] opera=operadores.pop();
	operandos.push(strconcat(strconcat(opera,ope1),ope2));
	int indiceUltimoOperando=operando.length;
}
operadores.push(op)
}

```

[Presioname para comprobar el funcionamiento ;)](https://rubenduarte.me/infix_to_prefix/index.html)