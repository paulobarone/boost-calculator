const select = document.querySelector('#numberBoosts')
const button = document.querySelector('#submit')

document.querySelector('#boostLevelValueAfter').focus()

button.addEventListener('click', (event) => {
  event.preventDefault()
  console.clear()

  const optionValue = Number(select.options[select.selectedIndex].value)
  const boostLevelValueBefore = document.querySelector('#boostLevelValueBefore').value

  stones(boostLevelValueBefore, multiplier(optionValue))
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
  console.log(arrayMultiplier)
  return arrayMultiplier
}

function stones(array) {
  let boostLevelValueAfter = document.querySelector('#boostLevelValueAfter').value
  let optionValue = Number(select.options[select.selectedIndex].value)

  let stonesQuantity = 0
  let sommer = 0

  for(i = 0; i < boostLevelValueAfter; i++) {
    stonesQuantity++
    console.log(stonesQuantity)
  }
}