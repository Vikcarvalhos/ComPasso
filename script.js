document.getElementById('consultar-atendimento').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    var cpf = document.getElementById('consulta-cpf').value; // Pega o valor do CPF
    if (cpf) {
        switch(cpf) {
            case '063.177.994-90':
                window.location.href = "./consulta/999fef97.html";
                break;
            case '510.227.748-08':
                window.location.href = "./consulta/a9d14898.html";
                break;
            case '333.333.333-33':
                window.location.href = "https://seusite.com/caso3";
                break;
            case '444.444.444-44':
                window.location.href = "https://seusite.com/caso4";
                break;
            case '555.555.555-55':
                window.location.href = "https://seusite.com/caso5";
                break;
            default:
                alert('CPF não corresponde a nenhum caso.');
        }
    } else {
        alert('Por favor, digite um CPF válido.'); // Alerta o usuário se o CPF não for válido
    }
});