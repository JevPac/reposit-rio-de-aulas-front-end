console.error("o macaco")

console.warn("o macaco fugiu")

//Declaração de variaveis
var x = 5;
var y = 6;
//Função
function soma(){
    if (x > 0){
        return x + y;
    }
}
//chamada de função
soma();
//função anonima
const somar = () => {return x + y};
console.log(somar());