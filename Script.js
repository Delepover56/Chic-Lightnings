const  modal = document.querySelector("#modal")
const  open = document.querySelector("#open")
const  close = document.querySelector("#close")

    open.addEventListener( 'click', ()=>{
        modal.showModal()
    })
    close.addEventListener( 'click', () => {
        modal.close()
    })