//BUSCA A CLASSE DO BOTAO
let btn = document.querySelector(".btn-calcular");

//INICIA UM EVENTO AO CLICAR NO BOTAO
btn.addEventListener("click", function(e){
    e.preventDefault();
    //BUSCA A CLASSE DO INPUT E DO RESULTADO
    let campoValor = document.querySelector(".valor_digitado");
    let resultado = document.querySelector(".res");

    //VERIFICA SE FOI DIGITADO ALGUM NUMERO OU FOI ENVIADO UM CAMPO VAZIO
    if(campoValor.value == "" || !isNaN(campoValor.value)){
        alert("Valor numerico digitado ou vazio");
        campoValor.value = "";
        return false;
    }else{
        //SE ESTIVER OK, O VALOR É INCIADO COM 5 E MULTIPLICA PELO VALOR DO NOME DIGITADO NO CAMPO
        let valor_inicial = 5;
        var res = campoValor.value.length * valor_inicial;
        campoValor.value = "";
        resultado.innerHTML = `R$ ${res}`;
    }



});
