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

|      Método       |                 Descrição                 |
| :---------------: | :---------------------------------------: |
| arr1.concat(arr2) |           concatena dois arrays           |
| slice(start,end)  |       extrai um pedaço de um array        |
|  join(separator)  | concatena todo os elementos em uma string |

## Métodos de consulta

|      Método       |                           Descrição                           |
| :---------------: | :-----------------------------------------------------------: |
|     at(index)     |           retorna o elemento no índice especificado           |
|      length       |                retorna o comprimento do array                 |
| indexOf(element)  |                  mostra o índice do elemento                  |
| includes(element) | retorna uma valor booleano se o elemento está ou não no array |

## forEach

O método `forEach()` executa uma função fornecida uma vez para cada elemento do array.

```javascript
arr.forEach(function (element, index, arr) {});
```
