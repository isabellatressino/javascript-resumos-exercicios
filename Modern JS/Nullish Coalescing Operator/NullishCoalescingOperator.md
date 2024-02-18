# The Nullish Coalescing Operator

O operador é representado por `??` e pode ser visto como um caso especial do operador lógico `||`. A diferença é que, em vez de lidar com valores `falsy`, ele trata especificamente valores `nulos` e `undefined`.

Considero o objeto pessoa:

```javascript
const pessoa = {
	nome: "Maria",
	idade: 0,
	endereco: "Rua do Sol, 27",
};

// Com o operador OR
console.log(pessoa.idade || "Idade não disponivel");

// Com o operador de coalescência nula
console.log(pessoa.idade ?? "Idade não disponível");
```

No primeiro caso o valor da idade é tido como um valor falso, e então é mostrado a string no console. Mas pensando no contexto de idade, o valor pode ser `zero`, então usamos o operador nullish coalescing para que o zero possa ser tido como válido.
