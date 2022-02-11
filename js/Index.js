import Api from "./Api.js";
console.log("v~0.0.0.1")
Api.msg()
Api._createList(document.querySelector("#playList"))
const inputData = document.getElementById("form")
window.addEventListener("load", ()=>{
    document.querySelectorAll(".search-input").forEach(inputField =>{
       const tableRows = inputField.closest("table").querySelectorAll("tbody tr")
       const headerCell = inputField.closest("th")
       const otherHeaderCells = inputField.closest("tr").querySelectorAll("th")
       const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell)
        const searchableCells = Array.from(tableRows)
        .map(row => row.querySelectorAll("td")[columnIndex])
        //console.log(searchableCells)
        inputField.addEventListener("input", ()=>{
            const searchQuery = inputField.value.toLowerCase()
            for (const tableCell of searchableCells){
                const row = tableCell.closest("tr")
                const value = tableCell.textContent
                .toLowerCase()
                .replace(",","")
                row.style.visibility = null
                if(value.search(searchQuery) === -1){
                    row.style.visibility = "collapse"
                }
            }
        })

    })
})
inputData.addEventListener("submit",dataSubmitted)
//document.getElementById("playList").innerHTML = Api._createList()
function sendMsg(){
    const string = inputData.ins4.value
    const code = string.slice(17)
    const embed = 'https://www.youtube.com/embed/' + code + '?controls=1'
    console.log(embed)
    let msg = {
        id: Math.floor(Math.random()*10000),
        song: inputData.ins0.value,
        author: inputData.ins1.value,
        album: inputData.ins2.value,
        duration: inputData.ins3.value,
        code: embed
    }
    return msg
}
function dataSubmitted(e){
    e.preventDefault()
    const upload = document.getElementById("upload").innerHTML
    const list = Api.getAllSongs()
    const isThere = list.find(song => song.id == upload)
    if(isThere){
            Api.trashOne(upload, Api.getAllSongs())
            const msg = sendMsg()
            Api.saveOne(msg)
    }else{
            const msg = sendMsg()
            Api.saveOne(msg)
    }
    Api.getAllSongs()
    
}






