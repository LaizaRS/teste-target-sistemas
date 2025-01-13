// Exercicio 1
let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);
// Resultado: soma= 91


// Exercicio 2
function isFibonacci(num) {
  let [a, b] = [0, 1];
  while (a <= num) {
    if (a === num) return true;
    [a, b] = [b, a + b];
  }
  return false;
}

const num = 21;
const message = isFibonacci(num)
  ? `O número ${num} pertence à sequência de Fibonacci.`
  : `O número ${num} NÃO pertence à sequência de Fibonacci.`;

console.log(message);
// Resultado: o número 21 pertence à sequência de Fibonacci.

// Exercicio 4
const faturamentos = [
  { estado: "SP", valor: 67836.43 },
  { estado: "RJ", valor: 36678.66 },
  { estado: "MG", valor: 29229.88 },
  { estado: "ES", valor: 27165.48 },
  { estado: "Outros", valor: 19849.53 }
];

const faturamentoTotal = faturamentos.reduce((total, item) => total + item.valor, 0);
let somaPercentuais = 0;

faturamentos.forEach((item, index) => {
  let percentual = (item.valor / faturamentoTotal) * 100;
  somaPercentuais += percentual;

  if (index !== faturamentos.length - 1) {
    console.log(`Percentual de ${item.estado}: ${percentual.toFixed(2)}%`);
  }
});

const percentualUltimo = 100 - somaPercentuais;
console.log(`Percentual de ${faturamentos[faturamentos.length - 1].estado}: ${percentualUltimo.toFixed(2)}%`);

// Resposta: dando um total de 100%
// Percentual de SP: 35.59%
// Percentual de RJ: 19.22%
// Percentual de MG: 15.32%
// Percentual de ES: 14.23%
// Percentual de Outros: 15.64%

// Exercicio 5
let entrada = "bola";
let invertida = "";

for (let i = entrada.length - 1; i >= 0; i--) {
  invertida += entrada[i];
}

console.log("String invertida: " + invertida);
// Resultado: alob