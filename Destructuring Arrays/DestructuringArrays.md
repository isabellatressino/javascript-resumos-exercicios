# Destructuring Arrays

A desestruturação é uma técnica que nos permite extrair valores de um array e atribuí-los a variáveis.

## Atribuição

Antes, para atribuir um valor de um array à uma variável, fazíamos assim:

```javascript
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);
```

Mas com a desestruturação, podemos declarar todas as três variáveis ao mesmo tempo:

```javascript
const arr = [2,3,4];

// Destructuring
const [a,b,c] = arr;

console.log(a,b,c);
```

Alguns truques que a destruturação pode fazer:

### Pulando posições:

Se quisermos pular uma posição do array, basta deixar um buraco no operador de desestruturação

```javascript
const arr = [2,3,4];

// Destructuring
const [a, ,b] = arr;

console.log(a,b);
```

### Trocando de posição

Se quiséssemos inverter a ordem de dois valores em um array, fariamos assim:

```javascript
let arr = [2,3,4];

let [a,b] = arr;

const temp = a;
a = b;
b = temp;

console.log(a,b); // no console: 3, 2
```

Mas com o destructuring podemos fazer assim:

```javascript
[a,b] = [b,a]; // no console: 3, 2
```

### Retorno de funções

Outro truque da desestruturação é que quando uma função retorna um array, podemos desestrutura-lo imediatamente.

```javascript
const dadosAluno = {
    nome: "Isabellla",
    nota1: 9.5,
    nota2: 8.0,
    calcularMedia: function (){
        this.media = (this.nota1 + this.nota2)/2;
        return [this.nota1,this.nota2,this.media];
    }
}

// Isto nos retorna um array
console.log(dadosAluno.calcularMedia()); 

// Isto faz a desestruturação e atribui cada resultado retornado a uma variável 
const [n1,n2,media] = dadosAluno.calcularMedia();
console.log(n1,n2,media);
```

## Destructuring de arrays aninhados

Para fazer a desestruturação em arrays aninhados, basta fazer um destructuring dentro de um destructuring.


```javascript
const arr = [2,3,[4,5]];
const [a,b,[c,d]] = arr;
console.log(a,b,c,d);
```

## Definindo valores padrões

Para o caso de não saber o comprimento do array, podemos definir valores padrões para as variáveis ao desestrutura-las.

```javascript
const arr = [4,5];

var [a,b,c] = arr;
console.log(a,b,c); // Aqui, a variável c retornaria undefined

var [a=1,b=1,c=1] = arr;
console.log(a,b,c); // Já aqui, a variável c retorna 1
```