
    function checkLogin(event){
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value

    if (nome === 'usuario' && senha === '123'){
        window.location.href = "linha.html"
    } else {
        alert('Nome de usuário ou senha incorretos. Tente novamente.')
    }
}