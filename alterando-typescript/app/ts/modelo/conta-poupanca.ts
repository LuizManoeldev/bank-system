class ContaPoupanca extends Conta{
    private dataAniversario: string;
    
    constructor(numero: string, saldo: number, dataAniversario: string){
        super(numero, saldo);
        this.dataAniversario = dataAniversario;
    }

    creditar(valor: number) {
        super.creditar(valor * 1.1);
    }


}