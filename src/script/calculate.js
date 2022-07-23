const select = document.querySelector('#numberBoosts')
const button = document.querySelector('#submit')

button.addEventListener('click', (event) => {
  event.preventDefault()
  console.clear()

  const optionValue = Number(select.options[select.selectedIndex].value)

  const resultValue = document.querySelector('#resultValue')
  const resultStones = document.querySelector('.resultStones')
  const resultPrice = document.querySelector('.resultPrice')

  const showResult = () => {
    resultStones.style.display = "block"
    resultPrice.style.display = "block"

    resultStones.innerHTML = `Quantidade de stones: <br/> ${stones(multiplier(optionValue))}`
    resultPrice.innerHTML = `Preço total: <br/> ${stones(multiplier(optionValue)) * Number(resultValue.value)}`
  }

  showResult()
})


function multiplier(multiplo) {
  let boostLevelValueAfter = document.querySelector('#boostLevelValueAfter').value
  let boostLevelValueBefore = document.querySelector('#boostLevelValueBefore').value

  let numbers = 0
  let arrayMultiplier = [numbers]
  for(i = 0; i <= boostLevelValueAfter; i++) {
    arrayMultiplier.push(numbers += multiplo)
  }
  
  arrayMultiplier = arrayMultiplier.filter(item => item <= boostLevelValueAfter && item > boostLevelValueBefore)
  return arrayMultiplier
}

function stones(array) {
  let boostLevelValueAfter = document.querySelector('#boostLevelValueAfter').value

  let stonesQuantity = 0
  let sommer = 1
  let stonesValues = []
  
  for(i = 0; i < boostLevelValueAfter; i++) {

    stonesQuantity = stonesQuantity + sommer
    stonesValues.push(stonesQuantity)
    array.forEach(element => {
      if(element == i+1) {
        sommer = sommer + 1
        return stonesQuantity
      }
    });
  }
  return stonesValues.pop()
}