# Functions

Função é um pedaço de código que podemos reutilizar continuamente em nosso código.

## Declaração de função:

```javascript
function nomeDaFuncao(parametros) {
	//corpo da função
	return resultado; // opcional
}
```

## Expressão de função:

```javascript
const nomedaFuncao = function (parametros) {
	//corpo da função
	return resultado; // opcional
};
```

## Valores padrão

Podemos definir valores padrão para inicializar parâmetros.

1. Valores padrão no ES5

```javascript
const somar = function (a, b) {
	a = a || 1; // short-circuiting
	b = b || 1;
	return a + b;
};

console.log(somar(5, 3)); // 8
console.log(somar(5)); // 6
console.log(somar()); // 2
```

2. Valores padrão no ES6

```javascript
// podemos atribuir o valor padrão diretamente nos paramêtros
const somar = function (a = 1, b = 1) {
	return a + b;
};

console.log(somar(5, 3)); // 8
console.log(somar(5)); // 6
console.log(somar(undefined, 3)); // 4
```

## First-class functions

As funções em JavaScript são consideradas first-class functions (funções de primeira classe), que significa que são tratadas como qualquer outra variável.

Por esse motivo, elas possuem as seguintes características:

1. Podem ser atribuidas a variaveis.
2. Podem ser passadas como argumentos para outras funções.
3. Funções podem retornar outras funções como resultado.
4. Podem ser armazenadas em estruturas de dados como arrays e objetos.

## Higher-order functions

São funções que podem aceitar outras funções como argumentos e/ou retornar funções como resultado.