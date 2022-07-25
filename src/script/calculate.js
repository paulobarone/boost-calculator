const select = document.querySelector('#numberBoosts')
const button = document.querySelector('#submit')

button.addEventListener('click', (event) => {
  event.preventDefault()
  console.clear()

  let boostLevelValueAfter = document.querySelector('#boostLevelValueAfter').value
  let boostLevelValueBefore = document.querySelector('#boostLevelValueBefore').value

  const optionValue = Number(select.options[select.selectedIndex].value)

  const resultContainer = document.querySelector('.result-container')
  const resultStones = document.querySelector('.resultStones')
  const resultPrice = document.querySelector('.resultPrice')
  const bug = document.querySelector('.bug')

  const showResult = () => {
    resultContainer.style.display = "block"
    bug.parentElement.style.display = 'none'
    console.log(boostLevelValueBefore)
    console.log(boostLevelValueAfter)

    resultStones.innerHTML = stones(multiplier(optionValue))
    resultPrice.innerHTML = `$ ${stones(multiplier(optionValue)) * Number(resultValue.value)}`
  }

  showResult()
})

function multiplier(multiplo) {
  let boostLevelValueAfter = document.querySelector('#boostLevelValueAfter').value

  let numbers = 0
  let arrayMultiplier = [numbers]
  for(i = 0; i <= boostLevelValueAfter; i++) {
    arrayMultiplier.push(numbers += multiplo)
  }
  
  arrayMultiplier = arrayMultiplier.filter(item => item <= boostLevelValueAfter)
  console.log(arrayMultiplier)
  return arrayMultiplier
}

function stones(array) {
  let boostLevelValueAfter = document.querySelector('#boostLevelValueAfter').value
  let boostLevelValueBefore = document.querySelector('#boostLevelValueBefore').value

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
    })
  }

  return stonesValues.pop()
}