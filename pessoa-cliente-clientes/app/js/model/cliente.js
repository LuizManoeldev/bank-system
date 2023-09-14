class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    getCpf() {
        return this._cpf;
    }
    getConta() {
        return this._conta;
    }
    setNome(novoNome) {
        this._nome = novoNome;
    }
    setCpf(novoCpf) {
        this._cpf = novoCpf;
    }
    setConta(novaConta) {
        this._conta = novaConta;
    }
    toString() {
        return `Nome: ${this._nome} - Cpf: ${this._cpf} `;
    }
}
