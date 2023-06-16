const habilidadesItens = document.querySelectorAll(".habilidades-itens");
const habilidadesItensDiv = document.querySelector(".habilidades-itens div");
const removeBtn = document.querySelectorAll(".remove-button");
const addBtn = document.querySelectorAll(".btn-add");
const pessoaisAdd = document.querySelector(".pessoais-add");
const pessoaisForm = document.querySelector("#pessoais-form");
const pessoaisInput = document.querySelector("#pessoais-input");
const profissionaisAdd = document.querySelector(".profissionais-add");
const profissionaisForm = document.querySelector("#profissionais-form");
const profissionaisInput = document.querySelector("#profissionais-input");
const hobbiesAdd = document.querySelector(".hobbies-add");
const hobbiesForm = document.querySelector("#hobbies-form");
const hobbiesInput = document.querySelector("#hobbies-input");
var newHabilidade = document.createElement = `
                <div class="habilidades-itens">
                  <div>
                    
                  </div>
                  <a class="remove-button">
                    <i class="fa-solid fa-xmark"></i>
                  </a>
                </div>
                `;

habilidadesItens.forEach((e) => {
  e.addEventListener("mouseover", function () {
    e.lastElementChild.style.display = "block";
  });
  e.addEventListener("mouseout", function () {
    e.lastElementChild.style.display = "none";
  });
});

removeBtn.forEach((e) => {
  e.addEventListener("mouseover", function () {
    e.previousElementSibling.classList.toggle("remove");
  });
  e.addEventListener("mouseout", function () {
    e.previousElementSibling.classList.toggle("remove");
  });
  e.addEventListener("click", function () {
    e.parentElement.remove();
  });
});

pessoaisForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var pessoaisValue = pessoaisInput.value;
  pessoaisAdd.prependChild(newHabilidade);
})