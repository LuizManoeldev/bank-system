class Conta {
    
    private numero: string;
    private saldo: number;
   
    constructor(numero: string, saldo=0) {
        this.numero = numero;
        this.saldo = saldo;
    }
    
    getNumero(): string {
        return this.numero;
    }

    getSaldo(): number {
        return this.saldo;
    }
    
    debitar(valor: number): void{
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }

    creditar(valor: number): void{
        this.saldo += valor;
    }

    transferir(destino: Conta, valor: number){
        this.debitar(valor);
        destino.creditar(valor);
    }

}
