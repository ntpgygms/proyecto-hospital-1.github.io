const formulario = document.getElementById("registro-pacientes-form")
const nombrePaciente = document.getElementById("paciente")
const apellidoPaciente = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edadPaciente = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const objetoPaciente ={//EStos son los atributos del objeto paciente. NO SON VARIABLES
        nombrePaciente: nombrePaciente.value,
        apellidoPaciente: apellidoPaciente.value,
        cedula: cedula.value,
        edadPaciente: edadPaciente.value,
        telefono: telefono.value,
        especialidad: especialidad.value,
    }
    let pacientes = []//Arreglo de pacientes
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(objetoPaciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formulario.reset()
    alert("El paciente ha sido registrado con éxito.")
})