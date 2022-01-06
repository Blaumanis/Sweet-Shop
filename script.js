const sweets = document.querySelectorAll('.sweet-item')
const cupcakes = document.querySelectorAll('.cupcake-item')
const cakes = document.querySelectorAll('.cake-item')
const doughnuts = document.querySelectorAll('.doughnut-item')
const allItems = document.querySelectorAll('.item')
const showCart = document.querySelectorAll('.show')

const btn = document.querySelectorAll('.btn')

const search = document.getElementById('search-item')
const sweetContainer = document.querySelector('.sweet-container')

function itemFunc(){
    allItems.forEach(item => {
        item.style.display = "none"
    })
}
function removeContainer(){
    sweetContainer.classList.add("remove-container")
}

btn.forEach(b => {
    b.addEventListener('click', () => {
        if(b.classList.contains("all-btn")){
            allItems.forEach(item => {
                item.style.display = ""
            })
        }else if(b.classList.contains("cakes-btn")){
            itemFunc()
            cakes.forEach(cake => {
                removeContainer()
                cake.style.display = "block"
            })
        }else if(b.classList.contains("cupcakes-btn")){
            itemFunc()
            cupcakes.forEach(cupcake => {
                removeContainer()
                cupcake.style.display = "block"
            })
        }else if(b.classList.contains("sweets-btn")){
            itemFunc()
            sweets.forEach(sweet => {
                removeContainer()
                sweet.style.display = "block"
            })
        }else if(b.classList.contains("doughnuts-btn")){
            itemFunc()
            doughnuts.forEach(doughnut => {
                removeContainer()
                doughnut.style.display = "block"
            })
        }
    })
})

// filter
search.addEventListener('keyup', filterNames)
function filterNames(){
    const searchValue = search.value.toUpperCase();
    console.log(searchValue)

    allItems.forEach(i => {
        if(i.innerHTML.toUpperCase().indexOf(searchValue) > -1){
            i.style.display = "";
        } else {
            i.style.display = "none"
        }
    })
}

// LIGHTBOX
let activeImage = 0;
const images = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const iconLeft = document.createElement('i')
iconLeft.id = 'iconLeft'
iconLeft.innerHTML = '<i class="fas fa-caret-left"></i>'
const iconRight = document.createElement('i')
iconRight.id = 'iconRight'
iconRight.innerHTML = '<i class="fas fa-caret-right"></i>'
const iconExit = document.createElement('i')
iconExit.id = 'iconExit'
iconExit.innerHTML = '<i class="fas fa-times"></i>'
const innerBox = document.createElement('div')
innerBox.id = 'innerBox'

const img = document.createElement('img')
img.style.padding = '4px'
img.style.backgroundColor = 'black'
img.style.border = '2px solid white'

const imgs = document.querySelectorAll('.imgs')
imgs.forEach(image => {
    image.addEventListener('click', e => {
        e.preventDefault();
        lightbox.classList.add('active')
        img.src = image.src
        while (innerBox.firstChild){
            innerBox.removeChild(innerBox.firstChild)
        }
        lightbox.appendChild(innerBox)
        innerBox.appendChild(img)
        innerBox.appendChild(iconLeft)
        innerBox.appendChild(iconRight)
        innerBox.appendChild(iconExit)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

iconExit.addEventListener('click', () => {
    lightbox.classList.remove('active')
})

iconLeft.addEventListener('click', () =>{
        activeImage--;
        if(activeImage < 0){
           activeImage = images.length - 1;
        }
    img.src = `./images/${images[activeImage]}.jpeg`
    console.log(images[activeImage])
})

iconRight.addEventListener('click', () =>{
        activeImage++;
        if(activeImage > images.length - 1){
           activeImage = 0;
        }
    img.src = `./images/${images[activeImage]}.jpeg`
    console.log(images[activeImage])

})



// hamburger menu
const hamBtn = document.getElementById('hamburger')
const navLinks = document.querySelector('.nav-links')

hamBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active-links')
})

// add to cart
const showIcon = document.querySelectorAll('.show')
const itemCount = document.getElementById('itemCount')
const total = document.getElementById('total')
const price = document.querySelectorAll('.price')
const itemsText = document.getElementById('itemsText')
const totalPrice  = document.querySelector('.cart-module-total-price-number')
let itemCounter = 0;

// CART MODULE
const itemsCart = document.querySelector('.items')
const cartContainer = document.querySelector('.cart-module')

itemsCart.addEventListener('click', () => {
    cartContainer.classList.toggle('cart-module-active')
})

price.forEach(p => {
        p.addEventListener('click', (e)=> {
                if(e.target.parentElement.parentElement.classList.contains('item')){
                    let textEl = e.target.parentElement.firstChild
                    console.log(textEl)
                    let priceEl = textEl.nextSibling
                    console.log(priceEl.innerText)
                    let imgEl = e.target.parentElement.parentElement.firstChild.nextElementSibling
                    console.log(imgEl.src)
                }

            itemCounter++;
            itemCount.innerText = itemCounter;
            let x = p.innerText.slice(1)
            total.innerText = parseInt(total.innerText) + parseInt(x);
            totalPrice.innerText = total.innerText
            if(itemCounter === 1){
                itemsText.innerText = "Item - $"
            }else{
                itemsText.innerText = "Items - $"
            }
        })
    })


const h3 = document.querySelectorAll('.item h3')
function addToCart(){}
