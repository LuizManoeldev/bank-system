// let contaController = new ContaController();
//
// contaController.listar();
//
// const c1 = new Conta('1', 100);
// const p1 = new Poupanca('2', 100);
// const cb1 = new ContaBonificada('3', 0);
//
// console.log('Conta: ' + c1.saldo);
//
// p1.atualizarSaldoAniversario();
// console.log('Poupanca: ' + p1.saldo);
//
// cb1.creditar(100);
// console.log('Conta Bonificada: ' + cb1.saldo);

const pessoaF = new PessoaFisica("Luiz", 20, new Date("03/01/2003"), "123123123");
const pessoaJ = new PessoaJuridica("Google", 1000, new Date("03/01/1233"),"123123123")

console.log(pessoaF.toString())
console.log(pessoaJ.toString())