const error = document.querySelector("p.error");

const emailInput = document.querySelector("input[type='email']");

document.querySelector("input[type='submit'").addEventListener("click", (_) => {
  if (!/\w+@\w+\.\w+/.test(emailInput.value)) {
    emailInput.style.borderColor = "var(--red-400)";
    error.style.display = "block";
  } else {
    emailInput.style.borderColor = "var(--blue-200)";
    error.style.display = "none";
  }
});
