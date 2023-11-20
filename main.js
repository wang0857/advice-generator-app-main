import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="advice-container">
    <h2 class="advice-title"></h2>
    <p class="advice-content"></p>
    <picture>
      <source media="(min-width:377px)" srcset="./images/pattern-divider-desktop.svg">
      <source media="(max-width:376px)" srcset="./images/pattern-divider-mobile.svg">
      <img src="./images/pattern-divider-desktop.svg" alt="divider" class="advice-divider">
    </picture>
    <div class="advice-btn">
      <img src="./images/icon-dice.svg" alt="dice button">
    </div>
  </div>
`

// Fetch API
async function getAPI() {
  const response = await fetch('https://api.adviceslip.com/advice')
  const data = await response.json()

  document.querySelector('.advice-title').innerText = `Advice # ${data.slip.id}`
  document.querySelector('.advice-content').innerText = `"${data.slip.advice}"`
}

getAPI()

// DOM elements
const btn = document.querySelector('.advice-btn')

btn.addEventListener('click', () => {
  getAPI()
})

