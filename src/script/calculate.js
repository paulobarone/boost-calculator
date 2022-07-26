const select = document.querySelector('#numberBoosts')
const button = document.querySelector('#submit')

button.addEventListener('click', (event) => {
  event.preventDefault()
  console.clear()

  const optionValue = Number(select.options[select.selectedIndex].value)
  const boostLevelValueAfter = Number(document.querySelector('#boostLevelValueAfter').value)
  const boostLevelValueBefore = Number(document.querySelector('#boostLevelValueBefore').value)

  const resultContainer = document.querySelector('.result-container')
  const resultStones = document.querySelector('.resultStones')
  const resultPrice = document.querySelector('.resultPrice')
  const bugContainer = document.querySelector('.bug-container')
  
  const showResult = () => {
    if(boostLevelValueBefore < boostLevelValueAfter) {
      resultContainer.style.display = "block"
      bugContainer.style.display = 'none'
    
      resultStones.innerHTML = stones(multiplier(optionValue))
      resultPrice.innerHTML = `$ ${stones(multiplier(optionValue)) * Number(resultValue.value)}`
    } if(boostLevelValueBefore >= boostLevelValueAfter) {
      resultContainer.style.display = 'none'
      bugContainer.style.display = 'block'
    }
  }

  showResult()
})


function multiplier(multiplo) {
  let boostLevelValueAfter = Number(document.querySelector('#boostLevelValueAfter').value)

  let numbers = 0
  let arrayMultiplier = [numbers]
  for(i = 0; i <= boostLevelValueAfter; i++) {
    arrayMultiplier.push(numbers += multiplo)
  }
  
  arrayMultiplier = arrayMultiplier.filter(item => item <= boostLevelValueAfter)
  return arrayMultiplier
}

function stones(array) {
  const boostLevelValueAfter = Number(document.querySelector('#boostLevelValueAfter').value)
  const boostLevelValueBefore = Number(document.querySelector('#boostLevelValueBefore').value)

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

  if(boostLevelValueBefore > 0 ) {
    let stonesValuesFinal = stonesValues.slice(Number(boostLevelValueBefore - 1), boostLevelValueAfter)
    stonesValuesFinal = stonesValuesFinal.pop() - stonesValuesFinal[0]
    return stonesValuesFinal
  }

  return stonesValues.pop()
}
