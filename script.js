function handleGetFormData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let city = document.getElementById("city").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  return { name, email, city, zipCode, status };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  let status = document.getElementById("status").checked;
  if (status) {
    return true;
  }

  return false;
}

function validateFormData(obj) {
  if (obj && isNumber(obj.zipCode) && checkboxIsChecked()) {
    return true;
  }

  return false;
}

function submit() {
  let data = handleGetFormData();
  let warning = document.getElementById("warning");

  if (!validateFormData(data)) {
    warning.innerHTML = "Periksa form anda sekali lagi";
  } else {
    document.getElementById("registerForm").reset();
    warning.innerHTML = "";

    return true;
  }
}

let btn = document.getElementById("submit-form");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  submit();
});

// subscribe kabar berita
let subsButton = document.getElementById("subs-button");

subsButton.addEventListener("click", function (event) {
  event.preventDefault();
  let subsEmail = subscribeEmail();

  if (subsEmail) {
    document.getElementById("subs-form").reset();
    alert("Anda berhasil subscribe kabar berita Life Well!");
  }
});

function subscribeEmail() {
  let email = document.getElementById("subs-email").value;
  return email;
}
