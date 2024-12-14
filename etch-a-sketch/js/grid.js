function createGrid(height, width) {
    const container = document.createElement("div");
    container.setAttribute("style", "display:flex; \
        justify-content: center; \
        align-items: center; \
        flex-direction: column; \
        flex: 1;");
    container.setAttribute("id", "container")
    
    for (let i = 0; i < width; i ++){
        const divContainer = document.createElement("div");
        divContainer.setAttribute("style", "display:flex;")
        divContainer.setAttribute("class", "gridElements")
    
        for (let j=0; j < height; j++){
            const div = document.createElement("div")
            div.setAttribute("style", `background: blue;\
                width:${(100/width)}vw; \
                height:${(100/height)}vw;\
                color:white;`);
            
            div.textContent = i*width + j;
            div.addEventListener("mouseenter", () => {
                div.style.background = "white"
            });
            div.addEventListener("mouseleave", () => {
                div.style.background = "blue"
            });
            divContainer.appendChild(div);
        }
        container.appendChild(divContainer);
    }
    
    document.body.appendChild(container);
}

// reset button
const resetButton = document.createElement("button");
resetButton.addEventListener("click", () => {
    let numberOfBlocks = prompt("Please enter number of boxes per row");
    numberOfBlocks = parseInt(numberOfBlocks);
    while (numberOfBlocks > 100) {
        numberOfBlocks = prompt(`Number of blocks too high!\nYou entered: ${numberOfBlocks} > 100\nPlease enter number of boxes per row`);
        numberOfBlocks = parseInt(numberOfBlocks);
    }
    document.body.removeChild(document.querySelector("#container"));
    createGrid(numberOfBlocks, numberOfBlocks)
});

// resetButton.setAttribute("style", "width:30px; height:30px;")
resetButton.textContent = "Reset Button"
document.body.appendChild(resetButton)

let height = 16
let width = 16
createGrid(height, width)


