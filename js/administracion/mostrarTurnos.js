const agendaTurnos =
  JSON.parse(localStorage.getItem("turnosConfirmados")) || [];
console.log(agendaTurnos);

const numeroTurno = agendaTurnos.length

let ahora = new Date();
function convertirAFechaCompleta(turno) {
  let [dia, mes, año] = turno.fecha.split("-");
  let fechaFormateada = `${año}-${mes}-${dia}`; 
  
  return new Date(`${fechaFormateada}T${turno.hora}`);
}

let turnosOrdenados = agendaTurnos.sort((turnoA, turnoB) => {
  let fechaTurnoA = convertirAFechaCompleta(turnoA);
  let fechaTurnoB = convertirAFechaCompleta(turnoB);

  // Comparar las dos fechas
  return fechaTurnoA - fechaTurnoB;
});

console.log("Turnos ordenados de más cercano a más lejano:", turnosOrdenados);
const mostrarTurno = (turno, numeroTurno) => {

  const collapseId = `flush-collapse${numeroTurno}`;
  const contenedorTurnos = document.getElementById("contenedorTurnos");
  contenedorTurnos.innerHTML +=  `
    <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                  ${turnosOrdenados[0].fecha} ${turnosOrdenados[0].hora} ${turnosOrdenados[0].especialidad} 
                </button>
              </h2>
              <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                <h4>Datos del paciente</h4>
                <h6>Nombre y apellido</h6>
                ${turnosOrdenados[numeroTurno].nombre} ${turnosOrdenados[numeroTurno].apellidos}
                <h6>Edad</h6>
                ${turnosOrdenados[numeroTurno].edad} años 
                <h6>D.N.I</h6>
                ${turnosOrdenados[numeroTurno].dni} 
                <h4>Datos médicos</h4>
                <h6>Cobertura medica</h6>
                ${turnosOrdenados[numeroTurno].cobertura} 
                <h6>Numero de afiliado</h6>
                #${turnosOrdenados[numeroTurno].numAfiliado} 
                <h6>Historial medico relevante</h6>
                ${turnosOrdenados[numeroTurno].historial} 
                <h4>Preferencias del turnosOrdenados</h4>
                <h6>Medico preferido</h6>
                ${turnosOrdenados[numeroTurno].historial} 
                <h6>Motivo de consulta</h6>
                ${turnosOrdenados[numeroTurno].motivo} 

                </div>
              </div>
      </div>
    </div>`;
};


const cargaInicial = () => {
  if (turnosOrdenados.length > 0) {
    turnosOrdenados.map((itemTurno, posicionTurno) =>
      mostrarTurno(itemTurno, posicionTurno)
    );
  }
};

cargaInicial();
