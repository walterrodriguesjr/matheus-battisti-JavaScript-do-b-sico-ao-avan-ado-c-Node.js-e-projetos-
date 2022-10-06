let p = Promise.resolve(new Error("não deu certo"));

console.log("lalalala");

p.then(value => console.log(value))
.catch(reason => console.log("Falhou: " + reason));