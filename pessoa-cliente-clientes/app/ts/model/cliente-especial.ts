class CienteEspecial extends Cliente {
    dependentes: Array<Cliente>

    constructor(nome:string, cpf: string, conta:string){
        super(nome, cpf, conta);
        this.dependentes = new Array<Cliente>();
    }
}