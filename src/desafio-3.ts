let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo")!;
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");

let totalSaldo = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    totalSaldo += soma;
    campoSaldo.innerHTML = totalSaldo.toString();
    limparSoma();
  }
}

function limparSoma() {
  soma.value = "";
}

function limparSaldo() {
  if (campoSaldo) {
    totalSaldo = 0;
    campoSaldo.innerHTML = totalSaldo.toString();
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
  });
}

botaoLimpar.addEventListener("click", function () {
  limparSaldo();
});
