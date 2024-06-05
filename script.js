const delanterosRiver = JSON.parse(localStorage.getItem('delanterosRiver')) || [];

        function agregarDelantero(apellido, nombre, edad) {
            const delantero = { apellido, nombre, edad }
            delanterosRiver.push(delantero)
            localStorage.setItem('delanterosRiver', JSON.stringify(delanterosRiver))
            mostrarDelanteros()
        }

        function verInformacionDelanteros() {
            const container = document.getElementById('delanteros-container')
            container.innerHTML = ''
            delanterosRiver.forEach(delantero => {
                const delanteroGuardado = document.createElement('div')
                delanteroGuardado.textContent = `Apellido: ${delantero.apellido}, Nombre: ${delantero.nombre}, Edad: ${delantero.edad}`
                container.appendChild(delanteroGuardado)
            })
        }

        function verInformacionDelantero(apellido) {
            const delantero = delanterosRiver.find(d => d.apellido === apellido)
            if (delantero) {
                alert(`Apellido: ${delantero.apellido}, Nombre: ${delantero.nombre}, Edad: ${delantero.edad}`)
            } else {
                alert('Delantero no encontrado.')
            }
        }

        function seVaDelClubDelantero() {
            
        }

        function golesDelDelantero() {
            
        }

        function River() {
            let continuar = true
            while (continuar) {
                const accion = prompt('Ingresar Delantero:(Agregar Delantero-Ver Delantero/s)')
                if (accion === 'Agregar Delantero') {
                    const apellidoIngresado = prompt('Ingrese el Apellido del nuevo delantero.')
                    const nombreIngresado = prompt('Ingrese el Nombre del nuevo delantero.')
                    const edadIngresada = prompt('Ingrese la edad del nuevo delantero.')
                    agregarDelantero(apellidoIngresado, nombreIngresado, edadIngresada)
                } else if (accion === 'Ver Delanteros') {
                    verInformacionDelanteros()
                } else if (accion === 'Ver') {
                    const apellidoIngresado = prompt('Ingrese el Apellido del delantero.')
                    verInformacionDelantero(apellidoIngresado)
                } else {
                    alert('Acción no válida.')
                }
                continuar = confirm('¿Desea continuar?')
            }
        }

        River()