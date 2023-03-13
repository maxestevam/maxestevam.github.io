let styleSheet = `.made-by a{filter: grayscale(1);}`
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

let madeBy = document.querySelector('.made-by')
madeBy.innerHTML = 'Made By <a href="#">Max Estevam</a>'
