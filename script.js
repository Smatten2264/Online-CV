// Sørger for, at koden kører efter DOM'en er klar
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form'); // Henter formularen
    const formMessage = document.getElementById('form-message'); // Henter feedback-div'en
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Forhindrer standard formularindsendelse
  
      // Hent værdier fra formularfelterne
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const captcha = document.getElementById('captcha').value.trim();
  
      // Tjek om felterne er udfyldt
      if (!name || !email || !message || !captcha) {
        formMessage.innerHTML = `<div class="alert alert-danger">Udfyld venligst alle felter.</div>`;
        return;
      }
  
     // Tjek CAPTCHA (2 + 3 = 5)
      if (parseInt(captcha) !== 5) { 
        console.log(`Captcha input: ${captcha}`); // Debugging i konsollen
        formMessage.innerHTML = `<div class="alert alert-danger">Forkert CAPTCHA. Prøv igen!</div>`;
        return;
    }
  
  
      // Simuler en succesfuld formularindsendelse
      formMessage.innerHTML = `<div class="alert alert-success">Din besked er sendt! Tak fordi du kontaktede mig.</div>`;
  
      // Nulstil formularen
      form.reset();
    });
  });
  