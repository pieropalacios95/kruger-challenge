const cedula = /^[0-9]\d{4}\d{5}$/
const names = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/
const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export function validateCedula(param) {
    if(cedula.test(param)){
        return false
    }else {
        return true
    }
}

export function validateNames(param) {
    if(names.test(param)){
        return false
    }else {
        return true
    }
}

export function validateEmail(param){
    if(email.test(param)){
        return false
    }else {
        return true
    }
}