function checkFirstName () {
    var FnameRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.{,10})/
    if (FnameRegex.test(first_name.value)) {
        return true
    }
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
