class ClienteController {
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;

    private clientes : Clientes
    constructor(){
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf")
        this.inputConta = <HTMLInputElement>document.querySelector("#conta")

        this.clientes = new Clientes();
    }

    inserir(evento: Event){
        evento.preventDefault();

        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, this.inputConta.value)

        console.log(novoCliente)
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);

    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {

                this.clientes.remover(cliente.getCpf());
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}