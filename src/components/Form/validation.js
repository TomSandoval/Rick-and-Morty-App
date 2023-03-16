const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;
const regexPassword = /[0-9]/;


export function validate (userData) {
    
    const errors = {}
    if(userData.username === ''){
        errors.username = 'Por favor, complete este campo'
    }
    if (userData.username.length > 0 && !regexEmail.test(userData.username)) {
        errors.username = 'Email Invalido';
    }
   if(userData.username.length > 35){
        errors.username = 'El email no puede ser mayor a 35 caracteres'
    }
    if(!regexPassword.test(userData.password)){
        errors.password = 'La contraseña debe incluir un numero'
    }
    if (userData.password.length > 0 && userData.password.length < 6 ) {
        errors.password = 'La contraseña debe tener entre 6 y 11 caracteres';
    }
    if ( userData.password.length > 10 ) {
        errors.password = 'La contraseña debe tener entre 6 y 11 caracteres';
    }
    if (userData.password === '') {
        errors.password = 'Se requiere una contraseña';
    }
    return errors
  }