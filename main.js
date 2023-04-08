const form = document.getElementById('form-valida');

let formValid = false;

function validaCampos(campA, campB) {
    return campA < campB;
    
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let campA = parseFloat(document.getElementById('campoA').value);
    let campB = parseFloat(document.getElementById('campoB').value);

    const containermessagesucess = document.querySelector('.success-message');
    const messagesucess = 'Formulario enviado com sucesso! Para realizar um novo envio click em: Realizar nova validação. ';

    const containermessageerror = document.querySelector('.error-message');
    const messageerror = 'Valor do campo A é maior que o campo B !';



    formValid = validaCampos(campA, campB);
    
    if (formValid){
        containermessagesucess.innerHTML = messagesucess;
        containermessageerror.style.display = 'none';
    

    } else {
        containermessageerror.innerHTML = messageerror;

    }    

})

function recarregarAPagina(){
    window.location.reload();
} 
