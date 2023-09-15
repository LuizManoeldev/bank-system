class PessoaJuridica extends Pessoa{
    private _cnpj: string

    constructor(nome:string, idade: number, dataNascimento: Date, cnpj:string){
        super(nome, idade, dataNascimento)
        this._cnpj = cnpj
    }

    get cnpj(){
        return this._cnpj
    }

    set cnpj(novoCnpj:string){
        this._cnpj = novoCnpj
    }

    toString():string{
        return super.toString() + ` - Juridica`
    }

}