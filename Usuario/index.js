const areaLogin = document.getElementById('login-area'),
    painelControle = document.getElementById('painel'),
    depositar = document.getElementById('deposito'),
    sacar = document.getElementById('saque'),
    saldo = document.getElementById('balance'),
    inputDeposito = document.getElementById('deposito-input'),
    inputSaque = document.getElementById('saque-input'),
    botaoDeposito = document.getElementById('deposito-btn'),
    botaoSaque = document.getElementById('saque-btn'),
    botaoEnviar = document.getElementById('submit-btn');


botaoEnviar.addEventListener('click', () => {
    areaLogin.style.display = 'none';
    painelControle.classList.remove('d-none');
})

botaoDeposito.addEventListener('click', () => {
    const valor = inputDeposito.value;
    const valorDeposito = Number(depositar.innerText) + Number(valor);
    const valorSaldo = Number(saldo.innerText) + Number(valor);
    depositar.innerText = valorDeposito;
    saldo.innerText = valorSaldo;
    inputDeposito.value = '';
})


botaoSaque.addEventListener('click', () => {
    const valor = inputSaque.value;
    if (Number(valor) === 0) {
        alert("Você não possui saldo para sacar");
    } else if (Number(valor) > Number(saldo.innerText)) {
        alert("Você não possui saldo suficiente para sacar esse valor");
    } else {
        const valorSaldo = Number(saldo.innerText) - Number(valor);
        const valorSaque = Number(sacar.innerText) + Number(valor);
        sacar.innerText = valorSaque;
        saldo.innerText = valorSaldo;
        inputSaque.value = '';
    }
})