class Conta {
    constructor(numero, saldo = 0) {
        this.numero = numero;
        this.saldo = saldo;
    }
    getNumero() {
        return this.numero;
    }
    getSaldo() {
        return this.saldo;
    }
    debitar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
    creditar(valor) {
        this.saldo += valor;
    }
    transferir(destino, valor) {
        this.debitar(valor);
        destino.creditar(valor);
    }
}
