let styles = `.made-by a{filter: grayscale(1);}`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
let website = location.host
let whatsLink = `https://maxestevam.bio.link/?utm_source=${website}`

let madeBy = document.querySelector('.made-by')
madeBy.innerHTML = `Made By <a href="${whatsLink}" target="_blank">Max Estevam</a>`
