export const validarTexto = (input)=>{
    const valor = input.value.trim()
    const longitud = valor.length;
    console.log(longitud)
    if (!/^[a-zA-Z\s]+$/.test(valor)) {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
    }else{
        input.classList.remove('is-invalid');
        input.classList.add('is-valid')
        return true
    }
}

export const validarNumero = (input)=>{
    const valor = input.value.trim();
    
    if (valor === '') {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid')
    }
    if (!/^[0-9]+$/.test(valor)) {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid')
        return true
    }
}

export const validarLargo = (input, min, max)=>{
    const valor = input.value.trim()
    const longitud = valor.length;

    if (longitud >= min && longitud <= max) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
    } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

export const validarMail = (mail)=>{
    const mailValue = mail.value.trim();
    const patron = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if (patron.test(mailValue)) {
        mail.classList.remove('is-invalid');
        mail.classList.add('is-valid')
        return true
    }else{
        mail.classList.remove('is-valid')
        mail.classList.add('is-invalid')
        return false
    }
}