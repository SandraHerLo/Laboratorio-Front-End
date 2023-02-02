function validateNombre(){
	var nameField = document.getElementById('nombre');
	var validName = /^[A-Za-z]+$/;
	var errorName = document.getElementById('nameError');

	if(nameField.value == 0){
		errorName.innerHTML = "Rellene este campo";
		nameField.classList.add("invalid");
		nameField.classList.add("errorIcon");
		return false; 
	}
	else if(validName.test(nameField.value)){
		nameField.classList.remove("invalid");
		nameField.classList.remove("errorIcon");
		errorName.innerHTML = "";
		nameField.classList.add("valid");
		nameField.classList.add("successIcon");
		return true; 
	}
	else {
		errorName.innerHTML = "Nombre inválido";
		nameField.classList.add("invalid");
		nameField.classList.add("errorIcon");
		return false; }
	}

function validateEmail(){
	var emailField = document.getElementById('email');
	var validEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var errorEmail = document.getElementById('emailError');
	
	if(emailField.value == 0){
		errorEmail.innerHTML = "Rellene este campo";
		emailField.classList.add("invalid");
		emailField.classList.add("errorIcon");
		return false; 
	}
	else if(validEmail.test(emailField.value) ){
		emailField.classList.remove("invalid");
		emailField.classList.remove("errorIcon");
		errorEmail.innerHTML = "";
		emailField.classList.add("valid");
		emailField.classList.add("successIcon");
		return true; 
	}
	else {
		errorEmail.innerHTML = "Email inválido";
		emailField.classList.add("invalid");
		emailField.classList.add("errorIcon");
		return false; 
	}
}

function validateClave(){
	var passwordField = document.getElementById('clave');
	var validPassword = /^[\S]{1,8}$/;
	var errorPassword = document.getElementById('claveError');
	var errorEspacios = /^[\s\S]{1,8}$/;

	if(passwordField.value == 0){
		errorPassword.innerHTML = "Rellene este campo";
		passwordField.classList.add("invalid");
		passwordField.classList.add("errorIcon");
		return false; 
	}else if(validPassword.test(passwordField.value) ){
		passwordField.classList.remove("invalid");
		passwordField.classList.remove("errorIcon");
		errorPassword.innerHTML = "";
		passwordField.classList.add("valid");
		passwordField.classList.add("successIcon");
		return true; 
	}else if(errorEspacios.test(passwordField.value)){
		errorPassword.innerHTML = "La clave no debe contener espacios";
		passwordField.classList.add("invalid");
		return false; 
	}else {	
		errorPassword.innerHTML = "No debe tener más de 8 caracteres";
		passwordField.classList.add("invalid");
		return false; 
	}
}

function validateClaveConfirmacion(){
	var passwordField = document.getElementById('clave');
	var confirmField = document.getElementById('claveConfirmacion');
	var errorConfirm = document.getElementById('claveConfirmacionError');

	if(confirmField.value == 0){
		errorConfirm.innerHTML = "Rellene este campo";
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		return false;
	 }
	else if (passwordField.value == confirmField.value ){
		confirmField.classList.remove("invalid");
		confirmField.classList.remove("errorIcon");
		errorConfirm.innerHTML = "";
		confirmField.classList.add("valid");
		confirmField.classList.add("successIcon");
		return true; 
	}
	else {
		errorConfirm.innerHTML = "Las contraseñas no coinciden";
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		return false; 
	} 
}
function validateFormulario(){
	if (validateNombre() && validateEmail() && validateClave() && validateClaveConfirmacion()){
		alert("La inscripción ha sido correcta");
		return true; }
	else {
		return false; }
}
