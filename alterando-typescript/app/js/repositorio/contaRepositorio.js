class RepositorioContas {
    constructor() {
        this.contas = new Array();
    }
    adicionar(conta) {
        this.contas.push(conta);
    }
    remover(numeroDaConta) {
        this.contas.splice(this.contas.indexOf(this.pesquisar(numeroDaConta)), 1);
    }
    pesquisar(numeroConta) {
        return this.contas.find(conta => conta.getNumero() === numeroConta);
    }
    getContas() {
        return this.contas;
    }
}
