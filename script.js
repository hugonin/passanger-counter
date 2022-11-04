let counter = document.getElementById("counter")
let addButton = document.getElementById("btn-add")
let saveButton = document.getElementById("btn-save")
let savedEntries = document.getElementById("entries")
let resetButton = document.getElementById("btn-reset")
let year = document.getElementById("year")

let count = 0


addButton.onclick = () => {
    count += 1 
    counter.textContent = count
}

saveButton.onclick = () => {
    let countStr = count + " - "
    savedEntries.textContent += countStr
    counter.textContent = 0
    count = 0   
}

resetButton.onclick = () => {
    counter.textContent = 0
    count = 0
    savedEntries.textContent = `Previous entries: `

}

year.innerHTML = new Date().getFullYear()




