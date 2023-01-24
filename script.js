const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

// add functionality
button.addEventListener("click", () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso ❌");
    return;
  }

  alert(`Adicionado com sucesso! ✅`);
  nlwSetup.addDay(today);
});

// save functionality
form.addEventListener("change", () => {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
});

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

nlwSetup.setData(data);
nlwSetup.load();
