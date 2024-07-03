function mostrarFechaHora() {
    const fechaHora = new Date();
    const dia = fechaHora.getDate();
    const mes = fechaHora.getMonth() + 1; // Los meses comienzan en 0
    const anio = fechaHora.getFullYear();
    const hora = fechaHora.getHours();
    const minutos = fechaHora.getMinutes();
    const segundos = fechaHora.getSeconds();

    const formatoFechaHora = `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}`;
    document.getElementById("fecha-hora").textContent = formatoFechaHora;
  }

  // Llama a la función para mostrar la fecha y hora al cargar la página
  mostrarFechaHora();