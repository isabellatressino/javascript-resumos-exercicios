# Strings

Uma string é uma sequência de caracteres usados para representar texto.

```javascript
const str = "Hello World!";
console.log(typeof str);
```

## Métodos

|          Método          |                                                  Descrição                                                   |
| :----------------------: | :----------------------------------------------------------------------------------------------------------: |
|     includes(valor)      |                                      retorna se a string contém o valor                                      |
|      indexOf(valor)      |                              retorna a posição da primeira ocorrência do valor                               |
|    lastIndexOf(valor)    |                               retorna a posição da última ocorrência do valor                                |
|          length          |                                       retorna o comprimento da string                                        |
|      repeat(numero)      |         retorna uma nova string com o determinado número de cópias concatenadas da string original.          |
| replace(valor,novoValor) |    retorna uma nova string com as correspondências de um padrão substituídas por um determinado caractere    |
|    slice(inicio,fim)     |     retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim     |
| split(separador,limite)  | divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array |
|      toLowerCase()       |                     retorna o valor da string que foi chamada convertido para minúsculo                      |
|      toUpperCase()       |                     retorna o valor da string que foi chamada convertido para maiúsculo                      |
|          trim()          |                          remove os espaços em branco do início e/ou fim de um texto                          |
