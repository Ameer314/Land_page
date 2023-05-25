for (let i = 0 ; i<document.images.length ; i++) {
    if (!document.images[i].hasAttribute("alt")|| document.images[i].getAttribute("alt")==="") {
            document.images[i].setAttribute("alt", "from for loop")
    }
}

let inn = document.querySelector("form")


console.log("jijiji")