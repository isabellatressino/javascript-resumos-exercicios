# Optional Chaining

O operador de encadeamento opcional (`?.`) uma característica introduzida no ES2020 que permite acessar propriedades de objetos de maneira mais segura, evitando erros de referência indefinida.

## Acessando propriedades de objetos

Considere o objeto restaurante.

```javascript
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
```

Se quisessemos verificar o horario de funcionamento às quartas, isso resultaria em um erro, pois não temos a propriedade `wed`.

```javascript
console.log(restaurant.openingHours.wed.open);
```

Para evitar esse erro, nós poderiamos usar uma estrutura condicional para verificar primeiro se a propriedade `wed` existe e só assim mostrar no console o valor.

```javascript
if (restaurant.openingHours.wed) console.log(restaurant.openingHours.wed.open);
```

Mas há uma maneira mais concisa de fazer isso, usando o `optional chaining`.

```javascript
console.log(restaurant.openingHours.wed?.open);
```

Essa estrutura faz com que ele só leia a propriedade `open` se a propriedade anterior existir, e caso não exista, retorna `undefined`.

## Chamanda de métodos

Podemos usar o `optional chaining` para verificar se um método existe, e caso existir, chama-lo.

```javascript
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); // Aqui foi usado o Nullish Coalescing Operator para mostrar a frase caso não exista o método.
```

## Array

Podemos verificar se uma posição de array está vazia.

```javascript
const users = [
  {
    name: "Jonas",
    email: "jonas@exemple.com",
  },
];

console.log(users[1]?.name ?? "User array empty");
```
