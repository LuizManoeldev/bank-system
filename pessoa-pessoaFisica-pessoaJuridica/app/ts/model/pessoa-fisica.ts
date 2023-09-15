class PessoaFisica extends Pessoa{
    private _cpf: string

    constructor(nome:string, idade: number, dataNascimento: Date, cpf:string){
        super(nome, idade, dataNascimento)
        this._cpf = cpf
    }

    get cpf(){
        return this._cpf
    }

    set cpf(novoCpf:string){
        this._cpf = novoCpf
    }

    toString():string{
        return super.toString() + ` - Fisica`
    }

}