document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const tema = document.getElementById("tema");
        const mensaje = document.getElementById("mensaje");

        let valid = true;

        // Clear previous errors
        document.getElementById("nombreError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("temaError").textContent = "";
        document.getElementById("mensajeError").textContent = "";

        // Validate nombre
        if (nombre.value.trim() === "") {
            document.getElementById("nombreError").textContent = "El nombre es obligatorio.";
            valid = false;
        } else if (nombre.value.length > 50) {
            document.getElementById("nombreError").textContent = "El nombre no debe superar los 50 caracteres.";
            valid = false;
        }

        // Validate email
        if (email.value.trim() === "") {
            document.getElementById("emailError").textContent = "El correo electrónico es obligatorio.";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            document.getElementById("emailError").textContent = "Debe proporcionar un correo electrónico válido.";
            valid = false;
        }

        // Validate tema
        if (tema.value.trim() === "") {
            document.getElementById("temaError").textContent = "El tema es obligatorio.";
            valid = false;
        } else if (tema.value.length > 50) {
            document.getElementById("temaError").textContent = "El tema no debe superar los 50 caracteres.";
            valid = false;
        }

        // Validate mensaje
        if (mensaje.value.trim() === "") {
            document.getElementById("mensajeError").textContent = "El mensaje es obligatorio.";
            valid = false;
        } else if (mensaje.value.length > 500) {
            document.getElementById("mensajeError").textContent = "El mensaje no debe superar los 500 caracteres.";
            valid = false;
        }

        if (valid) {
            form.submit();
        }
    });
});
