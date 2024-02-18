# Short Circuiting

Os operadores lógicos || e && podem ser usados de outras formas além de retornar valores booleanos.

## Valores falsos

Em javascript, os seguintes valores são do tipo `falsy` (valores que no contexto booleano são falsos):

- false
- null
- NaN
- 0
- strings vazias ("",'',``)
- undefined

## O operador OR

O operador `or` retorna o primeiro valor verdadeiro de todos os operandos ou o ultimo valor caso todos sejam falsos.

```javascript
console.log(0 || 19); // 19
console.log("" || null || "Hello"); // Hello
console.log(20 || undefined); / 20
console.log("Hello" || 20 || NaN); // Hello
```

Ele é util para definir valores padrão.

```javascript
function saudacao(nome) {
  console.log(`Olá ${nome || "Visitante"}! Como está você?`);
}

saudacao("Isabella");
saudacao();
```

## O operador AND

O operador `and` retorna o primeiro valor falso ou o ultimo valor se todos forem verdadeiros.

```javascript
console.log("" && "Hello"); // ""
console.log(20 && "Hello" && undefined); //undefined
console.log(20 && null && 0); // null
console.log(20 && 30); // 30
```

É util para executar um código no segundo operando caso o valor do primeiro for verdadeiro.

```javascript
function dirigir() {
  console.log("Legal! Você já pode dirigir.");
}

idade = 19;
idade >= 18 && dirigir();

idade = 15;
idade > 18 && dirigir();
```

No primeiro caso, o primeiro operando retorna verdadeiro e por isso a função `dirigir` é chamada. Mas no segundo, o operando é falso e então a função `dirigir` nem chega a ser chamada.
