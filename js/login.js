function login(e) {
    e.preventDefault()

    const email = 'vitorio@example.com'
    const password = 'senha123'

    let email_informado = document.getElementById('username').value
    let senha_informada = document.getElementById('password').value

    if( email_informado = email && senha_informada == password) {
        let continuar_logado = document.getElementById('remember-me').checked

        if (continuar_logado) {
            document.cookie = 'logado=1'
        }

        window.location.href += '/Para-Assistir/pages/initial.html'
    } else {
        alert('Login ou senha inválidos!')
    }
}

function register(e) {
    e.preventDefault()

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value

    let password = document.getElementById('password').value
    let passwordConfirm = document.getElementById('password-confirm').value

    if (password !== passwordConfirm) {
        alert('As senhas devem ser iguais!')
    }

    window.location.href += '/Para-Assistir/login.html'
}