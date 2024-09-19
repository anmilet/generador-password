let contraseña = document.getElementById('contrasena')
let cantidad = document.getElementById('cantidad')
let mensaje = document.getElementById('mensaje')
const cadenaPermitida ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

function generarContraseña(){
    mensaje.innerHTML =''
    if (cantidad.value < 6){    
        mensaje.innerHTML = 'La contraseña debe ser mayor o igual a 6'
        mensaje.style = "visibility:visible"
    }
    else{
        let password = ''
        let numero = false
        let mayuscula = false        
        
        for(let i = 0; i < cantidad.value; i++){
            let posicion = Math.floor(Math.random()*cadenaPermitida.length)
            let caracterAleatorio = cadenaPermitida[posicion]
            password += caracterAleatorio
            let valores = validarContraseña(caracterAleatorio, numero, mayuscula) 
           numero = valores.numero
           mayuscula = valores.mayuscula             
        }
        
        contraseña.value = password            
        validarFortaleza(numero, mayuscula, mensaje)
    }
}

function limpiarContraseña(){
    contraseña.value = ''
    mensaje.innerHTML = ''
}

function validarNumero(caracterAleatorio,numero){
    if(parseInt(caracterAleatorio)){
         numero = true
    }
    return numero
}

function validarMayuscula(caracterAleatorio, mayuscula){
    if(caracterAleatorio.toLocaleUpperCase()===caracterAleatorio){
        mayuscula = true
    }
    return mayuscula
}

function validarContraseña(caracterAleatorio, numero, mayuscula){
 
    if(numero==false){
        numero = validarNumero(caracterAleatorio, numero)
    }
    if(mayuscula==false){
        mayuscula = validarMayuscula(caracterAleatorio, mayuscula)              
    } 
    return {numero, mayuscula}   
}

function validarFortaleza( numero, mayuscula, mensaje){
    mensaje.style="visibility:visible"
    mensaje.innerHTML = ''

    if(numero && mayuscula){
         mensaje.innerHTML ='La contraseña es fuerte'
         mensaje.style ='color: green'
    }else{
        mensaje.innerHTML ='La contraseña es débil' 
        mensaje.style = 'color: yellow'
    }
   
}






