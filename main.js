import './style.css'
import Alpine from 'alpinejs'
import * as emailjs from "emailjs-com";


(function() {
    emailjs.init("5Pm1SWoVRNztTTnCv");
})();

// Funció per enviar el formulari
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recull les dades del formulari
    const formData = {
        nom: document.getElementById('nom').value,
        cognom: document.getElementById('cognom').value,
        email: document.getElementById('email').value,
        missatge: document.getElementById('missatge').value
    };

    // Envia el correu utilitzant EmailJS
    emailjs.send("service_n7tekum", "template_n79dps4", formData)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("El teu missatge s'ha enviat correctament!");
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log("FAILED...", error);
            alert("Hi ha hagut un error en enviar el missatge. Torna-ho a provar.");
        });
});

window.Alpine = Alpine

Alpine.start()
