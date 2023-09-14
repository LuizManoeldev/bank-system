class RepositorioContas{
    private contas:  Array<Conta>;

    constructor(){
        this.contas = new Array<Conta>();
    }

    adicionar(conta: Conta): void{
        this.contas.push(conta);
    }

    remover(numeroDaConta: string): void {
        this.contas.splice(this.contas.indexOf(this.pesquisar(numeroDaConta)), 1);
    }

    pesquisar(numeroConta: string): Conta {
        return this.contas.find(conta => conta.getNumero() === numeroConta);
    }

    getContas(): Array<Conta>{
        return this.contas;
    }
}