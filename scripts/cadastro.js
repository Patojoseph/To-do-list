//Fazer a passagem para dentro do site
//com a falta de um banco não posso fazer as validações

const submit = document.querySelector('#submit_form').onclick = function () {
    document.querySelector('form').action = "./agenda.html"
}

//fazer a verificação de todos os modos possíveis.