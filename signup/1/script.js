const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    if (confirmName() && confirmGender() && confirmId() && confirmPassword()) {
    } else {
        event.preventDefault();
    }
});

function confirmName() {
    const username = document.getElementById("username");
    if (!username.value) {
        alert("이름을 입력하세요");
        return false;
    }
    return true;
}

function confirmGender() {
    const gender_m = document.getElementById("man");
    const gender_w = document.getElementById("woman");
    if (!gender_m.checked && !gender_w.checked) {
        alert("성별을 입력하세요");
        return false;
    }
    return true;
}

function confirmId() {
    const id = document.getElementById("id");
    if (!id.value) {
        alert("아이디를 입력하세요");
        return false;
    }
    return true;
}

function clearPassword() {
    document.getElementById("password").value = "";
    document.getElementById("password_confirm").value = "";
}

function confirmPassword() {
    const password = document.getElementById("password");
    const password_confirm = document.getElementById("password_confirm");
    if (!password.value) {
        alert("비밀번호를 입력하세요");
        return false;
    } else if (!password_confirm.value) {
        alert("비밀번호를 확인해주세요");
        clearPassword();
        return false;
    } else if (password.value !== password_confirm.value) {
        alert("비밀번호가 일치하지 않습니다");
        clearPassword();
        return false;
    }
    return true;
}
