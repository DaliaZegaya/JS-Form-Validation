function mainFunc () {
    if (checkFirstName() && checkLastName() 
    && checkDate() && checkEmail() && 
    checkPhone && checkPasswords ) {
        return true
    }
    return false
}


function checkFirstName () {
    var FnameRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.{,10})/
    if (FnameRegex.test(first_name.value)) {
        return true
    }
    first_name_span.innerText= "*Invalid first name";
    first_name_span.style.color= "red"
    return false
}
function checkLastName () {
    var LnameRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.{,10})/
    if (LnameRegex.test(last_name.value)) {
        return true
    }
    return false
}
function checkDate () {
    var nowDate= new Date ()
    if (nowDate.getFullYear-user_date.value > 18) {
        return true
    }
    return false
}
function checkEmail () {
    var EmailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (EmailRegex.test(email.value)) {
        return true
    }
    return false

}
function checkPhone () {
    var PhoneRegex= /^(?=.*[0-9])(?=.{10})/
    if (PhoneRegex.test(phone.value)) {
        return true
    }
    return false
}
function checkPasswords () {
    var passwordsRegex=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,12})/
    if (password1.value == password2. value) {
        if (passwordsRegex.test (password1.value)) {
            return true
        }
        password1_span.innerText= "Password is not strong"
        return false
    }
    password1_span.innerText= "Passwords are not match"
}
