# BNF

E		-> num P
P		-> num op E | op num P | op num
num 		-> dig contNum
contNum 	-> dig contNum | vacio
op		-> + | - | * | / | ^
dig 		-> 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9


## Como la gramática no es predictiva debido a que cuenta con factor común:

## Se elimina el factor común de op num en P:

```
E		-> num P
P		->num op E | op num R
R		-> P | vacío
num 		-> dig contNum
contNum 	-> dig contNum | vacío
op		-> + | - | * | / | ^
dig 		-> 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
```

## No existe ni recursividad, ni factor común, se puede continuar.

## Se halla el conjunto primero:

```
P(E) 		=  {1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0}
P(P) 		= {1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0} U { + , - , * , / , ^}
P(R) 		= {1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0, + , - , * , / , ^} U {vacío}
P(num) 	= {1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0}
P(contNum) = {1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0} U {vacío}
P(op) 		= { + , - , * , / , ^}
P(dig) 		= {1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0}
```

## Podemos concluir que es una gramática predictiva
