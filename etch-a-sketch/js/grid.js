let height = 16
let width = 16

// container div
let container = document.createElement("div")
container.setAttribute("style", "display:flex; justify-content: center; align-items; center")

for (let i = 0; i < height * width; i ++){
    const div = document.createElement("div")
    div.setAttribute("style", "background: blue; width:50px; height:50px")
    container.appendChild(div)
}

document.body.appendChild(container)

