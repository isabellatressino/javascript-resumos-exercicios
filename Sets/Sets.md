# SETS

É uma estrutura de dados que permite armazenar coleções de valores únicos.

## Exemplo

Considere um array com todas as visitas recebidas em um site.

```javascript
const visitas = [
  "Isabella",
  "Maria",
  "Isabella",
  "Giovanna",
  "Mauro",
  "João",
  "Giovanna",
  "Isabella",
  "Maria",
];
```

Para saber quais são os visitantes desse site, precisariamos garantir que cada visitante seja contado apenas uma vez, independente de quantas vezes eles acessem o site.

Para isso, criamos uma estruta `set` e passamos o array de visitas como argumento.

```javascript
const visitantes = new Set(visitas);

console.log(visitantes);
```

Desse modo, o set `visitantes` possui valores únicos.

## Métodos

|      Método       |                         Descrição                          |
| :---------------: | :--------------------------------------------------------: |
|       .size       |                  retorna o tamanho do set                  |
|  .has(elemento)   | retorna um valor booleano se o elemento está ou não no set |
|  .add(elemento)   |                  adiciona elemento no set                  |
| .delete(elemento) |                  elimina elemento do set                   |
|     .clear()      |             elimina todos os elementos do set              |

## Transformando sets em um array

Para transformar o set em um array, podemos usar o operador `spread`.

```javascript
const visitantesArr = [...new Set(visitas)];

console.log(visitantesArr);
```
