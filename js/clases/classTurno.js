export default class Turno {
    #nombre
    #apellidos
    #dni
    #edad
    #tel
    #mail
    #especialidad
    #medico
    #fecha
    #hora
    #motivo
    #cobertura
    #numAfiliado
    #historial
    #contacto
    constructor(nombre, apellidos, dni, edad, tel, mail="No especifica", especialidad="No especifica", medico="No especifica", fecha, hora, motivo="No especifica", cobertura, numAfiliado="No especifica", historial="No especifica", contacto) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#dni = dni;
        this.#edad = edad;
        this.#tel = tel;
        this.#mail = mail;
        this.#especialidad = especialidad;
        this.#medico = medico;
        this.#fecha = fecha;
        this.#hora = hora;
        this.#motivo = motivo;
        this.#cobertura = cobertura;
        this.#numAfiliado = numAfiliado;
        this.#historial = historial;
        this.#contacto = contacto;
    }
    get apellidos() {
        return this.#apellidos;
    }

    set apellidos(value) {
        if (typeof value !== 'string') {
            throw new Error("Apellidos debe ser un texto válido.");
        }
        this.#apellidos = value;
    }

    // Nombre
    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        if (typeof value !== 'string') {
            throw new Error("Nombre debe ser un texto válido.");
        }
        this.#nombre = value;
    }

    // DNI
    get dni() {
        return this.#dni;
    }

    set dni(value) {
        const dniNum = Number(value);
        if (!Number.isInteger(dniNum) || value.length < 7 || value.length > 8) {
            alert("dni no valido")
            throw new Error("DNI debe ser un número de entre 7 y 8 dígitos.");
        }
        this.#dni = value;
    }

    // Fecha de edad
    get edad() {
        return this.#edad;
    }

    set edad(value) {
        const fecha = new Date(value);
        const hoy = new Date();
        if (isNaN(fecha) || fecha >= hoy) {
            throw new Error("Fecha de edad no válida.");
        }
        this.#edad = value;
    }

    // Teléfono
    get tel() {
        return this.#tel;
    }

    set tel(value) {
        if (!/^\d{10,15}$/.test(value)) {
            throw new Error("El número de teléfono debe tener entre 10 y 15 dígitos.");
        }
        this.#tel = value;
    }

    // Correo electrónico
    get mail() {
        return this.#mail;
    }

    set mail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error("Correo electrónico no válido.");
        }
        this.#mail = value;
    }

    // Especialidad
    get especialidad() {
        return this.#especialidad;
    }

    set especialidad(value) {
        this.#especialidad = value;
    }

    // Médico
    get medico() {
        return this.#medico;
    }

    set medico(value) {
        this.#medico = value;
    }

    // Fecha
    get fecha() {
        return this.#fecha;
    }

    set fecha(value) {
        const fecha = new Date(value);
        if (isNaN(fecha)) {
            throw new Error("Fecha no válida.");
        }
        this.#fecha = value;
    }

    // Hora
    get hora() {
        return this.#hora;
    }

    set hora(value) {
        if (!/^\d{2}:\d{2}$/.test(value)) {
            throw new Error("La hora debe estar en formato HH:MM.");
        }
        this.#hora = value;
    }

    // Motivo
    get motivo() {
        return this.#motivo;
    }

    set motivo(value) {
        this.#motivo = value;
    }

    // Cobertura
    get cobertura() {
        return this.#cobertura;
    }

    set cobertura(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Cobertura debe ser un texto válido.");
        }
        this.#cobertura = value;
    }

    // Número de afiliado
    get numAfiliado() {
        return this.#numAfiliado;
    }

    set numAfiliado(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Número de afiliado debe ser un texto válido.");
        }
        this.#numAfiliado = value;
    }

    // Historial médico
    get historial() {
        return this.#historial;
    }

    set historial(value) {
        if (typeof value !== 'string') {
            throw new Error("El historial debe ser un texto válido.");
        }
        this.#historial = value;
    }

    // Contacto de emergencia
    get contacto() {
        return this.#contacto;
    }

    set contacto(value) {
        this.#contacto = value;
    }

    toJSON(){
        return{
            nombre: this.nombre,
            apellidos: this.apellidos,
            dni: this.dni,
            edad: this.edad,
            tel: this.tel,
            mail: this.mail,
            especialidad: this.especialidad,
            medico: this.medico,
            fecha: this.fecha,
            hora: this.hora,
            motivo: this.motivo,
            cobertura: this.cobertura,
            numAfiliado: this.numAfiliado,
            historial: this.historial,
            contacto: this.contacto
        }
    }
}