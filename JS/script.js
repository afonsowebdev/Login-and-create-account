document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const inputText = document.querySelector("input[type='text']");
  const inputPassword = document.querySelector("input[type='password']");
  const inputCheckbox = document.querySelector("input[type='checkbox']");
  const btnSubmit = document.querySelector(".btnSubmit");
  const msgSuccess = document.getElementById("msgSuccess");

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (inputText.value === "" || inputPassword.value === "") {
      alert("Por favor, preencha todos os campos.");
    } else if (!inputCheckbox.checked) {
      alert("Por favor, aceite os termos e condições.");
    } else {
      msgSuccess.textContent = "Login realizado com sucesso!";
      form.reset();
    }
  });
});
