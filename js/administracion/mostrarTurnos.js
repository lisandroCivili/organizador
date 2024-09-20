const agendaTurnos = JSON.parse(localStorage.getItem("turnosConfirmados")) || [];
console.log(agendaTurnos)

const mostrarTurno = (turno)=>{
    const contenedorTurnos = document.getElementById('contenedorTurnos');
    contenedorTurnos.innerHTML += `<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${turno.nombre}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>`
}
const cargaInicial = () => {
    if (agendaTurnos.length > 0) {
      agendaTurnos.map((itemTurno, posicionTurno) =>
        mostrarTurno(itemTurno, posicionTurno + 1)
      );
    }
  };

cargaInicial()