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
    if(boostLevelValueBefore < boostLevelValueAfter) {
      resultContainer.style.display = "block"
      bug.parentElement.style.display = 'none'
  
      resultStones.innerHTML = stones(multiplier(optionValue))
      resultPrice.innerHTML = `$ ${stones(multiplier(optionValue)) * Number(resultValue.value)}`
    } else {
      resultContainer.style.display = "none"
      bug.parentElement.style.display = 'block'
      bug.innerHTML = 'O nível atual precisa ser menor do que o nível desejado.'
    }
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

  if(boostLevelValueBefore > 0 ) {
    let stonesValuesFinal = stonesValues.slice(Number(boostLevelValueBefore - 1), boostLevelValueAfter)
    stonesValuesFinal = stonesValuesFinal.pop() - stonesValuesFinal[0]
    return stonesValuesFinal
  } if(boostLevelValueBefore >= boostLevelValueAfter) {
    document.querySelector('.bug-container').style.display = 'block'
    document.querySelector('.bug').innerHTML = 'O nível atual não pode ser maior que o nível futuro.'
  }

  return stonesValues.pop()
}