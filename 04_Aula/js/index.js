//Estudar DOM

function clearForm(){
    document.getElementById('contactForm').reset()
}

function saveForm(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;

    // alert("Nome: " +  name)

    // Verificar se já existem dados salvos no localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Cria um objeto com os dados do formulário
    const formData = {
        name: name,
        email: email,
        password: password,
        message: message
    };

    // Adiciona os dados ao Array
    savedData.push(formData)

    // Salvar o array atualizado no localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));

    // Exibe um alerta de sucesso
    alert("Formulário salvo com sucesso!");

    clearForm();
    
}