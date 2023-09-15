class Pessoa{
    protected _nome: string;
    protected _idade: number;
    protected _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento
    }

    get nome(): string {
        return this._nome;
    }

    get idade(): number {
        return this._idade;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    set idade(novaIdade: number) {
        this._idade =novaIdade;
    }

    set dataNascimento(novaDataNascimento: Date){
        this._dataNascimento = novaDataNascimento
    }

    formatarData(): string {
        let dia = this._dataNascimento.getDay()
        let mes = this._dataNascimento.getMonth()
        let ano = this._dataNascimento.getFullYear()

        return `${dia}/${mes}/${ano}`
    }

    toString(): string {
        return `Nome: ${this.nome} - Idade: ${this.idade} - Data de Nascimento: ${this.formatarData()}`
    }

}