// login.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('.formLogin');

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        const cpfInput = loginForm.querySelector('input[placeholder="Digite seu CPF"]').value;
        const passwordInput = loginForm.querySelector('input[placeholder="Digite sua senha"]').value;
        
        let userFound = false;
        
        // Percorre todas as entradas do localStorage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const user = JSON.parse(localStorage.getItem(key));
            
            if (user.cpf === cpfInput && user.password === passwordInput) {
                userFound = true;
                break;
            }
        }
        
        if (userFound) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Conectando...',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'CPF ou senha incorretos. Por favor, tente novamente.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });
});
