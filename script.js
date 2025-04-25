
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulaire");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const responseMessage = document.getElementById("form-response");

    // Function qui vérifie les erreurs
    function showError(input, message) {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
        input.style.borderColor = "red";
    }

    // Function pour supprimer les messages message d'erreur
    function clearError(input) {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
        input.style.borderColor = "#ccc";
    }

    // Fonction pour validation de l'email
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // soumission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        // Validation du formulaire de nom
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Le nom est requis.");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validation d'email
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email est réquis.");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Entrer une addresse mail valide.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validation de message
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Le message ne peut pas être vide.");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        // Si les formulaires sont valides, affiche le message de succès
        if (isValid) {
            responseMessage.classList.remove("hidden");
            form.reset();
            setTimeout(() => {
                responseMessage.classList.add("hidden");
            }, 3000);
        }
    });
});
