let btnOpen = document.querySelector('.open-modal')
let modal = document.querySelector('.modal')
let iconClose = document.querySelector('.modal-header i')
let btnClose= document.querySelector('.modal-footer button')

function toggleModal(params) {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        toggleModal()
    }
})