function novalinha(){
    //passando os elementos pras variáveis
    var d_nome = document.querySelector("#innome");
    var d_quant = document.querySelector("#inquant");
    var d_desc = document.querySelector("#indesc")

    //criando os elementos para html
    var novalinha = document.createElement("tr");
    var nome = document.createElement("td");
    var quant = document.createElement("td");
    var desc = document.createElement("td");
    
    //Atribuindo valores 
    nome.textContent = d_nome.value;
    quant.textContent = d_quant.value;
    desc.textContent = d_desc.value;

    //mandando pro tr
    novalinha.appendChild(nome);
    novalinha.appendChild(quant);
    novalinha.appendChild(desc);

    //mandando pro html
    const tabela = document.querySelector("#tabela");
    tabela.appendChild(novalinha);
}
