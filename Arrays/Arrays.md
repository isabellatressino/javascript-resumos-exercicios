# Arrays

São estruturas de dados no qual podemos armazenar variáveis e acessá-las.

## Métodos que alteram o array original

|              Método               |               Descrição               |
| :-------------------------------: | :-----------------------------------: |
|           push(element)           | adiciona elementos no final do array  |
|         unshift(element)          | adiciona elementos no incio do array  |
|               pop()               |   remove o último elemento do array   |
|              shift()              |  remove o primeiro elemento do array  |
| splice(start, deleteCount, itens) | adiciona ou remove elementos no array |
|              reverse              |       inverte a ordem do array        |

## Métodos que retornam um novo array, sem alterar o orignal

|       Método        |                                   Descrição                                    |
| :-----------------: | :----------------------------------------------------------------------------: |
|  arr1.concat(arr2)  |                             concatena dois arrays                              |
|  slice(start,end)   |                          extrai um pedaço de um array                          |
|   join(separator)   |                   concatena todo os elementos em uma string                    |
|     flat(depth)     |    concatena os arrays em uma única camada até a profundicade especificada     |
| flatMap(callbackFn) | combinação de map e flat. mapeia cada elemento e concatena em uma unica camada |

## Métodos de consulta

|      Método       |                                                                       Descrição                                                                       |
| :---------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
|     at(index)     |                                                       retorna o elemento no índice especificado                                                       |
|      length       |                                                            retorna o comprimento do array                                                             |
| indexOf(element)  |                  Retorna o primeiro índice no qual o elemento especificado é encontrado no array. Se não for encontrado, retorna -1.                  |
| includes(element) |                                 Retorna um valor booleano indicando se o array contém ou não o elemento especificado.                                 |
| some(callbackFn)  |        Retorna true se pelo menos um elemento no array satisfizer a condição fornecida pela função de callback. Caso contrário, retorna false.        |
| every(callbackFn) |         Retorna true se todos os elementos no array satisfizerem a condição fornecida pela função de callback. Caso contrário, retorna false.         |
| find(callbackFn)  | Retorna o primeiro elemento no array que satisfaz a condição fornecida pela função de callback. Se nenhum elemento for encontrado, retorna undefined. |

## Métodos importantes

### forEach

O método `forEach()` executa uma função fornecida uma vez para cada elemento do array.

```javascript
arr.forEach(function (element, index, arr) {});
```

### Map

O método `map()` retorna um novo array com o resultado de uma função aplicada a cada elemento.

```javascript
array.map(function (element, index, array) {});
```

Podemos, por exemplo, usar o método map para dobrar o valor de cada elemento do array original, e retornar um novo array com os resultados.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);
```

### Filter

O método `filter()` retorna um novo array contendo apenas os elementos que atendem a uma condição especifica.

```javascript
array.filter(function (element, index, array) {});
```

Podemos usar o método para separar quais notas foram aprovadas.

```javascript
const notas = [5.0, 8.5, 7.5, 4.5, 9.0];

const notasAprovadas = notas.filter((nota) => nota >= 7);
console.log(notasAprovadas);
```

### Reduce

O método `reduce()` retorna um novo array com um único valor ao qual o array original foi reduzido.

```javascript
array.filter(function (acumulador, valorAtual, index, array) {}, valorInicial);
```

- acumulador: é o valor resultante da chamada anterior.
- valor inicial: especifica o valor inicial do acumulador.

Podemos usar o método para retornar a soma de todos os valores do array

```javascript
const numbers = [4, 8, 22, 5, 9];

const sum = numbers.reduce((acc, num) => acc + num);
console.log(sum);
```
