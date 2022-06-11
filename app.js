//Deixando as imagens dinamicas e centralizando os botões

let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;

document.querySelector(
  ".slider--width"
).style.width = `calc(100vw * ${totalSlides})`;
document.querySelector(".slider-buttons").style.height = `${
  document.querySelector(".slider").clientHeight
}px`;

//Criando os botões para ir e voltar
function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}

function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin();
}

//Atualizar a margin para o slide rodar
function updateMargin() {
  let sliderItemWidth = document.querySelector(".slider--item").clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
}

setInterval(() => {
  goNext();
}, 4000);
