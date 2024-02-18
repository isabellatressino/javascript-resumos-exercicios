# Maps

É uma estrutura de dados que permite armazenar pares de chave-valor, onde cada chave é única e está associada a um valor correspondente.

## Criando um map

É possivel que a chave de um map seja de qualquer tipo.

```javascript
// quiz game
const question = new Map([
  ["question", "What is the best programing language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
]);
```

## Adicionando elementos

Usamos o método `set` para adicionar novos elementos.

```javascript
restaurante.set("correct", 3).set(true, "Correct 🎉").set(false, "Try again!");
```

Observe que podemos adicionar elementos seguidos.

## Métodos

|      Método       |                  Descrição                  |
| :---------------: | :-----------------------------------------: |
| .set(chave,valor) |           Adiciona novo elemento            |
|    .get(chave)    | retorna o elemento com a chave especificada |
|    .has(chave)    |     verifica a existência de uma chave      |
|  .delete(chave)   | elimina o elemento com a chave especificada |
|       .size       |          retorna o tamanho do map           |
|     .clear()      |      elimina todos os elementos do map      |

## Iterações

Podemos usar o loop `for..of` para iterar sobre um map.

```javascript
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
```

## Trabalhando com chaves booleanas

No map `question`, temos duas chaves com o tipo boolean. Podemos manipula-las para exibir um valor caso a alternativa esteja correta ou incorreta.

```javascript
let answer = 2;

console.log(question.get(answer === question.get("correct")));

answer = 3;

console.log(question.get(answer === question.get("correct")));
```

## Transformando objetos em maps

```javascript
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);
```
