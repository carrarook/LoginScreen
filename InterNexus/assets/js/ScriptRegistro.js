// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const nationality = document.getElementById("nationality");
    const passportSection = document.getElementById("passportSection");
    const loginButton = document.getElementById("loginButton");

    nationality.addEventListener("change", () => {
        if (nationality.value === "Outro") {
            passportSection.style.display = "block";
        } else {
            passportSection.style.display = "none";
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Função para gerar um ID único
        function generateUniqueId() {
            return 'user_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
        }

        const userId = generateUniqueId(); // Gerando um ID único para o usuário

        const user = {
            id: userId,
            fullName: document.getElementById("fullName").value,
            cpf: document.getElementById("cpf").value,
            email: document.getElementById("email").value,
            dateOfBirth: document.getElementById("dateOfBirth").value,
            nationality: document.getElementById("nationality").value,
            passportNumber: nationality.value === "Outro" ? document.getElementById("passportNumber").value : "",
            foreignNationality: nationality.value === "Outro" ? document.getElementById("foreignNationality").value : "",
            password: document.getElementById("password").value
        };

        // Salvando no LocalStorage usando o ID único como chave
        localStorage.setItem(user.id, JSON.stringify(user));

        // Exibindo os dados salvos no console
        console.log("Dados salvos:", user);

        alert("Registro concluído com sucesso!");
        form.reset();
        passportSection.style.display = "none";
    });

    loginButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Redirecionar para a tela de login (substitua por sua URL de login)
    });
});
