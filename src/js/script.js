document.getElementById("toggle-senha").addEventListener("click", function() {
  const senhaInput = document.getElementById("senha");
  const toggleSenhaIcon = document.getElementById("toggle-senha");
  const tipo = senhaInput.type === "password" ? "text" : "password";
  senhaInput.type = tipo;

  toggleSenhaIcon.classList.toggle("fa-eye-slash");
  toggleSenhaIcon.classList.toggle("fa-eye");
});

document.querySelector("button").addEventListener("click", function() {
  const nomeInput = document.getElementById("nome");
  const cpfInput = document.getElementById("CPF");
  const senhaInput = document.getElementById("senha");

  if (nomeInput.value === "") {
    alert("Campo nome é obrigatório!");
    nomeInput.style.borderColor = "red";
    return;
  } else {
    nomeInput.style.borderColor = "";
  }

  if (cpfInput.value === "") {
    alert("Campo CPF é obrigatório!");
    cpfInput.style.borderColor = "red";
    return;
  } else {
    cpfInput.style.borderColor = "";
  }

  if(senhaInput.value === "") {
    alert("Campo senha é obrigatório!");
    senhaInput.style.borderColor = "red";
    return;
  }
});