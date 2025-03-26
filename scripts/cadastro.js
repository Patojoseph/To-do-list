//Fazer a passagem para dentro do site
//com a falta de um banco não posso fazer as validações

const submit = document.querySelector('#submit_form').onclick = function (e) {
    //proibindo o envio caso esteja com algo errado
    e.preventDefault();

    //validando o nome do cliente
    let Select_name = document.querySelector("#input_nome");
    let Name = (Select_name.value);
    //vou utilizar keycodes para fazer a verificação e exclusão das téclas que não quero
    
    console.log(Name)
    
    
    
    
    
    
    //envio para o ínico para poder entrar com a conta criada
    //document.querySelector('form').action = "index.html";
}