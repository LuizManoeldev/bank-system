class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
        this.inputNumero = document.querySelector('#numero');
        ;
        this.inputSaldo = document.querySelector('#saldo');
        this.inputTipoDeConta = document.querySelector('#tipoDeConta');
        this.inputDataDeAniversario = document.querySelector('#dataDeAniversario');
    }
    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }
    listar() {
        this.repositorioContas.getContas().forEach(conta => this.inserirContaNoHTML(conta));
    }
    inserir(evento) {
        evento.preventDefault(); // Para nao atualizar pagina no click de inserir
        if (this.inputTipoDeConta.value === 'corrente') {
            const conta = new Conta(this.inputNumero.value, Number(this.inputSaldo.value));
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
        }
        else if (this.inputTipoDeConta.value === 'bonificada') {
            const contaBonificada = new ContaBonificada(this.inputNumero.value, Number(this.inputSaldo.value));
            this.repositorioContas.adicionar(contaBonificada);
            this.inserirContaNoHTML(contaBonificada);
        }
        else {
            const contaPoupanca = new ContaPoupanca(this.inputNumero.value, Number(this.inputSaldo.value), this.inputDataDeAniversario.value);
            this.repositorioContas.adicionar(contaPoupanca);
            this.inserirContaNoHTML(contaPoupanca);
        }
    }
    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.getNumero() + ': ' + conta.getSaldo();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.getNumero());
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
