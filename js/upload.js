// toggle-div 클릭 -> toggle 모양, nav-list 내려오기
const toggleDiv = document.getElementsByClassName('nav-toggle')[0]
const toggleI = toggleDiv.getElementsByTagName('i')[0]
const navList = document.getElementsByClassName('nav-list')[0]

toggleDiv.onclick = (event) => {
    navList.classList.toggle('show-menu')

    toggleI.classList.toggle('bi-list')
    toggleI.classList.toggle('bi-x-lg')
}

const inputButton = document.getElementsByClassName('product-class')
let clickedCartegory = 0

function clickInputButton(n){  
    for(var i = 0; i<inputButton.length; i++){
        inputButton[i].style.backgroundColor = '#FAFAFC'
    }
    
    inputButton[n].style.backgroundColor = '#CCFF00'
    clickedCartegory = n
}

let fileName = "data.json"

function uploadJson(){
    const uploadTitle = document.getElementById('product-name')
    const uploadCartegory = document.getElementsByClassName('product-class')[clickedCartegory]
    const uploadExplain = document.getElementById('product-explain')
    const uploadImage = document.getElementById('file')

    let uploadCartegoryEng = ""

    if(uploadCartegory.value == "라켓") uploadCartegoryEng = "rocket"
    else if(uploadCartegory.value == "볼") uploadCartegoryEng = "ball"
    else if(uploadCartegory.value = "의류") uploadCartegoryEng = "clothes"
    else uploadCartegoryEng = "shoes"

    let jsonData = {
        "name" : uploadTitle.value,
        "category" : uploadCartegoryEng,
        "image" : uploadImage.value.split('\\')[2],
        "description" : uploadExplain.value
    }

}