// toggle-div 클릭 -> toggle 모양, nav-list 내려오기
const toggleDiv = document.getElementsByClassName('nav-toggle')[0]
const toggleI = toggleDiv.getElementsByTagName('i')[0]
const navList = document.getElementsByClassName('nav-list')[0]

toggleDiv.onclick = (event) => {
    navList.classList.toggle('show-menu')

    toggleI.classList.toggle('bi-list')
    toggleI.classList.toggle('bi-x-lg')
}

const searchDiv = document.getElementById('search')
const searchCon = document.getElementsByClassName('search-container')[0]

searchDiv.onclick = (event) => {
    searchCon.classList.toggle('show-search')
}

const footerSearchDiv = document.getElementById('footer-search')

footerSearchDiv.onclick = (event) => {
    searchCon.classList.toggle('show-search')
}

const fileName = "data.json"

fetch(fileName)
.then((res) => res.json())
.then((data) => setData(data))
.catch((error) => error)

let allData = ""

function setData(data) {
    allDatat = data
    showData(data)
}

function showData(data) {
    let itemContainerString = ""
    let popupContainerString = ""

    data.forEach((element, idx) => {
        let articleStr = `<article class="items" id="article-${idx+1}">
            <a href="#pop_info_${idx+1}" class="btn_open"><img src="img/${element.image}" alt=""></a>
            <div class="explain">
                <h2 class="item title">${element.name}</h2>
                <h3 class="item">189,000원</h3>
                <button class="btn cart-btn item"><a href="shopping.html">장바구니</a></button>
            </div>
        </article>\n`

        let popupStr = `<div id="pop_info_${idx+1} class="pop_wrap" style="display:none;">
            <div class="pop_inner">
                <img src="img/${element.image}" alt="">
                <h2>${element.name}</h2>
                <h3>189,000원</h3>
                <p>${element.description}</p>
                <button type="button" class="btn_close">닫기</button>
            </div>
        </div>\n`

        itemContainerString += articleStr
        popupContainerString += popupStr
    })

    const itemContainer = document.getElementsByClassName('item-container')[0]
    itemContainer.innerHTML = itemContainerString
    const mainContainer = document.getElementsByClassName('popup-container')[0]
    mainContainer.innerHTML = popupContainerString
}

function search(){
    const searchItem = document.getElementById('search-bar').value
    const titleList = document.getElementsByClassName('title')
    let cnt = 0
    
    for(var i = 0; i<titleList.length; i++){
        if(titleList[i].textContent.includes(searchItem)) {
            document.getElementById(`article-${i+1}`).style.display = 'block'
            cnt++
        }
        else {
            document.getElementById(`article-${i+1}`).style.display = 'none'
        }
    }
}

var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

console.log(target, btnPopClose)

// 팝업 열기
for (var i = 0; i < target.length; i++) {
    target[i].addEventListener('click', function () {
        console.log(this.getAttribute('href'))
    });
}

// 팝업 닫기
for (var j = 0; j < target.length; j++) {
    btnPopClose[j].addEventListener('click', function () {
        this.parentNode.parentNode.style.display = 'none';
    });
}
