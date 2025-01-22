document.getElementById("toggle-senha").addEventListener("click", function() {
  const senhaInput = document.getElementById("senha");
  const toggleSenhaIcon = document.getElementById("toggle-senha");
  const tipo = senhaInput.type === "password" ? "text" : "password";
  senhaInput.type = tipo;

  toggleSenhaIcon.classList.toggle("fa-eye-slash");
  toggleSenhaIcon.classList.toggle("fa-eye");
});