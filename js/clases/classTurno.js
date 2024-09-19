export default class Turno {
    #apellidos
    #nombre
    #dni
    #nacimiento
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
    constructor({apellidos, nombre, dni, nacimiento, tel, mail="No especifica", especialidad="No especifica", medico="No especifica", fecha, hora, motivo="No especifica", cobertura, numAfiliado, historial="No especifica", contacto}) {
        this.#apellidos = apellidos;
        this.#nombre = nombre;
        this.#dni = dni;
        this.#nacimiento = nacimiento;
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
        return this._apellidos;
    }

    set apellidos(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Apellidos debe ser un texto válido.");
        }
        this._apellidos = value;
    }

    // Nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Nombre debe ser un texto válido.");
        }
        this._nombre = value;
    }

    // DNI
    get dni() {
        return this._dni;
    }

    set dni(value) {
        if (!/^\d{7,8}$/.test(value)) {
            throw new Error("DNI debe tener entre 7 y 8 dígitos numéricos.");
        }
        this._dni = value;
    }

    // Fecha de nacimiento
    get nacimiento() {
        return this._nacimiento;
    }

    set nacimiento(value) {
        const fecha = new Date(value);
        const hoy = new Date();
        if (isNaN(fecha) || fecha >= hoy) {
            throw new Error("Fecha de nacimiento no válida.");
        }
        this._nacimiento = value;
    }

    // Teléfono
    get tel() {
        return this._tel;
    }

    set tel(value) {
        if (!/^\d{10,15}$/.test(value)) {
            throw new Error("El número de teléfono debe tener entre 10 y 15 dígitos.");
        }
        this._tel = value;
    }

    // Correo electrónico
    get mail() {
        return this._mail;
    }

    set mail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error("Correo electrónico no válido.");
        }
        this._mail = value;
    }

    // Especialidad
    get especialidad() {
        return this._especialidad;
    }

    set especialidad(value) {
        this._especialidad = value;
    }

    // Médico
    get medico() {
        return this._medico;
    }

    set medico(value) {
        this._medico = value;
    }

    // Fecha
    get fecha() {
        return this._fecha;
    }

    set fecha(value) {
        const fecha = new Date(value);
        if (isNaN(fecha)) {
            throw new Error("Fecha no válida.");
        }
        this._fecha = value;
    }

    // Hora
    get hora() {
        return this._hora;
    }

    set hora(value) {
        if (!/^\d{2}:\d{2}$/.test(value)) {
            throw new Error("La hora debe estar en formato HH:MM.");
        }
        this._hora = value;
    }

    // Motivo
    get motivo() {
        return this._motivo;
    }

    set motivo(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Motivo debe ser un texto válido.");
        }
        this._motivo = value;
    }

    // Cobertura
    get cobertura() {
        return this._cobertura;
    }

    set cobertura(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Cobertura debe ser un texto válido.");
        }
        this._cobertura = value;
    }

    // Número de afiliado
    get numAfiliado() {
        return this._numAfiliado;
    }

    set numAfiliado(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Número de afiliado debe ser un texto válido.");
        }
        this._numAfiliado = value;
    }

    // Historial médico
    get historial() {
        return this._historial;
    }

    set historial(value) {
        if (typeof value !== 'string') {
            throw new Error("El historial debe ser un texto válido.");
        }
        this._historial = value;
    }

    // Contacto de emergencia
    get contacto() {
        return this._contacto;
    }

    set contacto(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Contacto de emergencia debe ser un texto válido.");
        }
        this._contacto = value;
    }
}