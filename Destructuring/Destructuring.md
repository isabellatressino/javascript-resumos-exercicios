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
const 
```
