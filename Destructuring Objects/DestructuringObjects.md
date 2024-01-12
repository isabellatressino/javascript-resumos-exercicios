# Destructuring Objects

Considere o objeto:

```javascript
const livro = {
  titulo: "A mulher na janela",
  autor: "A. J. Finn",
  editora: "Arqueiro",
  dataPublicação: 2018,
  palavrasChave: ["suspense", "thriller", "mistério", "plot twist"],
  paginas: 350,
  idioma: "Português",
  avaliacoes: {
    numeroAvaliacoes: 1121,
    umaEstrela: 15,
    duasEstrelas: 12,
    tresEstrelas: 219,
    quatroEstrelas: 589,
    cincoEstrelas: 286,
  },
};
```

## Atribuição

Na desestruturação de objetos precisamos dar às variáveis, o nome exato das propriedades que queremos extrair.

```javascript
const { titulo, autor, idioma } = livro;
console.log(titulo, autor, idioma);
```

Nota-se que aqui, não precisamos deixar buracos nas propriedades que queremos ignorar.

## Mudando o nome das variáveis

Se quisermos que os nomes das variáveis sejam diferentes dos nomes das propriedades, fazemos:

```javascript
const { titulo: title, autor: author, idioma: language } = livro;
console.log(title, author, language);
```

## Valores padrões

Para atribuir valores padrões caso tentamos ler uma propriedade que não existe:

```javascript
const { titulo, autor, tradutor = "unknown" } = livro;
console.log(titulo, autor, tradutor);
```

## Reatribuição de variáveis

Caso queiramos reatribuir valores para variáveis ja existentes:

```javascript
let bookTitle = "unknown";
let bookAuthor = "unknown";
console.log(bookAuthor, bookTitle);

({ titulo: bookTitle, autor: bookAuthor } = livro);
console.log(bookTitle, bookAuthor);
```

## Objetos aninhados

Para trabalhar com a desestruturação de objetos aninhados, basta fazer:

```javascript
const {avaliacoes: {quatroEstrelas}} = livro;
console.log(quatroEstrelas);
```

## Destructuring de objetos em funções

As vezes, algumas funções recebem uma grande quatidade de parâmetros, o que dificulta saber a ordem a serem passados. 

Com a desestruturação, podemos passar um objeto como argumento e a função irá desestrutura-lo como parâmetros.

```javascript
const sobreLivro = ({ titulo, autor, dataPublicação, editora }) => {
  console.log(
    `O livro ${titulo} de ${autor} foi publicado em ${dataPublicação} pela editora ${editora}.`
  );
};

sobreLivro({
  titulo: "Coraline",
  autor: "Neil Gaiman",
  dataPublicação: 2002,
  editora: "Harper",
});
```