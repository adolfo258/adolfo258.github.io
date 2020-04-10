document.getElementById('btn-mensaje').addEventListener('click', ()=>{
    document.getElementById('popupMensaje').classList.add('active')
})

document.getElementById('popup-cerrar').addEventListener('click', ()=>{
    document.getElementById('popupMensaje').classList.remove('active')
})