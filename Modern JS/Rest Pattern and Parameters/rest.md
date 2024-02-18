# Rest Pattern and parameters

A sintaxe de rest nos permite representar um número indefinido de argumentos com um array.

Diferente do operador `spread`, que expande um array em elementos individuais, o operador `rest`condensa os elementos em um array.

## Destructuring + rest

Podemos usar o operador rest junto com o destructuring.

```javascript
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
```

No exemplo, ele atribui as variaveis `a`, `b` para os primeiro e segundo elementos do array, respectivamente, e condensa o restante em uma variável chamada `others`.

## Em objetos

Em objetos, basta fazer o destructuring dando à variável o mesmo nome da propriedade que deseja desestruturar e usar o `rest` com as demais.

```javascript
const aluno = {
	nota1: 8.5,
	nota2: 8.0,
	nota3: 9.0,
	media: 8.5,
};

const { media, ...notas } = aluno;
console.log(media, notas);
```

## Em funções

O uso do rest em funções é util para condensar os argumentos em um array quando passados como parâmetros.

```javascript
const add = function (...numbers) {
	console.log(numbers);
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
```
