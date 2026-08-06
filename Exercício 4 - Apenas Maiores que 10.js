const numeros = [5, 9, 12, 4, 18, 15];
let maiorNumero = numeros[0];

console.log("Números maiores que 10:");
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    console.log(numeros[i]);
  }
}