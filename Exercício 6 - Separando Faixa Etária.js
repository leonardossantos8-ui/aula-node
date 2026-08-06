const idades = [12, 18, 25, 40, 16, 22];
console.log("idades menores que 18:");
for (let i = 0; i < idades.length; i++) {
  if (idades[i] < 18) {
    console.log(idades[i]);
  }
}
console.log("idades maiores ou iguais a 18:");
for (let i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    console.log(idades[i]);
  }
}