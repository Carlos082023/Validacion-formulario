const submitFunction = (event)=>{
    if(!validarFormulario()){
        event.preventDefault()//se previene la actualizacion de la web
    }else{
        event.preventDefault()

        alert(
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Estudio: ' + document.getElementById('nivelEstudio').value + '\n' 
        )
    }
}
//escucha el envio del formulario
document.getElementById('formulario').addEventListener('submit',submitFunction)

function validarFormulario(){
    const camposTexto = document.querySelectorAll('input[type="text"]')
    let validacionCorrecta = true
    //Valida campos de texto
    camposTexto.forEach(campo =>{
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(errorCampo,'!Este campo es requerido!')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo,'!!Este campo debe tener al menos 3 caracteres')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })

    //valida elementos de email
    const email = document.getElementById('email')
    let erroEmail = document.getElementById('errorEmail')
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){//valida el formato del email
        ocultarError(erroEmail)
    }else{
        mostrarError(erroEmail,'!!Por favor ingrese un correo valido')
        validacionCorrecta = false
    }

    //validacion edad
    const edad = document.getElementById('edad')
    let errorEdad = document.getElementById('errorEdad')
    if(edad.value < 18){
        mostrarError(errorEdad,'!Tenes que ser mayor de edad')
        validacionCorrecta = false
    }else{
        ocultarError(errorEdad)
    }

    //validacion de la actividad
    const actividad = document.getElementById('actividad')
    let errorActividad = document.getElementById('errorActividad')
    if(actividad.value == ''){
        mostrarError(errorActividad,'!!Porfavor seleccione una actividad')
        validacionCorrecta = false
    }else{
        ocultarError(errorActividad)
    }

    //validacion nivek estudio
    const estudio = document.getElementById('nivelEstudio')
    let errorEstudio = document.getElementById('errorNivelEstudio')
    if(estudio.value == ''){
        mostrarError(errorEstudio,'!Porfavor seleccione su nivel de estudio')
        validacionCorrecta = false
    }else{
        ocultarError(errorEstudio)
    }

    //validar terminos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos')
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos')
    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, '! Tenes que aceptar los terminos y condiciones')
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta// esto retorna si el formulario esta correcto
}



    const mostrarError = (elemento,mensaje)=>{
        elemento.textContent = mensaje
        elemento.style.display = "block"
    }

    const ocultarError = (elemento)=>{
        elemento.textContent = ''
        elemento.style.display = "none"
    }


