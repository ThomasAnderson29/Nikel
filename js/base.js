const nome = "João";
let nome2 = "";
let pessoaDefault = {
    nome: "João",
    idade: "25",
    trabalho: "Dev" 
}

let nomes = ["João","Maria","Lucas"]
let pessoas = [
    {
        nome: "João",
        idade: "25",
        trabalho: "Dev"  
    },
    {
        nome: "Maria",
        idade: "24",
        trabalho: "Dev"
    },
    {
        nome: "Lucas",
        idade: "20",
        trabalho: "Dev"
    }
]

function alterarnome() {
    nome2 = "Carol"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Bianca",
    idade: "21",
    trabalho: "Dev"
});

imprimirPessoas();
