class Cliente {
    private _nome: string;
    private _cpf:string;
    private _conta: string;

    constructor(nome: string, cpf:string, conta: string) {
        this._nome = nome;
        this._cpf = cpf
        this._conta = conta;
    }

    get nome(): string {
        return this._nome;
    }

    getCpf(): string{
        return this._cpf;
    }

    getConta(): string{
        return this._conta;
    }
    setNome(novoNome:string) {
        this._nome = novoNome;
    }

    setCpf(novoCpf:string) {
        this._cpf = novoCpf
    }

    setConta(novaConta:string) {
        this._conta = novaConta
    }

    toString():string{
        return `Nome: ${this._nome} - Cpf: ${this._cpf} `
    }
}