import { eneImages } from "./data.js";
const imagesContainer = document.getElementById("images-container")
const getImageBtn = document.getElementById("get-img-btn")
const closeBtn = document.getElementById("btn-close")

closeBtn.addEventListener("click", function(){
imagesContainer.style.display ="none"
})

getImageBtn.addEventListener("click", rendermyImages)

function getMatchingImages(){
    const checkedRadioButton = document.querySelector('input[type="radio"]:checked')
    if(checkedRadioButton){
        const matchingTypesArray = eneImages.filter(function(images){
            return images.type.includes(checkedRadioButton.value)
        })
        return matchingTypesArray
    }
    
}
function getSingleObject(){
    let matchingTypes = getMatchingImages()
    if(matchingTypes.length === 1){
        return (matchingTypes[0])
    }else {
        let randomindex = Math.floor(Math.random() * matchingTypes.length)
        return (matchingTypes[randomindex])
    }
}
function rendermyImages(){
    
    const imagesModal = document.getElementById("images-modal");
    let singleMatchingObject = getSingleObject()
    let imagehtml = ""
        imagehtml = `<div class="image">
        <img class = "myimages" src="${singleMatchingObject.imagesrc}" alt="${singleMatchingObject.type}">
    </div>`
    imagesModal.innerHTML = imagehtml
     imagesContainer.style.display = "flex"
     
    }

    

function generateRadiosHtmlArray(){
    let typeofImageArray = []
    for(let image of eneImages){
        for (let type of image.type){
            if(!typeofImageArray.includes(type)){
                typeofImageArray.push(type)
            }
            
        }
    }return typeofImageArray
}
function generateRadiosHtml() {
    let myImageArray = generateRadiosHtmlArray()
    let radiosHtml = '';
    for (let imageType of myImageArray) {
        radiosHtml += `
            <div class="image-types">
                <label for="${imageType}">
                    <input 
                        type="radio" 
                        name="image-type" 
                        value="${imageType}" 
                        id="${imageType}"> ${imageType}
                </label>
            </div>`
    }
    return radiosHtml
}

function render(){
    document.getElementById("choice-radios").innerHTML = generateRadiosHtml()
}


render()