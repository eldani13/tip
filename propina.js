document.addEventListener("DOMContentLoaded", function () {
  const valorFacturaInput = document.getElementById("valorFacturaInput");
  const selectPorcentaje = document.querySelectorAll(".select-percentage .option");
  const numPersonasInput = document.getElementById("numPersonas");
  const propinaSpan = document.querySelector(".propina");
  const totalSpan = document.querySelector(".total");
  const propinaPorPersonaSpan = document.querySelector(".propinaPorPersona");
  const resetButton = document.getElementById("resetButton");

  function calcularPropina() {
    const valorFactura = parseFloat(valorFacturaInput.value);
    const porcentaje = parseFloat(document.querySelector(".select-percentage .option.selected").textContent);
    const numPersonas = parseInt(numPersonasInput.value);

    if (
      !isNaN(valorFactura) &&
      !isNaN(porcentaje) &&
      !isNaN(numPersonas) &&
      numPersonas > 0
    ) {
      const propinaTotal = (valorFactura * porcentaje) / 100;
      const propinaPorPersona = propinaTotal / numPersonas;
      propinaSpan.textContent = "$" + propinaTotal.toFixed(2);
      totalSpan.textContent = "$" + (valorFactura + propinaTotal).toFixed(2);
      propinaPorPersonaSpan.textContent = "$" + propinaPorPersona.toFixed(2);
    } else {
      propinaSpan.textContent = "$0.00";
      totalSpan.textContent = "$0.00";
      propinaPorPersonaSpan.textContent = "$0.00";
    }
  }

  selectPorcentaje.forEach((option) => {
    option.addEventListener("click", function () {
      document.querySelectorAll(".select-percentage .option")
        .forEach((option) => {
          option.classList.remove("selected");
        });
      this.classList.add("selected");
      calcularPropina();
    });
  });

  valorFacturaInput.addEventListener("input", calcularPropina);
  numPersonasInput.addEventListener("input", calcularPropina);
  
  resetButton.addEventListener("click", function () {
    valorFacturaInput.value = "";
    selectPorcentaje.forEach(option => option.classList.remove("selected"));
    numPersonasInput.value = "";
    propinaSpan.textContent = "$0.00";
    totalSpan.textContent = "$0.00";
    propinaPorPersonaSpan.textContent = "$0.00";
  });
});
