// let products = [
//     {
//         name: "iPhone 13",
//         price: 1100
//     },
//     {
//         name: "MacBook Pro",
//         price: 1400
//     },
//     {
//         name: "iPad Pro",
//         price: 900
//     },
//     {
//         name: "AirPods",
//         price: 199
//     }
// ];


// let USD_TO_UZS = 10950;
// // let newArray = []
// // for (let i = 0; i < products.length; i++) {
// //     let imtemPrices = products[i].price * USD_TO_UZS

// //     let newObj = {}
// //     newObj.price = imtemPrices
// //     newObj.name = products[i].name

// //     newArray.push(newObj)
// // }
// // console.log(newArray);

// let someArray = products.map(function (item, index) {
//     return {
//         id: index + 1,
//         name: item.name,
//         price: item.price * USD_TO_UZS * 0.9
//     }
// })

// console.log(someArray);


// let filteredArray = products.filter(item => item.name.toLowerCase().includes("pro"))

// console.log(filteredArray);

// fetch("https://api.thecatapi.com/v1/images/search")
// .then(responce => responce.json())
// .then(data => console.log(data))

let elWrapper = document.querySelector(".images__wrapper");
let elBtn = document.querySelector(".img__btn");
let elTemplate = document.querySelector("#image__temp").content;


elBtn.addEventListener("click", function() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=100")
    .then(response => response.json())
    .then(data => renderImages(data))
    
})


function renderImages(array) {
    elWrapper.innerHTML = null
    let newFragment = document.createDocumentFragment()
    
    for (const item of array) {
        let newLi = elTemplate.cloneNode(true)
        
        newLi.querySelector(".image").src = item.url
        
        newFragment.appendChild(newLi)
    }
    elWrapper.appendChild(newFragment)
}

// let result
// fetch("https://nbu.uz/uz/exchange-rates/json/")
// .then(res => res.json())
// .then(function (data) 
// {
//     (result = data)

//     console.log(data)
// }
// )


// console.log(result);