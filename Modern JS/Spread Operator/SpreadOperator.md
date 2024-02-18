# O operador Spread

É uma funcionalidade introduzida no ES6 que permite expandir elementos de uma estrutura iterável.

O operador pode ser usado quando elementos de um array ou objeto precisam ser incluidos em um novo array ou objeto, ou quando precisa ser passado um a um como argumentos na chamada de uma função.

## Incluindo elementos

Se quisessemos que os elementos de um array fossem passados para outro array, com elementos acrescentados, fariamos assim:

```javascript
const arr1 = [5, 6, 7];

// sem o spreed
const arr2 = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(arr2);

// com o spreed
const arr3 = [1, 2, ...arr1];
console.log(arr3);
```

Para um objeto funcionaria de forma semelhante.

```javascript
const aluno = {
  nome: "Isabella",
  ra: 23013050,
  curso: "Engenharia de Software",
};

const alunoMedia = { ...aluno, media: 9 };
console.log(alunoMedia);
```

Com strings:

```javascript
const nome = "Isabella";
const letras = [...nome];
console.log(letras);
```

## Funções

Considerando a função

```javascript
const calcularMedia = (n1, n2, n3) => {
  const media = (n1 + n2 + n3) / 3;
  console.log(`A média das notas ${n1}, ${n2} e ${n3} é ${media}.`);
};
```

Se quisessemos passar o array notas como argumento:

```javascript
const notas = [8.5, 9.0, 8.0];

// Sem o spread
calcularMedia(notas[0], notas[1], notas[2]);

// Com o spread
calcularMedia(...notas);
```
