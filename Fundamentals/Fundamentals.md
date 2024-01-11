# Fundamentals

JavaScript é uma linguagem de programação de alto nível, interpretada, orientada a objetos e multi-paradigma.

## Variáveis

São usadas para armazenas e manipular dados. Existem 3 palavras-chave para declarar variáveis: var, let e const.

## Tipos de dados

Existem 7 tipos de dados primitivos:

1. Número
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Big int

Para saber o tipo de dado armazenado em uma variável:

```javascript
let nome = "Isabella"
console.log(typeof nome);
```

## Operadores ternários

É uma estrutura condicional:

```javascript
condicao ? expressao_se_verdadeira : expressao_se_falsa;
```

## Modo estrito

O modo estrito é uma funcionalidade introduzida no ES5 para ajudar os desenvolvedores a escrever um código mais seguro e evitar erros comuns.

Para usar o modo restrito basta escrever:

```javascript
"use strict";
```

## Functions

Função é um pedaço de código que podemos reutilizar continuamente em nosso código.

### Declaração de função:

```javascript
function nomeDaFuncao(parametros){
    //corpo da função
    return resultado; // opcional
}
```

### Expressão de função:

```javascript
const nomedaFuncao =  function (parametros){
    //corpo da função
    return resultado; // opcional
}
```

As principais diferenças são que:

1.  funções declaradas são elevadas para o topo do contexto de execução, e por isso podem ser chamadas antes de sua declaração no código, já no segundo caso não.
2. Expressões de funções são armazenadas em uma variável, facilitando passa-la como argumento para outra função.

### Arrow functions

As arrow functions foram introduzidas no ES6. Elas proporcionam uma sintaxe mais consisa e curta para a criação de funções.

```javascript
const nomedaFuncao =  parametro => retorno;
```

```javascript
const nomedaFuncao =  (param1,param2) => {
    //corpo da função
}
```

## Arrays

São estruturas de dados no qual podemos armazenar variáveis e acessá-las.

### Métodos

|     Método        |     Descrição     |
|:-----------------:|:-----------------:|
| length            | retorna o comprimento do array |
| push              | adiciona elementos no final do array |
| unshift           | adiciona elementos no incio do array |
| pop               | remove o último elemento do array |
| shift             | remove o primeiro elemento do array |
| indexOf(elemento) | mostra o índice do elemento |
| includes(elemento)| retorna uma valor booleano se o elemento está ou não no array |

## Objects

São estruturas definidas por pares de chave:valor.

```javascript
const nomeObjeto = {
    chave1: valor1,
    chave2: valor2
};
```

Existem duas maneiras de acessar uma propriedade de um objeto:

1. Notação de ponto

```javascript
const notas = {
    nota1: 9.5,
    nota2: 7.5
};

console.log(notas.nota1);
```

2. Notação de colchetes

```javascript
const notas = {
    nota1: 9.5,
    nota2: 7.5
};

console.log(notas["nota1"]);
```

### A palavra-chave THIS

A palavra-chave faz referência ao objeto no qual o método é chamado.

```javascript
const notas = {
  nota1: 9.5,
  nota2: 7.5,
  media: function () {
    let soma = this.nota1 + this.nota2;
    return soma / 2;
  },
};

console.log(notas.media());
```

