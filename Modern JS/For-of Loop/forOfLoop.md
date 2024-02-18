# For Of Loop

O loop `for...of` é usado para percorrer os valores de um objeto iterável.

```javascript
for (const elemento of iteravel) {
	// Código a ser executado para cada elemento
}
```

O Loop `for...of` também aceita as palavras-chave `continue` e `break`.

## Exemplo

Considere os sabores de suco de uma lanchonete. O array sucos pode ser iterado da seguinte maneira:

```javascript
const sucos = ["Abacaxi", "Frutas Vermelhas", "Laranja", "Limão", "Maracujá"];

for (const item of sucos) {
	console.log(item);
}
```

## O método entries()

Se de algum modo precisarmos do valor dos indices de uma iteração, podemos usar o método `entries()`.

```javascript
const sucos = ["Abacaxi", "Frutas Vermelhas", "Laranja", "Limão", "Maracujá"];

for (const item of sucos.entries()) {
	console.log(`${item[0] + 1}: ${item[1]}`);
}
```

O métdo nos retorna um array `[indice,elemento]` e por isso podemos acessar o indice e o elemento que nem fizemos acima.

Para visualizar isso, basta expandir o método: `console.log(...sucos.entries());`

## Melhorando o código

Como o método `entries()` nos retorna um array, podemos aplicar o `destructuring` para deixar nosso código mais legível, ao inves de trabalhar com a notação de colchetes.

```javascript
const sucos = ["Abacaxi", "Frutas Vermelhas", "Laranja", "Limão", "Maracujá"];

for (const [i, suco] of sucos.entries()) {
	console.log(`${i + 1}: ${suco}`);
}
```
