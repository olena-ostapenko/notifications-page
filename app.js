let allRead = document.querySelector(".unread-button")


let callbell = document.querySelector(".quantity")

let div = document.querySelectorAll(".unread")


allRead.addEventListener("click", function(event){
    event.preventDefault()
    callbell.remove()

div.forEach(function (element, index){
        element.classList.remove("unread")

})

})