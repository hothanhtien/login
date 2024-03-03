var input1 = document.querySelector('.input1')
var input2 = document.querySelector('.input2')
var loginbtn = document.querySelector('.btnLogin')
var acc = document.querySelector('.account');
var pAcc = document.querySelector('.pE1')
var pPass = document.querySelector('.pE2')
var pas = document.querySelector('.pass');
console.log(input1, input2, loginbtn)

function checkAcc(a) {
    var regex = /^[a-zA-Z0-9]+$/;
    if (regex.test(a)) {
        return true;
    }
    else return false
}

function checkLet(a) {
    var regex = /^[0-9]+$/;
    for (var i = 0; i < a.length; i++) {
        if (regex.test(a[i])) return 1;
    }
}

function checkNum(a) {
    var regex = /^[a-zA-Z]+$/;
    for (var i = 0; i < a.length; i++) {
        if (regex.test(a[i])) return 1;
    }

}

function checkLecThuong(a) {
    var regex = /^[a-z]+$/;
    for (var i = 0; i < a.length; i++) {
        if (regex.test(a[i])) return 1;
    }
}

function checkLecHoa(a) {
    var regex = /^[A-Z]+$/;
    for (var i = 0; i < a.length; i++) {
        if (regex.test(a[i])) return 1;
    }
}

function checkSo(a) {
    var regex = /^[0-9]+$/;
    for (var i = 0; i < a.length; i++) {
        if (regex.test(a[i])) return 1;
    }
}

function checkKytu(a) {
    var regex = /^[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;
    for (var i = 0; i < a.length; i++) {
        if (regex.test(a[i])) return 1;
    }

}

function checkPass(a) {
    var regex = /^[a-zA-Z0-9]+$/;
}

loginbtn.addEventListener('click', () => {
    let dem=0;
    let input1Value = input1.value;
    let input2Value = input2.value;
    console.log(input1Value, input2Value)
    if (input1Value == '') {
        pAcc.innerHTML = 'Please enter account'
        acc.classList.add('E')
    }
    else if (!checkAcc(input1Value) && input1Value.length >= 1) {
        pAcc.innerHTML = 'You entered the account in the wrong format'
        acc.classList.add('E')
    }
    else if (checkLet(input1Value) + checkNum(input1Value) != 2) {
        console.log(checkLet(input1Value), checkNum(input1Value))
        pAcc.innerHTML = 'The account must have both letters and numbers'
        acc.classList.add('E')
    }
    else {
        acc.classList.remove('E')
        dem++;
    }

    if (input2Value == '') {
        pPass.innerHTML = 'Please enter a password'
        pas.classList.add('F')
    }
    else if (checkLecHoa(input2Value) && checkLecThuong(input2Value) && checkSo(input2Value) && checkKytu(input2Value)) {

        pas.classList.remove('F')
        dem++;
    }
    else {
        pPass.innerHTML = 'Password must contain lowercase letters, uppercase letters, numbers, and characters'
        pas.classList.add('F')
    }
    if (dem==2) alert('ok')
})


input2.addEventListener('input', () => {
    console.log('dang nhap')
    pas.classList.add('M');
    let input2Value = input2.value;
    if (input2Value == '') pas.classList.remove('M');
})

var mat = document.querySelector('.mat');
var check = input2.hasAttribute('type', 'password');
mat.addEventListener('click', () => {
    if (check) {
        input2.setAttribute('type', 'text')
        check= false;
    }
    else {
        input2.setAttribute('type', 'password')
        check= true;
    }
    console.log(check)
})