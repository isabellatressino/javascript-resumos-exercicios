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

# Métodos

Normalmente, quando chamamos uma função, o valor this dentro da função é o objeto no qual a função foi acessada.

Se tivessemos um objeto `lufthansa` com o método `book`:

```javascript
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
```

E chamassemos o método, passando-lhe os parametros, isso iria funcionar perfeitamente, já que no contexto em que foi chamada, a palavra-chave this aponta para o objeto.

```javascript
lufthansa.book(239, "Jonas");
lufthansa.book(635, "John Smith");
```

Entretanto, se armazenássemos o método book em uma variável e tentássemos chamá-lo, isso resultaria em um erro, pois a palavra-chave this não apontaria para o objeto em questão.

```javascript
const book = lufthansa.book;
book(23, "Sarah Willians");
```

Para lidar com esse cenário, existem métodos em JavaScript que permitem especificar explicitamente a referência para a palavra-chave this.

## Call

O método `call()` permite que você chame a função com um determinado valor de contexto e uma lista de argumentos separados por vírgulas.

```javascript
funcao.call(contexto, argumento1, argumento2, ..., argumentoN)
```

- Função: A função à qual você deseja aplicar o método
- Contexto: O valor a ser usado como o valor `this` quando a função é chamada.
- Argumentos: Os argumentos que serão passados para a função.

Assim, poderiamos resolver o problema anterior usando o método.

```javascript
const book = lufthansa.book;
book.call(lufthansa, 23, "Sarah Willians");
```

## Apply

O método `apply()` é bem parecido com o `call()`, mas ao invés de receber uma lista de argumentos, ele recebe um array.

```javascript
const book = lufthansa.book;
const flightData = [538, "George Cooper"];
book.apply(lufthansa, flightData);
```

Obs.: Ao inves de usar o `apply()`, poderiamos usar o `call()` com o `spread operator`:

```javascript
const book = lufthansa.book;
const flightData = [538, "George Cooper"];
book.call(lufthansa, ...flightData);
```

## Bind

Assim como os outros métodos, `bind()` também é usado para definir a palavra-chave `this`. A diferença é que ele não chama a função imediatamente, mas sim retorna uma nova função.

```javascript
const novaFuncao = funcaoOriginal.bind(objeto);
```

- funcaoOriginal: A função original que você deseja vincular a um contexto específico.

- objeto: O objeto que será usado como contexto (this) quando a nova função for chamada.

```javascript
const bookLH = book.bind(lufthansa);
bookLH(23, "Sarah Willians");
```

## Closures

Uma closure é criada quando uma função é declarada dentro do corpo de outra função, permitindo que a função interna, tenha acesso às variáveis da função externa, mesmo depois que a execução da externa foi concluida.

```javascript
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
```

Assim, mesmo que a execução da função `secureBooking` já tenha sido concluida, a função `booker` ainda tem acesso à variável `passengerCount`.
