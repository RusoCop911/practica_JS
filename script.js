let nombre = prompt('Ingrese su Nombre')
let apellido = prompt('Ingrese su Apellido')
alert('Bienvenido/a ' + nombre + ' ' + apellido + ' a la calculadora de divisas')

let divisa = [
    {id:1, nombre:'dolares', continente:'america', pais:'eeuu', valorBlue:500},
    {id:2, nombre:'euro', continente:'europa', pais:'union europea', valorBlue:540},
    {id:3, nombre:'real', continente:'america', pais:'brasil', valorBlue:91},
    {id:4, nombre:'yen', continente:'asia', pais:'japon', valorBlue:347}
]

let respuestaContinente = ''

do {
    respuestaContinente = prompt('De qué continente desea buscar divisas? \n 1) América \n 2) Europa \n 3) Asia \n Para salir tipear "salir" o click en "Cancel"').toLowerCase()
    const continenteElegido = divisa.find(divisa => divisa.continente === respuestaContinente)
    
    if (continenteElegido) {
        if (continenteElegido.continente === 'america' || continenteElegido.continente === 'américa' || continenteElegido.continente === '1') {
            const seleccionDivisa = prompt('Selecciona la divisa que deseas convertir a pesos argentinos: \n 1) Dólares \n 2) Reales \n Click en "Cancel" para volver').toLowerCase()
            if (seleccionDivisa === '1' || seleccionDivisa === 'dólares' || seleccionDivisa === 'dolares') {
                validarDatosDolares()
            } else if (seleccionDivisa === '2' || seleccionDivisa === 'reales') {
                validarDatosReales()
            } else {
                alert('Opción inválida. Por favor, elija una opción válida.')
            }
        } else {
            alert(continenteElegido.respuestaDivisa)
        }
    } else {
        alert('Continente no encontrado. Por favor, ingrese un continente válido.')
    }
} while (respuestaContinente !== 'salir')

function validarDatosDolares() {
    let intentos = 0
    let cambio 

    while (intentos < 3) {

        cambio = prompt('Qué desea convertir? \n (1 U$D = $500) \n (D) Dólares americanos a pesos argentinos \n (P) Pesos argentinos a dólares americanos').toUpperCase()

        if (cambio === "D") {
            cambioDolar()
        } else if (cambio === "P") {
            cambioPesos()
        } else {
            alert('ingrese solo "D" o "P" sin comillas')
            intentos++
        }
    }

    if (intentos === 3) {
        alert('La "D" está junto a la "S" y la "P" está pegada a la "O", no es tan difícil')
        validarDatosDolares()
    }
}

function cambioDolar() {

    let dolar = Number(prompt('Ingrese la cantidad de dólares sin decimales o "0" para voler al menú'))

    if (isNaN(dolar)) {
        alert('ingrese cifra numerica')
        cambioDolar()
    } else if (dolar === 0) {
        validarDatosDolares()
    } else {
        alert('La cantidad en pesos seria de ' + (dolar * 500))
    }
}

function cambioPesos() {

    let pesos = Number(prompt('Ingrese la cantidad de pesos sin decimales o "0" para voler al menú'))

    if (isNaN(pesos)) {
        alert('ingrese cifra numerica')
        cambioPesos()
    } else if (pesos === 0) {
        validarDatosDolares()
    } else {
        alert('La cantidad en ' + continenteElegido.nombre + 'blue seria de ' + (pesos / continenteElegido.valorBlue))
    }
}

function validarDatosReales() {
    let intentos = 0
    let cambio 

    while (intentos < 3) {

        cambio = prompt('Qué desea convertir? \n (1 Real = $91) \n (R) Reales a pesos argentinos \n (P) Pesos argentinos a Reales').toUpperCase()

        if (cambio === "R") {
            cambioReal()
        } else if (cambio === "P") {
            cambioPesos()
        } else {
            alert('ingrese solo "R" o "P" sin comillas')
            intentos++
        }
    }

    if (intentos === 3) {
        alert('La "R" está junto a la "T" y la "P" está pegada a la "O", no es tan difícil')
        validarDatosDolares()
    }
}

function cambioReal() {

    let Real = Number(prompt('Ingrese la cantidad de Reales sin decimales o "0" para voler al menú'))

    if (isNaN(Real)) {
        alert('ingrese cifra numerica')
        cambioReal()
    } else if (Real === 0) {
        validarDatosReales()
    } else {
        alert('La cantidad en pesos seria de' + ' ' + (Real * 91))
    }
}
