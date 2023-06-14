const habilidadesItens = document.querySelectorAll(".habilidades-itens");
const habilidadesItensDiv = document.querySelector(".habilidades-itens div");
const removeBtn = document.querySelector(".remove-button");

habilidadesItens.forEach((e) => {
  e.addEventListener("mouseover", function () {
    e.lastElementChild.style.display = "block";
  });
  e.addEventListener("mouseout", function () {
    e.lastElementChild.style.display = "none";
  });
});

removeBtn.addEventListener("mouseover", function () {
  habilidadesItensDiv.classList.add("remove");
});

removeBtn.addEventListener("mouseout", function () {
  habilidadesItensDiv.classList.remove("remove");
});

removeBtn.addEventListener("click", function () {
  habilidadesItens.remove();
});
