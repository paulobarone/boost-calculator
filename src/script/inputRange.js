let sliderBefore = document.getElementById("boostLevelValueBefore");
let outputBefore = document.getElementById("numberBoostsValueBefore");

outputBefore.innerHTML = 'Nível de boost atual: ' + sliderBefore.value;
sliderBefore.oninput = function() {
  outputBefore.innerHTML = 'Nível de boost atual: ' + this.value;
}




let sliderAfter = document.getElementById("boostLevelValueAfter");
let outputAfter = document.getElementById("numberBoostsValueAfter");

outputAfter.innerHTML = 'Nível de boost futuro: ' + sliderAfter.value;
sliderAfter.oninput = function() {
  outputAfter.innerHTML = 'Nível de boost futuro: ' + this.value;
}