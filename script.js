//While 
//do/while 
//for 


//Crie uma lista com 5 nomes usando um while 

//enquanto {condição verdadeira} faça alguma coisa 

//lista de array ou vetor
let lista = ['Banana', 'Maça', 'Kiwi', 'Morangos', 'Laranjas']

//cria uma variavel de Contador 
let posicao = 0

//Cria uma lista não ordenada
const listaEmTela = document.createElement("ol")

while (posicao < 5) {
    console.log(lista[posicao])
    const itemLista = document.createElement("li")
    itemLista.textContent = lista[posicao]
    listaEmTela.appendChild(itemLista)
    posicao = posicao + 1
}


document.body.appendChild(listaEmTela)



let sexo 

do {
    sexo = prompt("Informe seu Sexo (M-Masculino; F-Feminino): ")
} while (sexo) 

    console.log(sexo)
/* 
Comparações Truthy
variavel != undefined 
variavel != null
variavel > 0
variavel = True 

Comprarações falsy
variavel == undefined
variavel == null 
variavel == 0
variavel == false 
variavel == " "
    */



//! For - para 
//! Usos do for quando eu sei o tamanho da minha lista ou quantidade 
//! que vou executar a repetição
//! Para uma variável index que começa em 0
//! condição (enquanto o index < tamanho da lista)
//! Incremente em 1 a variável index 

for (let index = 0; index < lista.length; index++) {
    const element = lista [index]
    console.log(element)
}

//? FOR Each

for (let item of lista) {
    console.log(item)
}