const arr = [4,5];

var [a,b,c] = arr;
console.log(a,b,c); // Aqui, a variável c retornaria undefined

var [a=1,b=1,c=1] = arr;
console.log(a,b,c); // Já aqui, a variável c retorna 1


