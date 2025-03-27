//Fazer a passagem para dentro do site
//com a falta de um banco não posso fazer as validações
//trocar essa variavel para uma função simples não precisa ser dessa forma, acho que com a função vai ficar bem mais simples


const submit = document.querySelector('#submit_form').onclick = function (e) {
    //proibindo o envio caso esteja com algo errado
    e.preventDefault();

    //validando o nome do cliente
    let Select_name = document.querySelector("#input_nome");
    let Name = (Select_name.value);
    for(let i = 0; i < Name.length; i++){
        let tecla = Name[i];
        if (tecla == "1" || tecla == "2"|| tecla == "3"|| tecla == "4"|| tecla == "5"|| tecla == "6"|| tecla == "7"|| tecla == "8"|| tecla == "9"|| tecla == "0"){
            alert("Não pode números no nome")
            document.getElementById("input_nome").setAttribute("class", "error");
            e.preventDefault();
        };
    };

    //validando o cpf da pessoa 
    let Select_cpf = document.querySelector("#cpf");
    let cpf = (Select_cpf.value);
    //verificação do formato, verificando os 3 primeiros digitos.
    for( let i = 0; i < cpf[3]; i++){
        if (cpf[i] == "-"){
            if(i !== 3){
                console.log("forma errada de escrita");
            };
        };
    };

    //tirando os - e . para fazer a verificação
    cpf = cpf.replace(/\.|-/g,"");

    
    
    
    
    
    
    //envio para o ínico para poder entrar com a conta criada
    //document.querySelector('form').action = "index.html";
}