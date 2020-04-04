const btnHablemos = document.getElementById('hablemos')
const introContenedor = document.getElementById('intro-contenedor')

btnHablemos.addEventListener('click', ()=>{
    introContenedor.classList.toggle('active')
})