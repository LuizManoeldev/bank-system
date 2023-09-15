class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }
    toString() {
        return super.toString() + ` - Fisica`;
    }
}
