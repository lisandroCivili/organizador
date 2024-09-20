import Turno from "../clases/classTurno.js";
import {
  validarLargo,
  validarMail,
  validarNumero,
  validarTexto,
} from "./validacionesInput.js";

const datosTurno = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const dni = document.querySelector("#dni");
const edad = document.querySelector("#edad");
const tel = document.querySelector("#tel");
const mail = document.querySelector("#mail");
const especialidad = document.querySelector("#especialidad");
const doctor = document.querySelector("#doctor");
const fecha = document.querySelector("#fecha");
const hora = document.querySelector("#hora");
const motivo = document.querySelector("#motivo");
const cobertura = document.querySelector("#cobertura");
const afiliado = document.querySelector("#afiliado");
const historial = document.querySelector("#historial");
const contacto = document.querySelector("#contacto");

const agendaTurnos =
  JSON.parse(localStorage.getItem("turnosConfirmados")) || [];

nombre.addEventListener("input", () => {
  validarTexto(nombre);
  validarLargo(nombre, 3, 40);
});
apellido.addEventListener("input", () => {
  validarTexto(apellido);
  validarLargo(apellido, 3, 40);
});
dni.addEventListener("input", () => {
  validarNumero(dni);
  validarLargo(dni, 7, 8);
});
edad.addEventListener("input", () => {
  validarNumero(edad);
  validarLargo(dni, 1, 3);
});
afiliado.addEventListener("input", () => {
  validarNumero(afiliado);
});
mail.addEventListener("input", () => {
  validarMail(mail);
});

const guardarDatos = (e) => {
  e.preventDefault();
  if (
    validarTexto(nombre) &&
    validarLargo(nombre, 3, 40) &&
    validarTexto(apellido) &&
    validarLargo(apellido, 3, 40) &&
    validarNumero(dni) &&
    validarNumero(edad) &&
    validarNumero(afiliado) &&
    validarMail(mail)
  ) {
    const nuevoTurno = new Turno(
      nombre.value,
      apellido.value,
      dni.value,
      edad.value,
      tel.value,
      mail.value,
      especialidad.value,
      doctor.value,
      cambiarFormatoFecha(fecha.value),
      hora.value,
      motivo.value,
      cobertura.value,
      afiliado.value,
      historial.value,
      contacto.value
    );
    agendaTurnos.push(nuevoTurno);
    guardarLocalStorage();
    limpiarFormulario();
  }
};
function cambiarFormatoFecha(fecha) {
  const partesFecha = fecha.split("-");
  const año = partesFecha[0];
  const mes = partesFecha[1];
  const dia = partesFecha[2];
  const fechaFormateada = `${dia}-${mes}-${año}`;
  return fechaFormateada;
}
const limpiarFormulario = () => {
  datosTurno.reset();
};
const guardarLocalStorage = () => {
  localStorage.setItem("turnosConfirmados", JSON.stringify(agendaTurnos));
};
datosTurno.addEventListener("submit", guardarDatos);
