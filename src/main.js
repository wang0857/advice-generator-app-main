import './style.css'
import AdviceService from './services/advice.service'

document.querySelector('#app').innerHTML = `
  <div class="advice-container">
    <h2 class="advice-title"></h2>
    <p class="advice-content"></p>
    <picture>
      <source media="(min-width:377px)" srcset="images/pattern-divider-desktop.svg">
      <source media="(max-width:376px)" srcset="images/pattern-divider-mobile.svg">
      <img src="images/pattern-divider-desktop.svg" alt="divider" class="advice-divider">
    </picture>
    <div class="advice-btn">
      <img src="images/icon-dice.svg" alt="dice button">
    </div>
  </div>
`

// Fetch API
function getAPI() {
  AdviceService.get().then(data => {
    const adviceData = data.data
    
    document.querySelector('.advice-title').innerText = `Advice # ${adviceData.slip.id}`
    document.querySelector('.advice-content').innerText = `"${adviceData.slip.advice}"`
  })
}

getAPI()

// DOM elements
const btn = document.querySelector('.advice-btn')
const dice = document.querySelector('.advice-btn img')

btn.addEventListener('click', () => {
  dice.classList.add('throw')
  getAPI()
})

dice.addEventListener('animationend', () => {
  dice.classList.remove('throw')
})



