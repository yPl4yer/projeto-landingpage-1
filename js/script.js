const button = document.querySelector("membro1", "membro2")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector ("dialog button")

membro1.onclick = function () {

    modal.showModal()

}

membro2.onclick = function () {

    modal.showModal()

}

buttonClose.onclick = function () {

    modal.close()

}