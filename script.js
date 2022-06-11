//quais variáveis preciso
//quais dados de entrada terão
//quais dados de saída terão


const elementoResposta = document.querySelector("#resposta")


const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "Claro que sim",
    "Não.",
    "Sem dúvidas!",
    "Não, definitivamente!",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "Ameu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente",
    "Minhas fontes dizem que sim.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Vejo que não.",
    "Sinais apontam que sim.",
    "Que a força esteja com você",
]

//Math.random gera numero de 0 até 0,99 sem o 1 inclusivo
//Math.floor(Math.random()) // sempre irá arredondar para o piso que no caso é 0 sempre o mais baixo, se o valor for 1,9 o piso é 1. 
//const totalRespostas = respostas.length // o length irá pegar todo o valor do array o total de itens que tem no array 
//const numeroAleatorio = Math.floor(Math.random()*20) //Math.floor pega qualquer número entre 0 até 0,99
//console.log(respostas.length)//retorna o total de respostas



//Clicar em fazer pergunta

function fazerPergunta(){
    let inputPergunta = document.querySelector("#inputPergunta")
    let botaoPerguntar = document.querySelector("#buttonPerguntar")

    if(inputPergunta.value == ""){
        alert("Digite a sua pergunta")
        return
    }
   
    botaoPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"
    //console.log(inputPergunta.value)

    const elementoResposta = document.querySelector("#resposta")

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    //alert(respostas[numeroAleatorio])

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;
    // sumir a resposta depois de 3 segundos

    setTimeout(function(){
        elementoResposta.style.opacity = 0;
        botaoPerguntar.removeAttribute('disabled')
    }, 3000)
    

}

