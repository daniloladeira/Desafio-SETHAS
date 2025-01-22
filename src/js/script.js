document.getElementById("toggle-senha").addEventListener("click", function() {
  const senhaInput = document.getElementById("senha");
  const toggleSenhaIcon = document.getElementById("toggle-senha");
  const tipo = senhaInput.type === "password" ? "text" : "password";
  senhaInput.type = tipo;

  toggleSenhaIcon.classList.toggle("fa-eye-slash");
  toggleSenhaIcon.classList.toggle("fa-eye");
});

document.querySelector("button").addEventListener("click", function(event) {
  const nomeInput = document.getElementById("nome");
  const cpfInput = document.getElementById("CPF");
  const senhaInput = document.getElementById("senha");

  const showAlert = (message, isSuccess = false) => {
    const customAlert = document.createElement("div");
    customAlert.innerText = message;
    customAlert.style.position = "fixed";
    customAlert.style.top = "20px";
    customAlert.style.left = "50%";
    customAlert.style.transform = "translateX(-50%)";
    customAlert.style.backgroundColor = isSuccess ? "#d4edda" : "#f8d7da";
    customAlert.style.color = isSuccess ? "#155724" : "#721c24";
    customAlert.style.padding = "10px";
    customAlert.style.border = isSuccess ? "1px solid #c3e6cb" : "1px solid #f5c6cb";
    customAlert.style.borderRadius = "5px";
    customAlert.style.zIndex = "1000";
    document.body.appendChild(customAlert);

    setTimeout(() => {
      document.body.removeChild(customAlert);
    }, isSuccess ? 3000 : 3000);
  };

  if (nomeInput.value === "") {
    showAlert("Campo nome é obrigatório!");
    nomeInput.style.borderColor = "red";
    return;
  } else {
    nomeInput.style.borderColor = "";
  }

  if (cpfInput.value === "") {
    showAlert("Campo CPF é obrigatório!");
    cpfInput.style.borderColor = "red";
    return;
  } else {
    cpfInput.style.borderColor = "";
  }

  if(senhaInput.value === "") {
    showAlert("Campo senha é obrigatório!");
    senhaInput.style.borderColor = "red";
    return;
  }

  showAlert("Acesso Autorizado!", true);
  event.preventDefault();
});