let styles = `.made-by a{filter: grayscale(1);}`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
let website = `https://${location.host}`
let whatsLink = `https://maxestevam.bio.link/?&ref=${website}`

let madeBy = document.querySelector('.made-by')
madeBy.innerHTML = `Made By <a href="${whatsLink}" target="_blank">Max Estevam</a>`
