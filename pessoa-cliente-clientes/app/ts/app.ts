let contaController = new ContaController();
let clienteController = new ClienteController()

//contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

//console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
//console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
//console.log('Conta Bonificada: ' + cb1.saldo);

const cliente1 = new Cliente("Luiz", "1201230123", "123123")
const cliente2 = new Cliente("Joao","1231231", "231231")

const clientes = new Clientes();
clientes.inserir(cliente1)
clientes.inserir(cliente2)

clientes.remover("1201230123")
console.log(clientes.listar())



