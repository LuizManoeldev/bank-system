class ContaBonificada extends Conta {
    constructor(numero: string, saldo: number) {
        super(numero, saldo);
    }

    creditar(valor: number) {
        super.creditar(valor * 1.1);
    }

}
