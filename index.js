console.log("Hello Devesh Sir!");
const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
// console.log(name, phone, email);
$('#success').hide();
$('#failure').hide();
validuser = false;
validmail = false;
validphone = false;
Name.addEventListener('blur', () => {
    let regex = /^[A-Za-z0-9]+@([a-zA-Z0-9]{2,10}$)/;
    let str = Name.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        Name.classList.remove('is-invalid');
        console.log("valid name");
        validuser = true
    } else {
        Name.classList.add('is-invalid');
        console.log("Invalid name");
        validuser = false;
    }
})
email.addEventListener('blur', () => {
    let regex = /([\_\-0-9a-zA-Z]+)@([\_\-0-9a-zA-Z]+)\.([A-Za-z])/
    let str = email.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        console.log("valid email");
        validmail = true;
    } else {
        email.classList.add('is-invalid');
        console.log("Invalid email");
        validmail = false;
    }
})
phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        console.log("valid phone");
        validphone = true;
    } else {
        phone.classList.add('is-invalid');
        console.log("Invalid phone");
        validphone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validuser && validmail && validphone) {
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#success').show();
        $('#failure').hide();

    } else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#failure').show();
        $('#success').hide();

    }
})