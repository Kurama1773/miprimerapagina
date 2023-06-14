// document.querySelector("button.button-menu-toggle").addEventListener ("click", function() {
//   document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
// })

// function showAlert() {
//   alert("hola, esta es una alerta de javascript");

// };
// const form = document.getElementById('myForm');
// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   validateForm();
// });
// function validateEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
//   return regex.test(email)
// }
// function validateForm() {
//   const emailInput = document.getElementById('email');
//   const email = emailInput.value;
//   if (!validateEmail(email)) {
//     alert('Por favor ingrese un correo electrónico válido.');
//   } else {
//     alert('Correo electrónico enviado correctamente.');
//   }
// }

if (document){
  document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
  })

} 


let boton = document.getElementById("miBoton");
boton.addEventListener("click", function(){alert("usted ha sido hackeado");});
const miBoton = document.getElementById("miBoton");