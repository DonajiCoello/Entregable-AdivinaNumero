let valorInicial = 1;
let valorFinal = 100;
let numeroInicialUsuario = 50;



const numeromas = document.querySelector("#butonMas")
const numeromenos = document.querySelector("#butonMenos")
const numeroAcertado = document.querySelector("#botonGanador")



function busquedaBinaria(){
    const numero = Math.floor( (valorFinal+valorInicial)/2 )
    document.getElementById("numeroMostrado").innerHTML = numero;
    console.log("el numero es?: "+numero);
}
numeromas.addEventListener("click", () => {  

    console.log("========= se oprimio es mayor ============")
    valorInicial = Math.floor((valorFinal+valorInicial)/2)
    console.log("valor inicial: ",valorInicial); 
    console.log("valor final ",valorFinal); 
    busquedaBinaria()

 });

 numeromenos.addEventListener("click", () => {  

    console.log("========= se oprimio es menor ============")
    console.log("valor inicial: ",valorInicial); 
    valorFinal = Math.floor( (valorInicial+valorFinal)/2 )
    console.log("valor final: ",valorFinal); 
    busquedaBinaria();

 });

console.log(numeromas);


numeroAcertado.addEventListener("click", () => {
    document.getElementById("ganador").innerHTML="¡Se ha adivinado tu número!"
}); 




// num ---> 50
// num > 50 ----> 75
// 50 -- > val inicial y 75 --> val final
// es menor --> 12 (val final)
//   menor -- 50 a val final --> x < 75
// x - 75 = 50
// x = 75 + 50 // valor total


