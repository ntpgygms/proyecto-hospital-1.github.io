function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent= paciente.nombrePaciente
        const celdaApellidoPaciente = fila.insertCell();
        celdaApellidoPaciente.textContent=paciente.apellidoPaciente
        const celdaCedula = fila.insertCell();
        celdaCedula.textContent=paciente.cedula
        const celdaEdad = fila.insertCell();
        celdaEdad.textContent=paciente.edadPaciente
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad
        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent="Pendiente de asignación"

    });
}

mostrarPacientes()